/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBGroupService from "../IFBGroupService";
import FBFeedResponse from "../../models/feed/FBFeedResponse";

import FBUrlBuilder from "../../builders/FBUrlBuilder";

/**
 * FBGroupService
 */
class FBGroupService implements IFBGroupService {
    
    /**
     * Angular dependency injections
     */
    static $inject = [
        "$http"
    ];

    /**
     * Angular injected services
     */
    private httpService: ng.IHttpService;
    
    private fbUrlBuilder: FBUrlBuilder = new FBUrlBuilder();

    /**
     * Constructor
     */
    constructor($http: ng.IHttpService) {
        this.httpService = $http;
    }

    /**
     * getGroupFeeds
     */
    public getGroupFeeds(groupId: string, securityToken: string): ng.IPromise<FBFeedResponse> {
        let url: string = this.fbUrlBuilder.build("/" + groupId + "/feed", securityToken);
        return this.httpService.get<FBFeedResponse>(url)
        .then<FBFeedResponse>((promiseValue: ng.IHttpPromiseCallbackArg<FBFeedResponse>) => {
            return promiseValue.data;
        });
    }
}

export default FBGroupService;