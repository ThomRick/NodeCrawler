/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
import IFBApplicationService from "../../../facebook/services/IFBApplicationService";
import IFBConnexionService from "../../../facebook/services/IFBConnexionService";
import IFBUserService from "../../../facebook/services/IFBUserService";
import FBLoginStatusResponse from "../../../facebook/models/connexion/FBLoginStatusResponse";
import FBDataResponse from "../../../facebook/models/FBDataResponse";

import IUserService from "../IUserService";
import User from "../../models/User";

/**
 * UserService
 */
class UserService implements IUserService {

    static $inject = [
        "fbApplicationService",
        "fbConnexionService",
        "fbUserService"
    ];

    private fbApplicationService: IFBApplicationService;
    private fbConnexionService: IFBConnexionService;
    private fbUserService: IFBUserService;
    
    constructor(
        fbApplicationService: IFBApplicationService,
        fbConnexionService: IFBConnexionService,
        fbUserService: IFBUserService
    ) {
        this.fbApplicationService = fbApplicationService;
        this.fbConnexionService = fbConnexionService;
        this.fbUserService = fbUserService;
    }

    public getConnectedUser(): ng.IPromise<User> {
        this.fbApplicationService.init();
        let self = this;
        return this.fbConnexionService.getLoginStatus()
        .then((fbLoginStatusResponse: FBLoginStatusResponse) => {
            return self.fbUserService.getConnectedUser()
            .then((fbDataResponse: FBDataResponse) => {
                let user: User = {
                    id: fbDataResponse.id,
                    name: fbDataResponse.name,
                    connected: true,
                    securityToken: ""
                };
                return user;
            });
        });
    }

    public getUser(id: string): ng.IPromise<User> {
        return null;
    }
    
}

export default UserService;