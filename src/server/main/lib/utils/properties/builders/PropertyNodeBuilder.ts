import Property from "../model/Property";
import PropertyNode from "../model/PropertyNode";

/**
 * PropertyNodeBuilder
 */
export default class PropertyNodeBuilder {
    
    private name : string = "";
    private properties : Array<Property> = [];
    
    /**
     * Constructor
     */
    constructor() {}

    /**
     * addName
     * 
     * @params name : string
     * @return instance of PropertyNodeBuilder
     */
    public addName(name : string) : PropertyNodeBuilder {
        this.name = name;
        return this;
    }

    /**
     * addProperty
     * 
     * @params property : Property
     * @return instance of PropertyNodeBuilder
     */
    public addProperty(property : Property) : PropertyNodeBuilder {
        this.properties.push(property);
        return this;    
    }

    /**
     * build
     * 
     * @return a new PropertyNode object
     */
    public build() : PropertyNode {
        return new PropertyNode(this.name, this.properties);
    }

}