/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBFeedService from "../IFBFeedService";

import FBCommentResponse from "../../models/comment/FBCommentResponse";

import FBAuthorResponse from "../../models/author/FBAuthorResponse";

import FBUrlBuilder from "../../builders/FBUrlBuilder";

/**
 * FBFeedService
 */
class FBFeedService implements IFBFeedService {

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
     * getFeedAuthor
     */
    public getFeedAuthor(feedId: string, securityToken: string): ng.IPromise<FBAuthorResponse> {
        let url: string = this.fbUrlBuilder.build("/" + feedId + "/fieds=from", securityToken);
        return this.httpService.get<FBAuthorResponse>(url)
        .then<FBAuthorResponse>((promiseValue: ng.IHttpPromiseCallbackArg<FBAuthorResponse>) => {
            return promiseValue.data;
        });
    }

    /**
     * getFeedComments
     */
    public getFeedComments(feedId: string, securityToken: string): ng.IPromise<FBCommentResponse> {
        let url: string = this.fbUrlBuilder.build("/" + feedId + "/comments", securityToken);
        return this.httpService.get<FBCommentResponse>(url)
        .then<FBCommentResponse>((promiseValue: ng.IHttpPromiseCallbackArg<FBCommentResponse>) => {
            return promiseValue.data;
        });
    }
}

export default FBFeedService;