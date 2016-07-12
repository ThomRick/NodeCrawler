/// <reference path="../../../../../typings/node/node.d.ts" />

import * as Http from "http";
import * as Path from "path";
import * as Url from "url";
import * as FileSystem from "fs";

/**
 * HttpServer
 */
class HttpServer {

    private server : Http.Server;
    private port : number;

    /**
     * Constructor
     */
    constructor(port : number) {
        this.port = port;
    }

    /**
     * serverRequestHandler
     * 
     * @param serverRequest
     * @param serverResponse
     */
    private serverRequestHandler(serverRequest : Http.ServerRequest, serverResponse : Http.ServerResponse) : void {
        console.log("Receive an HTTP request");
        let clientFilePath : string = Path.join(__dirname, "../../resources/public");
        let requestPath : string = Url.parse(serverRequest.url).pathname;
        let filePath : string;
        if (requestPath === "/") {
            filePath = Path.join(clientFilePath, "/index.html");
        } else {
            filePath = Path.join(clientFilePath, requestPath);
        }
        console.log("Static file requested : ", filePath);
        FileSystem.exists(filePath, exist => {
            if (exist) {
                let readStream : FileSystem.ReadStream = FileSystem.createReadStream(filePath);
                serverResponse.writeHead(200);
                readStream.pipe(serverResponse);
            } else {
                serverResponse.writeHead(404, {
                    "Content-Type": "text/plain"
                });
                serverResponse.write("404 Not Found\n");
                serverResponse.end();
            }
        });
    }

    /**
     * start
     * 
     * @return true if the server is started an listening
     */
    public start() : boolean {
        this.server = Http.createServer(this.serverRequestHandler);
        this.server.listen(this.port);
        return true;
    }

}

export default HttpServer;