/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBGroupService from "../IFBGroupService";
import FBFeedResponse from "../../models/feed/FBFeedResponse";

/**
 * FBGroupService
 */
class FBGroupService implements IFBGroupService {
    
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
    constructor(qService: ng.IQService) {
        this.qService = qService;
    }

    /**
     * getGroupFeeds
     */
    public getGroupFeeds(groupId: string): ng.IPromise<FBFeedResponse> {
        let deferred: ng.IDeferred<FBFeedResponse> = this.qService.defer();
        FB.api("/" + groupId + "/feed", "GET", {
            fields: "from,message,story"
        }, (fbFeedResponse: FBFeedResponse) => {
            if (!fbFeedResponse || fbFeedResponse.error) {
                deferred.reject("Error occured");
            } else {
                deferred.resolve(fbFeedResponse);
            }
        });
        return deferred.promise;
    }
}

export default FBGroupService;