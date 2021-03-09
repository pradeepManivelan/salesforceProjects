import { LightningElement, wire } from 'lwc';
import ID from '@salesforce/user/Id';
import {getRecord} from 'lightning/uiRecordApi';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [EMAIL_FIELD, NAME_FIELD];
export default class WireUserDetails extends LightningElement {
    userId = ID;

    // @wire(adapterId, {AdapterConfig})
    // propertyOrFunction
    userDetail;
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields;
        }
        if(error){
            console.error(response.error);
        }
        
    }

    @wire(getRecord, {recordId:'$userId', fields})
    userDetailProperty

}