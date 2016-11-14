# Introduction

Adsum web services API allows for programmatic access to adsum tools and services. Use this API to retrieve information about your account, upload and change resources.

# Reading this Documentation

This documentation is structured by endpoint, which is a specific method within that API that performs one action and is located at a specific URL.

Each endpoint in this documentation is described using several parts:

* The HTTP method: includes GET, POST, PUT, PATCH, DELETE

* The path: for instance, /2.2/{object}?{query}

* URL parameters: these are the parts of the endpoint path wrapped in brackets, like {query} and {object} in this example.

All URLs referenced in the documentation have the base path https://api.adsum.io. This base path goes before the endpoint path. In this example, you'd combine https://api.adsum.io and /2.2/{object}?{query} to get the request URL https://api.adsum.io/2.2/{object}?{query}

For this endpoint {query} and {object} are the URL parameter.

Query parameters are added to the end of the URL with query string encoding. If you wanted to add the count query parameter to that request, you'd the query string ?count=1 to the end of the URL, producing https://api.adsum.io/2.2/poi?count=1&site=287
All queries should have the project's site specified

All endpoints require an authentification which is provided in each request header ( see WSSE example for more informations).

# Ressources

You can find an example of a node client here : https://github.com/AdactiveSAS/project-importNode
