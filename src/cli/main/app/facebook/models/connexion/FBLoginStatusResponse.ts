/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />

/**
 * FBLoginStatusResponse
 */
interface FBLoginStatusResponse extends FBResponseObject {
    authResponse: FBAuthResponse;
    status: string;
}

/**
 * FBAuthResponse
 */
interface FBAuthResponse {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userId: string;
}

export default FBLoginStatusResponse;