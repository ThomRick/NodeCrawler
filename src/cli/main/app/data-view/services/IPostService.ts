/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import Post from "../models/Post";
import Comment from "../models/Comment";

/**
 * IPostService
 */
interface IPostService {
    getPosts(id: string): ng.IPromise<Array<Post>>;
    getComments(postId: string): ng.IPromise<Array<Comment>>;
}

export default IPostService;