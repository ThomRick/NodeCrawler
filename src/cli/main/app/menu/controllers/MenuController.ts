/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import IMenuSectionService from "../services/IMenuSectionService";
import MenuSection from "../models/MenuSection";
import MenuSectionItem from "../models/MenuSectionItem";

import DisplayDataNotificationData from "../../notification/models/DisplayDataNotificationData";

/**
 * MenuController
 */
class MenuController {
    
    /**
     * Angular dependency injection
     */
    static $inject = [ 
        "$rootScope",
        "menuSectionService" 
    ];

    /**
     * Angular injected services
     */
    private rootScope: ng.IRootScopeService;
    private menuSectionService: IMenuSectionService;

    /**
     * Controller's fields
     */
    private sections: Array<MenuSection> = [];

    /**
     * Constructor
     */
    constructor(
        $rootScope: ng.IRootScopeService,
        menuSectionService: IMenuSectionService
    ) {
        this.rootScope = $rootScope;
        this.menuSectionService = menuSectionService;
        this.defineEvents();
    }

    /**
     * selectGroup
     */
    public selectGroup(item: MenuSectionItem) {
        let displayDataNotificationData: DisplayDataNotificationData = {
            id: item.id,
            name: item.name
        };
        this.rootScope.$emit("DISPLAY_DATA", displayDataNotificationData);
    }

    /**
     * defineEvents
     */
    private defineEvents() {
        let self = this;
        this.rootScope.$on("LOAD_MENU_SECTIONS", () => {
            this.menuSectionService.getSections()
            .then((sections: Array<MenuSection>) => {
                self.sections = sections;
            });
        });
    }
}

export default MenuController;