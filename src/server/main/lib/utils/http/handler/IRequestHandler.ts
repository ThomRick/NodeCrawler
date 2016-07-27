/// <reference path="../../../../../../../typings/node/node.d.ts" />
import * as Http from "http";

/**
 * IRequestHandler
 */
interface IRequestHandler {
    handle: (serverRequest : Http.IncomingMessage, serverResponse : Http.ServerResponse) => void;
}

export default IRequestHandler;