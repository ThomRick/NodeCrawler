/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IPostService from "../IPostService";

import Post from "../../models/Post";
import Comment from "../../models/Comment";

import PostBuilder from "../../builders/PostBuilder";

import FBFeedMessageFilter from "../../filters/FBFeedMessageFilter";

import PostMapper from "../../mappers/PostMapper";
import CommentMapper from "../../mappers/CommentMapper";

import IFBGroupService from "../../../facebook/services/IFBGroupService";
import IFBFeedService from "../../../facebook/services/IFBFeedService";
import FBFeedResponse from "../../../facebook/models/feed/FBFeedResponse";
import FBFeedObject from "../../../facebook/models/feed/FBFeedObject";
import FBFeedMessage from "../../../facebook/models/feed/FBFeedMessage";
import FBCommentResponse from "../../../facebook/models/comment/FBCommentResponse";
import FBComment from "../../../facebook/models/comment/FBComment";

/**
 * PostService
 */
class PostService implements IPostService {
    
    /**
     * Angular dependency injections
     */
    static $inject = [
        "fbGroupService",
        "fbFeedService"
    ];

    /**
     * Angular injected services
     */
    private fbGroupService: IFBGroupService;
    private fbFeedService: IFBFeedService;

    /**
     * fieds
     */
    private postMapper: PostMapper = new PostMapper();
    private commentMapper: CommentMapper = new CommentMapper();

    /**
     * Constructor
     */
    constructor(
        fbGroupService: IFBGroupService,
        fbFeedService: IFBFeedService
    ) {
        this.fbGroupService = fbGroupService;
        this.fbFeedService = fbFeedService;
    }

    /**
     * getPosts
     */
    public getPosts(id: string, securityToken: string): ng.IPromise<Array<Post>> {
        let self = this;
        let fbFeedMessageFilter: FBFeedMessageFilter = new FBFeedMessageFilter();
        let postBuilder: PostBuilder = new PostBuilder();
        return this.fbGroupService.getGroupFeeds(id, securityToken)
        .then((fbFeedResponse: FBFeedResponse) => {
            let fbFeedObjects: Array<FBFeedObject> = fbFeedResponse.data;
            let fbFeedMessages: Array<FBFeedMessage> = fbFeedMessageFilter.doFilter(fbFeedObjects);
            return self.mappPostsFrom(fbFeedMessages);  
        });
    }

    /**
     * extract
     */
    public extract(posts: Array<Post>): void {
        
    }

    /**
     * getComments
     */
    public getComments(postId: string, securityToken: string): ng.IPromise<Array<Comment>> {
        let self = this;
        return this.fbFeedService.getFeedComments(postId, securityToken)
        .then((fbCommentResponse: FBCommentResponse) => {
            let fbComments: Array<FBComment> = fbCommentResponse.data;
            return self.mappCommentsFrom(fbComments);  
        });
    }

    private mappPostsFrom(fbFeedMessages: Array<FBFeedMessage>): Array<Post> {
        let posts: Array<Post> = [];
        for (var i = 0; i < fbFeedMessages.length; i++) {
            let fbFeedMessage: FBFeedMessage = fbFeedMessages[i];
            let post: Post = this.postMapper.mappFrom(fbFeedMessage);
            posts.push(post);
        }
        return posts;
    }

    private mappCommentsFrom(fbComments: Array<FBComment>): Array<Comment> {
        let comments: Array<Comment> = [];
        for (var i = 0; i < fbComments.length; i++) {
            let fbComment: FBComment = fbComments[i];
            let comment: Comment = this.commentMapper.mappFrom(fbComment);
            comments.push(comment);
        }
        return comments;
    }
}

export default PostService;