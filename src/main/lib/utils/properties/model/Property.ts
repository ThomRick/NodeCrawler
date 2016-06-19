/**
 * Property
 */
export default class Property {

    /**
     * Constructor
     * 
     * @params key : string
     * @params value : string
     */
    constructor(private key : string, private value : string) {
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
