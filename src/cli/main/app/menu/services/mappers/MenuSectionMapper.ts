import FBGroup from "../../../facebook/models/group/FBGroup";

import MenuSectionBuilder from "../../builders/MenuSectionBuilder";
import MenuSection from "../../models/MenuSection";
import MenuSectionItem from "../../models/MenuSectionItem";
import MenuSectionItemMapper from "./MenuSectionItemMapper";

/**
 * MenuSectionMapper
 */
class MenuSectionMapper {

    private menuSectionItemMapper: MenuSectionItemMapper = new MenuSectionItemMapper();
    
    constructor() {}

    /**
     * mappFrom
     */
    public mappFrom(fbGroups: Array<FBGroup>): MenuSection {
        let menuSectionBuilder: MenuSectionBuilder = new MenuSectionBuilder();
        this.addGroupSectionTitle(menuSectionBuilder);
        this.addGroupSectionItem(menuSectionBuilder, fbGroups);
        return menuSectionBuilder.build();
    }

    private addGroupSectionTitle(menuSectionBuilder: MenuSectionBuilder): void {
        menuSectionBuilder.addTitle("Groupes");
    }

    private addGroupSectionItem(menuSectionBuilder: MenuSectionBuilder, fbGroups: Array<FBGroup>): void {
        for (let i = 0; i < fbGroups.length; i++) {
            let fbGroup: FBGroup = fbGroups[i];
            let menuSectionItem: MenuSectionItem = this.menuSectionItemMapper.mappFrom(fbGroup);
            menuSectionBuilder.addItem(menuSectionItem);
        }
    }

}

export default MenuSectionMapper;