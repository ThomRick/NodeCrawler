/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import FBCommentResponse from "../models/comment/FBCommentResponse";
import FBAuthorResponse from "../models/author/FBAuthorResponse";
/**
 * IFBFeedService
 */
interface IFBFeedService {
    getFeedAuthor(feedId: string, securityToken: string): ng.IPromise<FBAuthorResponse>;
    getFeedComments(feedId: string, securityToken: string): ng.IPromise<FBCommentResponse>;
}

export default IFBFeedService;