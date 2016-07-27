/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import FBFeedResponse from "../models/feed/FBFeedResponse";

interface IFBGroupService {
    getGroupFeeds(groupId: string, securityToken: string): ng.IPromise<FBFeedResponse>;
}

export default IFBGroupService;