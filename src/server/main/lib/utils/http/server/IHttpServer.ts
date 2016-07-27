import HttpServerConfiguration from "./configuration/HttpServerConfiguration";
import IRequestRouter from "../router/IRequestRouter";

/**
 * IHttpServer
 */
interface IHttpServer {
    start(): boolean;
    configure(configuration: HttpServerConfiguration): void;
    getConfiguration(): HttpServerConfiguration;
    getRouter(): IRequestRouter;
}

export default IHttpServer;