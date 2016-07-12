/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import FBCommentResponse from "../models/comment/FBCommentResponse";
import FBAuthorResponse from "../models/author/FBAuthorResponse";
/**
 * IFBFeedService
 */
interface IFBFeedService {
    getFeedAuthor(feedId: string): ng.IPromise<FBAuthorResponse>;
    getFeedComments(feedId: string): ng.IPromise<FBCommentResponse>;
}

export default IFBFeedService;