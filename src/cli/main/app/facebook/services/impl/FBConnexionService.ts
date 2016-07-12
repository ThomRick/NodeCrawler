/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBConnexionService from "../IFBConnexionService";
import FBLoginStatusResponse from "../../models/connexion/FBLoginStatusResponse";
import User from "../../../user/models/User";

/**
 * FBConnexionService
 */
class FBConnexionService implements IFBConnexionService {

    static $inject = [
        "$q"
    ];

    private qService: ng.IQService;

    constructor($q: ng.IQService) {
        this.qService = $q;
    }

    public getLoginStatus(): ng.IPromise<FBLoginStatusResponse> {
        let deferred: ng.IDeferred<FBLoginStatusResponse> = this.qService.defer();
        FB.getLoginStatus((fbLoginStatus: FBLoginStatusResponse): any => {
            if(!fbLoginStatus || fbLoginStatus.error) {
                deferred.reject("Error occured");
            } else {
                deferred.resolve(fbLoginStatus);
            }
        });
        return deferred.promise;
    }
    
}

export default FBConnexionService;