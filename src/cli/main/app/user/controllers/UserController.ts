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

    /**
     * Controller scope fields
     */
    private user: User = {
        id: "",
        name: "",
        connected: false,
        securityToken: ""
    };
    
    /**
     * Constructor
     */
    constructor($rootScope: ng.IRootScopeService, userService: IUserService) {
        this.rootScopeService = $rootScope;
        this.userService = userService;
        let self = this;
        userService.getConnectedUser()
        .then((user: User) => {
            self.user = user;
        });
    }

    /**
     * saveToken
     */
    public saveToken() {
        let securityToken: string = this.user.securityToken;
        this.rootScopeService.$emit("DEPLOY_SECURITY_TOKEN", {
            securityToken: securityToken
        });
    }
}

export default UserController;