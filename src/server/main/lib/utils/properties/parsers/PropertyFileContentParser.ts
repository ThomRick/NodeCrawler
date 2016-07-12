import PropertyFile from "../model/PropertyFile";
import Property from "../model/Property";

/**
 * PropertyFileParser
 */
export default class PropertyFileParser {
    
    /**
     * Constructor
     */
    constructor() {}

    /**
     * parse
     * 
     * @params propertyFile
     * @return 
     */
    public parse(propertyFile : PropertyFile) : Array<Property> {
        let properties : Array<Property> = [];
        let propertyFileContentLines = this.extractPropertyFileContentLines(propertyFile);
        this.addProperties(properties, propertyFileContentLines);
        return properties;
    }

    /**
     * extractPropertyFileContentLines
     * 
     * @params propertyFile
     * @return liste of property file content lines
     */
    private extractPropertyFileContentLines(propertyFile : PropertyFile) : Array<string> {
        let lines = propertyFile.getContent()
                                .split("\n");
        return lines.filter(this.lineFilter);
    }

    /**
     * lineFilter
     * 
     * @params line : string
     * @return true if the first line element is not a '#'
     */
    private lineFilter(line : string) : boolean {
        return line[0] !== "#";
    }

    private addProperties(properties : Array<Property>, propertyFileContentLines : Array<string>) : void {
        for (var i = 0; i < propertyFileContentLines.length - 1; i++) {
            var propertyFileContentLine = propertyFileContentLines[i];
            var property = this.parseProperty(propertyFileContentLine);
            properties.push(property);
        }
    }
    
    private parseProperty(propertyFileContentLine : string) : Property {
        var propertyFileContentLineElements = propertyFileContentLine.split("=");
        var key = propertyFileContentLineElements[0];
        var value = propertyFileContentLineElements[1];
        return new Property(key, value);
    }

}

    
    