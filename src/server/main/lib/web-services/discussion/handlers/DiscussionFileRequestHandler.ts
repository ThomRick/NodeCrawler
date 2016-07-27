/// <reference path="../../../../../../../typings/node/node.d.ts" />
import * as Http from "http";

import IRequestHandler from "../../../utils/http/handler/IRequestHandler";

/**
 * DiscussionFileRequestHandler
 */
class DiscussionFileRequestHandler implements IRequestHandler {
    
    /**
     * Constructor
     */
    constructor() {}

    /**
     * handle
     */
    public handle(serverRequest: Http.IncomingMessage, serverResponse: Http.ServerResponse): void {
        console.log("[" + new Date().toJSON()+ "] - DiscussionFileRequestHandler - Receive a request: ");
        serverRequest.on("data", function(data) {
            console.log("receive data");
            console.log(data.toString());
        });
        serverResponse.end();
    }
}

export default DiscussionFileRequestHandler;