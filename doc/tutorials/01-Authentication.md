# Authentication

We use WSSE in order to assure the security of your data. All identifications information can be found in your account here : http://adactive.com/help/docs/administration/get-device-credentials/


+ Objectiv-C Client
Please refer to here : https://github.com/laiso/CocoaWSSE

+ Java Client
Please refer to here : https://github.com/skrusche63/WSS-Client-for-Android

+ C++ Client
Please refer to here :  https://github.com/chinthakagodawita/wsse-cpp

+ node Js client 
Please refer to here :  https://github.com/bouzuya/node-wsse



If you want to do it yourself please see below





## Requirements

In this example, we will assume that you have installed the 
[CryptoJs](https://www.npmjs.com/package/crypto-js) library.

## Implementation
```javascript

class Client {
    /**
    * Generate a random nonce value
    *
    * @return {string}
    */
    static generateNonce(){
        const cryptoObj = window.crypto || window.msCrypto; // IE 11
        
        const array = new Uint32Array(1);
        cryptoObj.getRandomValues(array);

        return CryptoJS.MD5(array[0].toString(), 1);
    }
    
    /**
     * Retrieve current timestamp
     *
     * @return {string}
     */
    static now() {
        return parseInt(Date.now() / 1000).toString();
    }
    
    /**
    * @param {string} username
    * @param {string} key
    */
    constructor(username, key){
        this.username = username;
        this.key = key;
    }
    
    /**
     * Get the WsseHeader value
     *
     * @return {string}
     */
    getWsseHeader() {
        const nounce = this.constructor.generateNonce();
        const timestamp = this.constructor.now();
        const key = this.key;
        const username = this.username;
        const digest = CryptoJS.SHA1(nounce + timestamp + key);

        return `UsernameToken Username="${username}", PasswordDigest="${digest}", Nonce="${nounce}", Created="${timestamp}"`;
    }
    
    /**
    * Do a basic HTTP Get request with authentication 
    * Caution: Errors are not handled
    *
    * @param {string} url
    * @param {function} callback
    */
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.setRequestHeader("Authorization", 'WSSE profile="UsernameToken"');
        xhr.setRequestHeader("X-WSSE", this.getWsseHeader());
        
        xhr.onload = () => {
            const rawData = xhr.responseText;
            const data = rawData ? JSON.parse(rawData) : null;
            
            callback(data, xhr);
        };
        
        xhr.send();
    }
    
    /**
    * Do a basic HTTP POST request with authentication 
    * Caution: Errors are not handled
    *
    * @param {string} url
    * @param {object} data
    * @param {function} callback
    */
    postJson(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.setRequestHeader("Authorization", 'WSSE profile="UsernameToken"');
        xhr.setRequestHeader("X-WSSE", this.getWsseHeader());
        
        // Set the Content-Type
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onload = () => {
            const rawData = xhr.responseText;
            const data = rawData ? JSON.parse(rawData) : null;
            
            callback(data, xhr);
        };
        
        xhr.send(JSON.stringify(data));
    }
    
    /**
    * Do a basic HTTP POST request with authentication 
    * Caution: Errors are not handled
    *
    * @param {string} url
    * @param {FormData} data
    * @param {function} callback
    */
    postForm(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.setRequestHeader("Authorization", 'WSSE profile="UsernameToken"');
        xhr.setRequestHeader("X-WSSE", this.getWsseHeader());
        
        xhr.onload = () => {
            const rawData = xhr.responseText;
            const data = rawData ? JSON.parse(rawData) : null;
            
            callback(data, xhr);
        };
        
        xhr.send(data);
    }
}
```

## Usage
```javascript
const deviceId = 13;
const key = "cb5b17a83881b35a2dffde2fed6921f0";

const username = `${deviceId}-device`;
const client = new Client(username, key);

// Url to GET the Site id 1
const url = "https://api.adsum.io/2.1/site/1";
const callback = (site) => {
    console.log(site);
};

client.get(url, callback);
```

### Output
```javascript
> {
    "logo": {
        "name": "fileoELgBd.png",
        "provider_name": "sonata.media.provider.file",
        "reference": "462f88450d35437c6fb3a92ce0866dbda72d4f22.png",
        "context": "site",
        "file_type": "image/png",
        "site": 1,
        "id": 10,
        "content_hash": "e1d73b1ece494d9ec92bb2230a4590bc",
        "uri": "http://api.adsum.io/uploads/media/site/0005/69/462f88450d35437c6fb3a92ce0866dbda72d4f22.png"
    },
    "description": "The site description",
    "opening": "Openned 24/7",
    "direction": "Take road 51",
    "city": "Paris",
    "cp": "75001",
    "address": "61 Rue de la liberté",
    "phone": "01 00 00 00 00",
    "languages":[
        "en",
        "fr"
    ],
    "target_platforms": [
        "web", "mobile", "kiosk"
    ],
    "email": "contact@site.com",
    "gps_positions": [
        {
            "longitude": 2.337021,
            "latitude": 48.860754,
            "altitude": 0,
            "x": -1562.6976424041,
            "y": 1046.1219670573,
            "z": 0
        },
        {
            "longitude": 2.33684,
            "latitude": 48.860845,
            "altitude": 0,
            "x": -1602.5426513107,
            "y": 1075.7038675477,
            "z": 0
        },
        {
            "longitude": 2.336785,
            "latitude": 48.86075,
            "altitude": 0,
            "x": -1614.3150403058,
            "y": 1044.3108302926,
            "z": 0
        },
        {
            "longitude": 2.335399,
            "latitude": 48.861015,
            "altitude": 0,
            "x": -1934.5757447796,
            "y": 1138.9937899356,
            "z": 0
        },
        {
            "longitude": 2.335515,
            "latitude": 48.861214,
            "altitude": 0,
            "x": -1909.5216861489,
            "y": 1205.4021379753,
            "z": 0
        },
        {
            "longitude": 2.336214,
            "latitude": 48.861142,
            "altitude": 0,
            "x": -1745.2553038816,
            "y": 1177.1839908672,
            "z": 0
        }
    ],
    "gps_transform": [
        3.1548830070639,
        -0.025177964515464,
        0,
        -0.040222999630998,
        2.9966572081312,
        3.0745878050027
    ],
    "gps_translate": [
        -1289321.4805686,
        -16199273.787904,
        0
    ],
    "locale": "en",
    "client_id": "559",
    "signature": "559",
    "metadata": {
        "country": {
            "key": "custom",
            "type": "string",
            "value": "This is a custom value"
        }
    },
    "version": 2,
    "created_at": "2015-08-21T10:02:02.000000Z",
    "updated_at": "2015-08-28T18:08:45.000000Z",
    "id": 1,
    "name": "Site test"
}
```