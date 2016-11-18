# Authentication

All the API is secured using WSSE authentication. For now only devices are allowed to access our API.

## What is WSSE ?

WSSE is a family of open security specifications for web services, specifically SOAP web services. The basic premise of
WSSE is that a request header is checked for encrypted credentials, verified using a timestamp and nonce, and
authenticated for the requested user using a password digest.

### Benefits

The security protocol for WSSE provides several security benefits:

- Username / Password encryption
- Safeguarding against replay attacks
- No web server configuration requirement

### Key Terms

| Nonce 	| Definition 	                                                                                                                                                                                        |
|:---------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
| Nonce 	| A unique string generated for use in the WSSE hashing algorithm and useful to help prevent against reply attacks. This value essentially represents a "request ID". 	                                |
| Timestamp | Indicates to the authorization server the time when the request was created or signed and can thus help prevent stale requests from being used at a later time. 	                                    |
| Key 	    | Unique authentication token used by the client as input to the hashing algorithm. The key is never transmitted in direct form with the request. 	                                                    |
| Digest 	| A unique string produced with the nonce, timestamp and secret values and used to authoritatively sign the request. The digest is issued with API requests to prove that the client has the secret. 	|

### Overview

WSSE Authentication is used to prove to the backend authentication service that the client possess the API secret,
without actually having to provide the key itself. Together with the "created" date time input, WSSE is a stronger
authentication protocol when compared with basic username and password.

The authentication process expects a properly formed `X-WSSE` header sent with every request. The values of this header
will be unique to every request and cannot be re-used. It also expects a constant `AUTHORIZATION` header the following
value `WSSE profile="UsernameToken"`

The process looks like this:

1. Generate a nonce. This string needs to have a high level of entropy and it is generally safe to use a GUID generator.

2. Generate a timestamp. The timestamp should be in seconds. Stale created timestamps will be rejected by the authentication
service, so they should be generated using a reliable system clock.

3. Generate a digest hash string using the sha1 one-way hashing algorithm. The input to the sha1 hash is simply a
concatenation of the nonce, created timestamp, and the API secret. Please note that the sha1 output should be hexadecimal, not binary.

4. Assemble the X-WSSE header using the following format:
        X-WSSE: UsernameToken Username="username", PasswordDigest="password_digest", Nonce="nonce", Created="created_timestamp"

5. Add both `X-WSSE` and `AUTHORIZATION` header to your request.


## Usage

### Requirements

First of all you you to retrieve both ID and key device from Studio Management Page.

- The identifier will be represented by the `id` variable.
- The key will be represented by the `key` variable.

### Process

1. Construct the `username` variable by concatenating `id` variable with string `-device`.

2. Generate a `nonce` variable containing a random string.

3. Generate a `timestamp` variable containing the current timestamp in seconds.

4. Generate a `rawDigest` variable by concatenating `nonce`, `timestamp` and `key` variables.

5. Generate a `digest` variable by encrypting the `rawDigest` using the **SHA1** algorithm with a string hexadecimal
output.

6. Assemble the X-WSSE header into the variable `wsseHeader` using the following format:

        UsernameToken Username="{{ username }}", PasswordDigest="{{ digest }}", Nonce="{{ nonce }}", Created="{{ timestamp }}"

7. Send your request with both following headers:

        AUTHORIZATION: WSSE profile="UsernameToken"
        X-WSSE: {{ wsseHeader }}


### Use Case

In order to make sure your authorization will work as expected we **highly** recommend using the following test case to
ensure your `X-WSSE` header will be generated properly.

- id: `13`
- key: `cb5b17a83881b35a2dffde2fed6921f0`
- username: `13-device`
- nonce: `3ab47f06117b768111bea41d8525ac64`
- timestamp: `1456738274`
- rawDigest: `3ab47f06117b768111bea41d8525ac641456738274cb5b17a83881b35a2dffde2fed6921f0`
- digest: `f076ab625fc3c368a5f8537d236c5a452dfc56d8`
- wsseHeader: `UsernameToken Username="13-device", PasswordDigest="f076ab625fc3c368a5f8537d236c5a452dfc56d8", Nonce="3ab47f06117b768111bea41d8525ac64", Created="1456738274"`

### Potential Errors

| HTTP code |                                                                                    Body                                                                                   | Cause                                    | Resolution                                                                                                                                                                                                                           |
|:---------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 403       | `{"errors":{"Authentication":"Authorization header not found."}}`                                                                                                         | Missing `AUTHORIZATION` header           | Add header `AUTHORIZATION: WSSE profile="UsernameToken"`.                                                                                                                                                                            |
| 403       | `{"errors":{"Authentication":"Authorization header is not valid: must be 'WSSE profile=\"UsernameToken\"' "}}`                                                            | Invalid `AUTHORIZATION` header           | Add header `AUTHORIZATION: WSSE profile="UsernameToken"`.                                                                                                                                                                            |
| 403       | `{"errors":{"Authentication":"X-WSSE header not found."}}`                                                                                                                | Missing `X-WSSE` header                  | Add the `X-WSSE` header formed as explained previously.                                                                                                                                                                              |
| 403       | `{"errors":{"Authentication":"X-WSSE header must match \/UsernameToken Username=\"([^\"]+)\", PasswordDigest=\"([^\"]+)\", Nonce=\"([^\"]+)\", Created=\"([^\"]+)\"\/"}}` | Malformed `X-WSSE` header                | Ensure your `X-WSSE` header match the regex `\/UsernameToken Username=\"([^\"]+)\", PasswordDigest=\"([^\"]+)\", Nonce=\"([^\"]+)\", Created=\"([^\"]+)\"\/`.                                                                        |
| 403       | `{"errors":{"Authentication":"Username could not be found."}}`                                                                                                            | Invalid Username                         | Make sure your device id exists and username is properly generated according as explained previously.                                                                                                                                |
| 403       | `{"errors":{"Authentication":"Provided API Key is invalid for given device"}}`                                                                                            | Either malformed digest or invalid key   | Make sure your api key is valid for the given device. Then ensure your digest is properly generated (SHA1 algorithm and hexadecimal string). You may check the use case to ensure you have to same result using your implementation. |
| 403       | `{"errors":{"Authentication":"Request is out-of-date: it was built at 1478187026 so it was valid since 1478183426 and until 1478190626 (current 1478273599)."}}`          | Invalid timestamp                        | Make sure your timestamp is valid and your clock is properly synchronized. If it's not possible to synchronize your clock, you may consider using the current time retrieve by the API.                                              |
| 403       | `{"errors":{"Authentication":"Nonce 42 previously used at 1478273507388."}}`                                                                                              | Invalid nonce, it has been already used. | Make sure your nonce use a confident pseudo-random algorithm with a high entropy to prevent nonce conflict.                                                                                                                          |