//key.js - figure out what set of credentias to return

if(process.env.NODE_ENV === 'production '){
    //we are in production
    module.exports = require('./prod');
}
else{
   // we are in dev 
   module.exports = require('./dev');
}