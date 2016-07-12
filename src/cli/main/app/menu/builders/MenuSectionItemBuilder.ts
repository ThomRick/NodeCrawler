import MenuSectionItem from "../models/MenuSectionItem";

/**
 * MenuSectionItemBuilder
 */
class MenuSectionItemBuilder {
    
    private id: string = "";
    private name: string = "";

    constructor() {}

    /**
     * addId
     */
    public addId(id: string): MenuSectionItemBuilder {
        this.id = id;
        return this;
    }

    /**
     * addName
     */
    public addName(name: string): MenuSectionItemBuilder {
        this.name = name;
        return this;
    }

    /**
     * build
     */
    public build(): MenuSectionItem {
        let menuSectionItem: MenuSectionItem = {
            id: this.id,
            name: this.name
        };
        return menuSectionItem;
    }

}

export default MenuSectionItemBuilder;