/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBUserService from "../IFBUserService";
import FBDataResponse from "../../models/FBDataResponse";
import FBGroupResponse from "../../models/group/FBGroupResponse";
import FBUrlBuilder from "../../builders/FBUrlBuilder";
/**
 * FBUserService
 */
class FBUserService implements IFBUserService {

    /**
     * Angular dependency injections
     */
    static $inject = [
        "$q",
        "$http"
    ];

    /**
     * Angular injected services
     */
    private qService: ng.IQService;
    private httpService: ng.IHttpService;

    /**
     * 
     */
    private fbUrlBuilder: FBUrlBuilder = new FBUrlBuilder();
    /**
     * Constructor
     */
    constructor($q: ng.IQService, $http: ng.IHttpService) {
        this.qService = $q;
        this.httpService = $http;
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
    public getConnectedUserGroups(securityToken: string): ng.IPromise<FBGroupResponse> {
        let url: string = this.fbUrlBuilder.build("/me/groups", securityToken);
        return this.httpService.get<FBGroupResponse>(url)
        .then<FBGroupResponse>((promiseValue: ng.IHttpPromiseCallbackArg<FBGroupResponse>) => {
            return promiseValue.data;
        });
    }

    /**
     * getUser
     */
    public getUser(securityToken: string, id: string): ng.IPromise<FBDataResponse> {
        return null;
    }

}

export default FBUserService;