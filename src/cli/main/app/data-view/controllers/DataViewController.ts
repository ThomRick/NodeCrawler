/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import DisplayDataNotificationData from "../../notification/models/DisplayDataNotificationData";
import TokenDataEvent from "../../notification/models/TokenDataEvent";

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

    /** Selected group */
    private group: Group = {
        id: "",
        name: ""
    };
    /** displayed group posts */
    private posts: Array<Post> = [];
    /** selected post */
    private selectedPosts: Array<Post> = [];
    private securityToken: string = "";

    /**
     * Constructor
     */
    constructor($rootScope: ng.IRootScopeService, postService: IPostService) {
        this.rootScopeService = $rootScope;
        this.postService = postService;
        this.defineEvents();
    }

    /**
     * showComments
     */
    public showComments(post: Post): void {
        let postId: string = post.id;
        this.postService.getComments(postId, this.securityToken)
        .then((comments: Array<Comment>) => {
            post.comments = comments;
        });
    }

    /**
     * selectPost
     */
    public selectPost(post: Post): void {
        let selectedPostIndex: number = this.selectedPosts.indexOf(post);
        if (selectedPostIndex !== -1) {
            this.selectedPosts.splice(selectedPostIndex, 1);
        } else {
            this.selectedPosts.push(post);
        }
    }

    /**
     * extractPosts
     */
    public extractPosts() {
        let data: string = "------------------------------\r\n";
        data += "Sujet: Les poissons dans l'eau\r\n";
        data += "Date: 2016-07-15\r\n";
        data += "Auteur: ThomRick\r\n";
        data += "------------------------------\r\n";
        var url = URL.createObjectURL(new Blob([
            data
        ]));
        var a = document.createElement('a');
        a.setAttribute("href", url);
        a.setAttribute("download","extract.txt");
        a.setAttribute("target", "_blank");
        a.click();
    }

    /**
     * defineEvents
     */
    private defineEvents(): void {
        let self = this;
        self.rootScopeService.$on("DEPLOY_SECURITY_TOKEN", (event: ng.IAngularEvent, data: TokenDataEvent) => {
            self.securityToken = data.securityToken;
        });
        self.rootScopeService.$on("DISPLAY_DATA", (event: ng.IAngularEvent, data: DisplayDataNotificationData) => {
            self.group = {
                id: data.id,
                name: data.name
            };
            self.postService.getPosts(self.group.id, self.securityToken).then((posts: Array<Post>) => {
                self.posts = posts;
            });
        });
    }
}

export default DataViewController;