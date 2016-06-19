var http = require('http');

var server = http.createServer(onRequest);

function onRequest(client_req, client_res) {
    console.log("receive a request");
    console.log(client_req.url);
    var options = {
        hostname: 'www.google.com',
        port: 80,
        path: client_req.url,
        method: 'GET'
    };
    var proxy = proxy_request(client_req, client_res, options); 
    client_req.pipe(proxy, {
        end: true
    });
}

function proxy_request(client_req, client_res, options) {
    return http.request(options, function(res) {
        console.log("receive the google response");
        if(res.statusCode === 302) { // redirect
            console.log("receive a redirect statusCode");
            buildNewOptions(res, options);
            var proxy = proxy_request(client_req, client_res, options);
            client_req.pipe(proxy, {
                end: true
            });          
        } else {
            res.pipe(client_res, {
                end: true
            });
        }
    });
}

function buildNewOptions(res, options) {
    options.path = res.headers.location;
}

server.listen(8080);
console.log("Application server started on port 'localhost:8080'");