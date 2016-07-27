/**
 * FBUrlBuilder
 */
class FBUrlBuilder {

    /**
     * Constructor
     */
    constructor() {}
    
    /**
     * build
     */
    public build(apiGraphPath: string, securityToken: string): string {
        let baseUrl: string = this.getFBBaseUrl();
        let queryString: string = this.buildQueryString(securityToken);
        return this.assembleUrl(baseUrl, apiGraphPath, queryString);
    }

    /**
     * assembleUrl
     */
    private assembleUrl(baseUrl: string, apiGraphPath: string, queryString: string): string {
        return baseUrl + apiGraphPath + '?' + queryString;
    }

    /**
     * getFBBaseUrl
     */
    private getFBBaseUrl(): string {
        return "https://graph.facebook.com/v2.0";
    }

    /**
     * buildQueryString
     */
    private buildQueryString(securityToken: string): string {
        let queryString: string = "";
        queryString += "format=json";
        queryString += "&";
        queryString += "method=get";
        queryString += "&";
        queryString += "supress_http_code=1";
        queryString += "&";
        queryString += "access_token=" + securityToken;
        return queryString;
    }

}

export default FBUrlBuilder;