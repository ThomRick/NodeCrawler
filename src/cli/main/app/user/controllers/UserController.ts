/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import IUserService from "../services/IUserService";
import User from "../models/User";

/**
 * UserController
 */
class UserController {

    static $inject = [
        "$rootScope",
        "userService"
    ];

    private rootScopeService: ng.IRootScopeService;
    private userService: IUserService;

    private user: User = {
        id: "",
        name: "",
        connected: false
    };
    
    constructor($rootScope: ng.IRootScopeService, userService: IUserService) {
        this.rootScopeService = $rootScope;
        this.userService = userService;
        let self = this;
        userService.getConnectedUser()
        .then((user: User) => {
            self.user = user;
            self.rootScopeService.$emit("LOAD_MENU_SECTIONS");
        });
    }
}

export default UserController;