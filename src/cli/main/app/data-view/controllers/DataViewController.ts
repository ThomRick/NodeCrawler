/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import DisplayDataNotificationData from "../../notification/models/DisplayDataNotificationData";

import IPostService from "../services/IPostService";
import Post from "../models/Post";
import Comment from "../models/Comment";
import Group from "../models/Group";

/**
 * DataViewController
 */
class DataViewController {

    /**
     * Angular dependency injections
     */
    static $inject = [ 
        "$rootScope",
        "postService"
    ];

    /**
     * Angular injected services
     */
    private rootScopeService: ng.IRootScopeService;
    private postService: IPostService;

    /**
     * Controller's fields
     */
    private group: Group = {
        id: "",
        name: ""
    };
    private posts: Array<Post> = [];

    /**
     * Constructor
     */
    constructor(
        $rootScope: ng.IRootScopeService,
        postService: IPostService
    ) {
        this.rootScopeService = $rootScope;
        this.postService = postService;
        this.defineEvents();
    }

    /**
     * showComments
     */
    public showComments(post: Post) {
        let postId: string = post.id;
        this.postService.getComments(postId)
        .then((comments: Array<Comment>) => {
            post.comments = comments;
        });
    }

    /**
     * defineEvents
     */
    private defineEvents(): void {
        let self = this;
        self.rootScopeService.$on("DISPLAY_DATA", (event: ng.IAngularEvent, data: DisplayDataNotificationData) => {
            self.group = {
                id: data.id,
                name: data.name
            };
            self.postService.getPosts(self.group.id).then((posts: Array<Post>) => {
                self.posts = posts;
            });
        });
    }
}

export default DataViewController;