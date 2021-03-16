import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi';
export default class GetNavItems extends LightningElement {
    result

    @wire(getNavItems, {navItemsName:['standard-Account'], pageSize:30})
    navItemsHandler({data}){
        if(data){
            console.log(data);
            this.result = data.navItems[0];
        }
    }
}