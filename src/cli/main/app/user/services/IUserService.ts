/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import User from "../models/User";

/**
 * IUserService
 */
interface IUserService {
    getConnectedUser(): ng.IPromise<User>;
    getUser(id: string): ng.IPromise<User>;
}

export default IUserService;