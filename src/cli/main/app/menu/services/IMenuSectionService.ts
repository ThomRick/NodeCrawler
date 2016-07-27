/// <reference path="../../../../../../typings/angularjs/angular.d.ts" />
import MenuSection from "../models/MenuSection";

/**
 * IMenuSectionService
 */
interface IMenuSectionService {
    getSections(securityToken: string): ng.IPromise<Array<MenuSection>>;
}

export default IMenuSectionService;