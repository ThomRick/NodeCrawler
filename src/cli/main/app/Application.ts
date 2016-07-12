/// <reference path="../../../../typings/angularjs/angular.d.ts" />
import FBApplicationService from "./facebook/services/impl/FBApplicationService";
import FBConnexionService from "./facebook/services/impl/FBConnexionService";
import FBUserService from "./facebook/services/impl/FBUserService";
import FBGroupService from "./facebook/services/impl/FBGroupService";
import FBFeedService from "./facebook/services/impl/FBFeedService";

import UserController from "./user/controllers/UserController";
import UserService from "./user/services/impl/UserService";

import MenuController from "./menu/controllers/MenuController";
import MenuSectionService from "./menu/services/impl/MenuSectionService";

import DataViewController from "./data-view/controllers/DataViewController";
import PostService from "./data-view/services/impl/PostService";

/**
 * Application angular module
 */
angular.module("application", [])
       .service("fbApplicationService", FBApplicationService)
       .service("fbConnexionService", FBConnexionService)
       .service("fbUserService", FBUserService)
       .service("fbGroupService", FBGroupService)
       .service("fbFeedService", FBFeedService)
       .service("userService", UserService)
       .service("menuSectionService", MenuSectionService)
       .service("postService", PostService)
       .component("user", {
           templateUrl: "templates/user.html",
           controller: UserController
       })
       .component("menu", {
            templateUrl: "templates/menu.html",
            controller: MenuController
       })
       .component("data", {
            templateUrl: "templates/data-view.html",
            controller: DataViewController  
       });
