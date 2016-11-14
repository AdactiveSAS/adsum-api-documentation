# Introduction

**Adsum API** is a REST, rather a CRUD API. This API may be used to read/write over all our data model entities.

# Reading this Documentation

This documentation is splited into 4 parts:

* This README
* A CHANGELOG
* Somes tutorials
* The API documentation reference

The API documentation reference is structured by several *main chapters* that explains some global and recurrents concepts such as *Authentication* or *Base URL*. It also include the chapter *Entities* that contains all our ressources. Each resource listed in is composed by:

* The Data Model
* The CRUD methods summary described by *HTTP Verb*, *Endpoint* and *Description*

Then each *CRUD* method is fully documented by:

* Defining all parameters (required, optionals and default value)
* Expected responses including possible errors

# Getting Started

All endpoints referenced in the documentation have the base URL https://api.adsum.io/2.1. This base path goes before the endpoint path. In this example, you'd combine https://api.adsum.io/2.1 and `/{domain}?{query}` to get the request URL https://api.adsum.io/2.2/{object}?{query}

For this endpoint {query} and {object} are the URL parameter.

Query parameters are added to the end of the URL with query string encoding. If you wanted to add the count query parameter to that request, you'd the query string ?count=1 to the end of the URL, producing https://api.adsum.io/2.1/poi?count=1&site=287
All queries should have the project's site specified

All endpoints require an authentification which is provided in each request header ( see WSSE example for more informations).

# Ressources

You can find an example of a node client here : https://github.com/AdactiveSAS/project-importNode
