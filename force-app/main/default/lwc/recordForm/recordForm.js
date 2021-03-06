import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordForm extends LightningElement {
    @api recordId;
    @api objectApiName = ACCOUNT_OBJECT;
    fieldList = [NAME_FIELD, TYPE_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    successHandler(event){
        let evt = new ShowToastEvent({
            title:'Account created',
            message:"Record Id:"+event.detail.id,
            variant:'success'
        })
        this.dispatchEvent(evt);
    }
}