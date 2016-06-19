import Property from "./Property";

/**
 * PropertyNode
 */
export default class PropertyNode {
    
    /**
     * Constructor
     * 
     * @params name : string
     * @params properties : Array<Property>
     */
    constructor(private name : string, private properties : Array<Property>) {
        this.name = name;
        this.properties = properties;
    }

    /**
     * getName
     * 
     * @return name of PropertyNode
     */
    public getName() : string {
        return this.name;
    }

    /**
     * getProperties
     * 
     * @return properties of PropertyNode
     */
    public getProperties() : Array<Property> {
        return this.properties;
    }

}