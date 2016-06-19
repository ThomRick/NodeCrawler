import PropertyNode from "./PropertyNode";

/**
 * PropertyTree
 */
export default class PropertyTree {
    
    /**
     * Constructor
     * 
     * @params propertyNodes : Array<PropertyNode>
     */
    constructor(private propertyNodes : Array<PropertyNode>) {
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