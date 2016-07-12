/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import IFBApplicationService from "../IFBApplicationService";

/**
 * FBApplicationService
 */
class FBApplicationService implements IFBApplicationService {

    constructor() {}

    /**
     * init
     * 
     * TODO: get configuration from server
     */
    public init(): void {
        FB.init({
            appId      : "1719791898287877",
            cookie     : true,
            xfbml      : true,
            version    : "v2.6"
        });
    }
}

export default FBApplicationService;