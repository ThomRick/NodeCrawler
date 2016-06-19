import Property from "../model/Property";
import PropertyFile from "../model/PropertyFile";
import PropertyTree from "../model/PropertyTree";
import PropertyNode from "../model/PropertyNode";
import PropertyNodeBuilder from "../builders/PropertyNodeBuilder";
import PropertyFileContentParser from "../parsers/PropertyFileContentParser";

/**
 * PropertyFileMapper
 */
export default class PropertyFileMapper {

    private propertyFileContentParser : PropertyFileContentParser;
    
    /**
     * Constructor
     */
    constructor() {
        this.propertyFileContentParser = new PropertyFileContentParser();
    }

    /**
     * mappFrom
     * @params propertyFile : Array<PropertyFile>
     * @return PropertyTree
     */
    public mappFrom(propertyFiles : Array<PropertyFile>) : PropertyTree {
        let propertyNodes : Array<PropertyNode> = [];
        for (let i = 0; i < propertyFiles.length; i++) {
            let propertyFile : PropertyFile = propertyFiles[i];
            let propertyNode : PropertyNode = this.mappPropertyNode(propertyFile);
            propertyNodes.push(propertyNode);
        }
        return new PropertyTree(propertyNodes);
    }

    /**
     * mappPropertyNode
     * 
     * @params propertyFile : PropertyFile
     * @return propertyNode : PropertyNode
     */
    private mappPropertyNode(propertyFile : PropertyFile) : PropertyNode {
        let propertyNodeBuilder : PropertyNodeBuilder = new PropertyNodeBuilder();
        this.addName(propertyNodeBuilder, propertyFile);
        this.addProperties(propertyNodeBuilder, propertyFile);
        return propertyNodeBuilder.build();
    }

    /**
     * addName
     * 
     * @params propertyNodeBuilder : PropertyNodeBuilder
     * @params propertyFile : PropertyFile
     */
    private addName(propertyNodeBuilder : PropertyNodeBuilder, propertyFile : PropertyFile) : void {
        let propertyFileName : string = propertyFile.getName();
        propertyNodeBuilder.addName(propertyFileName);
    }
    
    /**
     * addProperties
     * 
     * @params propertyNodeBuilder : PropertyNodeBuilder
     * @params propertyFile : PropertyFile
     */
    private addProperties(propertyNodeBuilder : PropertyNodeBuilder, propertyFile : PropertyFile) : void {
        let properties : Array<Property> = this.propertyFileContentParser.parse(propertyFile);
        for (let i = 0; i < properties.length; i++) {
            let property = properties[i];
            propertyNodeBuilder.addProperty(property);
        }
    }

}
