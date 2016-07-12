import PropertyNode from "./PropertyNode";

/**
 * PropertyTree
 */
export default class PropertyTree {

    /** propertyNodes */
    private propertyNodes : Array<PropertyNode>;
    
    /**
     * Constructor
     * 
     * @params propertyNodes : Array<PropertyNode>
     */
    constructor(propertyNodes : Array<PropertyNode>) {
        this.propertyNodes = propertyNodes;     
    }

    /**
     * getPropertyNodes
     * 
     * @return propertyNodes of PropertyTree
     */
    public getPropertyNodes() : Array<PropertyNode>{
        return this.propertyNodes;
    }

}