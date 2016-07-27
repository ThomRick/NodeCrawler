/// <reference path="../../../../../../../typings/node/node.d.ts" />
import * as Http from "http";
import IRequestHandler from "../handler/IRequestHandler";
import RequestRouterConfiguration from "./configuration/RequestRouterConfiguration";

/**
 * IRequestRouter
 */
interface IRequestRouter {
    post(path: string, handler: IRequestHandler): void;
    get(path: string, handler: IRequestHandler): void;
    put(path: string, handler: IRequestHandler): void;
    delete(path: string, handler: IRequestHandler): void;
    route(method: string, path: string, serverRequest: Http.IncomingMessage, serverResponse: Http.ServerResponse): void;
    configure(configuration: RequestRouterConfiguration): void;
    getConfiguration(): RequestRouterConfiguration;
}

export default IRequestRouter;