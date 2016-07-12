import MenuSectionItem from "../../models/MenuSectionItem";
import MenuSectionItemBuilder from "../../builders/MenuSectionItemBuilder";

import FBGroup from "../../../facebook/models/group/FBGroup";

/**
 * MenuSectionItemMapper
 */
class MenuSectionItemMapper {
    
    constructor() {}

    /**
     * mappFrom
     */
    public mappFrom(fbGroup: FBGroup): MenuSectionItem {
        let menuSectionItemBuilder: MenuSectionItemBuilder = new MenuSectionItemBuilder();
        menuSectionItemBuilder.addId(fbGroup.id);
        menuSectionItemBuilder.addName(fbGroup.name);
        return menuSectionItemBuilder.build();
    }

}

export default MenuSectionItemMapper;