/**
 * PropertyFile
 */
export default class PropertyFile {
    
    /**
     * Constructor
     * 
     * @params name :string
     * @params content : string
     */
    constructor(private name : string, private content : string) {
        this.name = name;
        this.content = content;
    }

    /**
     * getName
     * 
     * @return name of PropertyFile
     */
    public getName() : string {
        return this.name;
    }

    /**
     * getContent
     * 
     * @return content of PropertyFile
     */
    public getContent() : string {
        return this.content;
    }

}