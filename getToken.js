process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
const request = require('request-promise');
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
const  WebSocket  = require('ws');



var TM_AUTH = {
    grand_type : 'password',
    username : 'tldinhhuy@hcmut.edu.vn',
    password : 'tldinhhuy'

}
 
var auth = "nord_connect:nord_connect"
// var auth = [
//     clientID = 'nord_connect',
//     client_Secret = 'nord_connect'
// ]
const getToken = async(resp) => {
    try {
        let resp = await request({
            method: 'POST',
            uri: 'https://auth.lar.tech:9060/oauth/token',
            form: {
                'username':'tldinhhuy@hcmut.edu.vn',
                'password':'tldinhhuy',
                'grant_type':'password'
            },
            headers: {
                'Authorization':  'Basic ' + new Buffer(auth).toString('base64'),
                'content-type': 'application/x-www-form-urlencoded', 
            },
            json: true,
        }).then(function(body){
            console.log(body.access_token);
        });
        
    } catch (error) {
        console.log(error);
    }
}

getToken();

// var ws = new WebSocket('wss://ws-api.lar.tech:9070/streamdata');