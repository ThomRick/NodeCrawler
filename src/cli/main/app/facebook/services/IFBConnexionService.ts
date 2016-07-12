/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import FBLoginStatusResponse from "../models/connexion/FBLoginStatusResponse";

/**
 * IFBConnexionService
 */
interface IFBConnexionService {
    getLoginStatus(): ng.IPromise<FBLoginStatusResponse>;
}

export default IFBConnexionService;