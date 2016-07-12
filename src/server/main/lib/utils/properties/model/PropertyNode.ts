import Property from "./Property";

/**
 * PropertyNode
 */
export default class PropertyNode {

    /** name */
    private name : string;
    /** properties */
    private properties : Array<Property>
    
    /**
     * Constructor
     * 
     * @params name : string
     * @params properties : Array<Property>
     */
    constructor(name : string, properties : Array<Property>) {
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