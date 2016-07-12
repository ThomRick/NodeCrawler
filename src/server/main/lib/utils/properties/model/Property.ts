/**
 * Property
 */
export default class Property {

    /** key */
    private key : string;
    /** value */
    private value : string;
    
    /**
     * Constructor
     * 
     * @params key : string
     * @params value : string
     */
    constructor(key : string, value : string) {
        this.key = key;
        this.value = value;
    }

    /**
     * getKey
     * 
     * @return key of Property
     */
    public getKey() : string {
        return this.key;
    }

    /**
     * getValue
     * 
     * @return value of Property
     */
    public getValue() : string {
        return this.value;
    }

}
