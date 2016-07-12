import PropertyFile from "./model/PropertyFile";
import PropertyTree from "./model/PropertyTree";
import PropertyNode from "./model/PropertyNode";
import Property from "./model/Property";
import PropertyFileScanner from "./scanners/PropertyFileScanner";
import PropertyFileContentMapper from "./mappers/PropertyFileContentMapper";

/**
 * PropertyManager
 */
export default class PropertyManager {

    /** propertyTree */
    private propertyTree : PropertyTree;

    /** Constructor */
    constructor(mainDirectory : string) {
        let propertyFiles = this.scanPropertyFiles(mainDirectory);
        if (propertyFiles.length > 0) {
            this.buildPropertyTree(propertyFiles);
        }
    }

    /**
     * getProperty
     * 
     * @param propertyKey
     * @return property value
     */
    public getProperty(propertyKey : string) : string {
        let propertyValue : string = null;
        let propertyNodes : Array<PropertyNode> = this.propertyTree.getPropertyNodes();
        for (let i = 0; i < propertyNodes.length; i++) {
            let propertyNode : PropertyNode = propertyNodes[i];
            let property : Property = this.seekProperty(propertyNode, propertyKey);
            if (property !== null) {
                propertyValue = property.getValue();
                break;
            }
        }
        return propertyValue;
    }

    /**
     * getPropertyAsNumber
     */
    public getPropertyAsNumber(propertyKey : string) : number {
        let property = this.getProperty(propertyKey);
        return parseInt(property);
    }

    private seekProperty(propertyNode : PropertyNode, propertyKey : string) : Property {
        let seekProperty : Property = null;
        let properties : Array<Property> = propertyNode.getProperties();
        for (let i = 0; i < properties.length; i++) {
            let property = properties[i];
            if (this.isSeekProperty(property, propertyKey)) {
                seekProperty = property;
                break;
            }
        }
        return seekProperty;
    }

    private isSeekProperty(property : Property, propertyKey : string) : boolean {
        return property.getKey() === propertyKey;
    }

    /**
     * buildPropertyTree
     * 
     * @param propertyFiles list of scanned property files
     */
    private buildPropertyTree(propertyFiles : Array<PropertyFile>) : void {
        let propertyFileContentMapper : PropertyFileContentMapper = new PropertyFileContentMapper();
        this.propertyTree = propertyFileContentMapper.mappFrom(propertyFiles);
    }

    /**
     * scanPropertyFiles
     * 
     * @param directory the directory where start scanning files
     * @return list of property files scanned
     */
    private scanPropertyFiles(directory) : Array<PropertyFile> {
        let propertyFileScanner : PropertyFileScanner = new PropertyFileScanner();
        return propertyFileScanner.scan(directory);
    }
    
}
