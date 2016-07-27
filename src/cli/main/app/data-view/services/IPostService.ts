/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import Post from "../models/Post";
import Comment from "../models/Comment";

/**
 * IPostService
 */
interface IPostService {
    getPosts(id: string, securityToken: string): ng.IPromise<Array<Post>>;
    getComments(postId: string, securityToken: string): ng.IPromise<Array<Comment>>;
    extract(posts: Array<Post>): void;
}

export default IPostService;