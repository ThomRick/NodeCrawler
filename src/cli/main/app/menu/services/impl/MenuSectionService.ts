/// <reference path="../../../../../../../typings/angularjs/angular.d.ts" />
import IMenuSectionService from "../IMenuSectionService";
import MenuSection from "../../models/MenuSection";
import MenuSectionMapper from "../mappers/MenuSectionMapper";

import IFBUserService from "../../../facebook/services/IFBUserService";
import FBGroupResponse from "../../../facebook/models/group/FBGroupResponse";

/**
 * MenuSectionService
 */
class MenuSectionService implements IMenuSectionService {
    
    static $inject = [
        "fbUserService"
    ];

    private fbUserService: IFBUserService;
    private menuSectionMapper: MenuSectionMapper = new MenuSectionMapper();

    constructor(fbUserService: IFBUserService) {
        this.fbUserService = fbUserService;
    }

    public getSections(): ng.IPromise<Array<MenuSection>> {
        let self = this;
        return this.fbUserService.getConnectedUserGroups()
        .then((fbGroupResponse: FBGroupResponse) => {
            let sections: Array<MenuSection> = [];
            let groupSection: MenuSection = self.menuSectionMapper.mappFrom(fbGroupResponse.data);
            sections.push(groupSection);
            return sections;
        });
    }
}

export default MenuSectionService;