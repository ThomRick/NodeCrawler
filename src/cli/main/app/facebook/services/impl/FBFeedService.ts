/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBFeedService from "../IFBFeedService";

import FBCommentResponse from "../../models/comment/FBCommentResponse";

import FBAuthorResponse from "../../models/author/FBAuthorResponse";

/**
 * FBFeedService
 */
class FBFeedService implements IFBFeedService {

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
     * getFeedAuthor
     */
    public getFeedAuthor(feedId: string): ng.IPromise<FBAuthorResponse> {
        let deferred: ng.IDeferred<FBAuthorResponse> = this.qService.defer();
        FB.api("/" + feedId + "/fields=from", "GET", (fbAuthorResponse: FBAuthorResponse) => {
            if (!fbAuthorResponse || fbAuthorResponse.error) {
                deferred.reject("Error occured");
            } else {
                deferred.resolve(fbAuthorResponse);
            }
        });
        return deferred.promise;
    }

    /**
     * getFeedComments
     */
    public getFeedComments(feedId: string): ng.IPromise<FBCommentResponse> {
        let deferred: ng.IDeferred<FBCommentResponse> = this.qService.defer();
        FB.api("/" + feedId + "/comments", "GET", (fbCommentResponse: FBCommentResponse) => {
            if (!fbCommentResponse || fbCommentResponse.error) {
                deferred.reject("Error occured");
            } else {
                deferred.resolve(fbCommentResponse);
            }
        });
        return deferred.promise;
    }
}

export default FBFeedService;