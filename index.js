process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
const request = require('request-promise');
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();

const TMTournamentsURL = 'https://auth.lar.tech:9060/oauth/token';


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
                'Authorization': 'Basic cmVzdGFwaTpyZXN0YXBpc2VjcmV0',
                'content-type': 'application/x-www-form-urlencoded', 
            },
        }).then(function(body){
            console.log(body);
        });
        
    } catch (error) {
        console.log(error);
    }
}

getToken();
