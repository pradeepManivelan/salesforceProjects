import { LightningElement } from 'lwc';
import hasViewData from '@salesforce/userPermission/ViewAllData';
import myCustomPermission from '@salesforce/customPermission/show_details'
export default class CheckPermissions extends LightningElement {
    get hasViewDataAvailable(){
        return hasViewData;
    }

    get hasCustomPermission(){
        return myCustomPermission;
    }
}