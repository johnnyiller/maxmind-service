# Serverless GeoIp Lookup

this is a simple service for anyone that wants a quick way to get some reasonable GeoIp lookups.

pretty simple once you deploy you can call the endpoint with the ips param

[SERVICE_ENDPOINT]?ips=1.2.3.4,127.0.0.1

It will return a json object with the ip address as the key and the data it found as the value

Visiting the endpoint with no parameter will lookup the remote ip address.  This is useful if you 
intend to use cors which is enabled to lookup a user on the client site and perhaps show or hide 
certain features based on country of origin.



