import MenuSection from "../models/MenuSection";
import MenuSectionItem from "../models/MenuSectionItem";

/**
 * MenuSectionBuilder
 */
class MenuSectionBuilder {
    
    private title: string = "";
    private items: Array<MenuSectionItem> = [];

    constructor() {}

    /**
     * addTitle
     */
    public addTitle(title: string): MenuSectionBuilder {
        this.title = title;
        return this;
    }

    /**
     * addItem
     */
    public addItem(item: MenuSectionItem): MenuSectionBuilder {
        this.items.push(item);
        return this;
    }

    /**
     * build
     */
    public build(): MenuSection {
        let menuSection: MenuSection = {
            title: this.title,
            items: this.items
        };
        return menuSection;
    }

}

export default MenuSectionBuilder;