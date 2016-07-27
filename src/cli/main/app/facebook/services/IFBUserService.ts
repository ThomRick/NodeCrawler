/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../typings/fbsdk/fbsdk.d.ts" />
import FBDataResponse from "../models/FBDataResponse";
import FBGroupResponse from "../models/group/FBGroupResponse";

/**
 * IFBUserService
 */
interface IFBUserService {
    getConnectedUser(): ng.IPromise<FBDataResponse>;
    getConnectedUserGroups(securityToken: string): ng.IPromise<FBGroupResponse>;
    getUser(userId: string, securityToken: string): ng.IPromise<FBDataResponse>;
}

export default IFBUserService;