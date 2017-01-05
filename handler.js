'use strict';

var maxmind = require('maxmind');
var cityLookup = maxmind.openSync('./GeoLite2-City.mmdb');

module.exports.lookupcity = (event, context, callback) => {

  // functional error handling when we don't care 
  // if the operations is successful.
  var tryit = (funct, ret) => {
    try{
      return funct.call();
    }catch(ex){ return ret; }
  };

  var ips = null;
  ips = tryit(()=>{ return event.queryStringParameters.ips.split(",") }, null);
  ips = ips || tryit(()=>{ return [event.requestContext.identity.sourceIp] }, null);
  ips = ips || ["1.2.3.4"];


  var ip_hash = {};
  ips.forEach(function(ip){
    ip_hash[ip] = tryit(()=>{ return cityLookup.get(ip) });
  });
  
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(ip_hash)
  });

};
