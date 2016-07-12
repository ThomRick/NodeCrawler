/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBUserService from "../IFBUserService";
import FBDataResponse from "../../models/FBDataResponse";
import FBGroupResponse from "../../models/group/FBGroupResponse";

/**
 * FBUserService
 */
class FBUserService implements IFBUserService {

    /**
     * Angular dependency injections
     */
    static $inject = [
        "$q"
    ];

    /**
     * Angular injected services
     */
    private qService: ng.IQService;

    /**
     * Constructor
     */
    constructor($q: ng.IQService) {
        this.qService = $q;
    }

    /**
     * getConnectedUser
     */
    public getConnectedUser(): ng.IPromise<FBDataResponse> {
        let deferred: ng.IDeferred<FBDataResponse> = this.qService.defer();
        FB.api("/me", "GET", (fbDataResponse: FBDataResponse) => {
            if (!fbDataResponse || fbDataResponse.error) {
                deferred.reject("Error occured");
            } else {
                deferred.resolve(fbDataResponse);
            }
        });
        return deferred.promise;
    }

    /**
     * getConnectedUserGroups
     */
    public getConnectedUserGroups(): ng.IPromise<FBGroupResponse> {
        let deferred: ng.IDeferred<FBGroupResponse> = this.qService.defer();
        FB.api("/me/groups", "GET", (fbGroupResponse: FBGroupResponse) => {
            if (!fbGroupResponse || fbGroupResponse.error) {
                deferred.reject("Error occured");
            } else {
                deferred.resolve(fbGroupResponse);
            }
        });
        return deferred.promise;
    }

    /**
     * getUser
     */
    public getUser(id: string): ng.IPromise<FBDataResponse> {
        return null;
    }

}

export default FBUserService;