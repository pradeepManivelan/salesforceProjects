import { LightningElement, wire, api } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class GetRecord extends LightningElement {
    Name
    Owner
    AnnualRevenue

    @api recordId

    @wire(getRecord, {recordId:'$recordId', fields:[NAME_FIELD,OWNER_FIELD, ANNUAL_REVENUE_FIELD]})
    accountHandler({data, error}){
        if(data){
            console.log(data);
            this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:data.fields.AnnualRevenue.value;
            this.Name = data.fields.Name.displayValue ? data.fields.Name.displayValue:data.fields.Name.value;
            this.Owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue:data.fields.Owner.value;

        }
        if(error){
            console.log(this.AnnualRevenue);
            console.log(this.Name);
            console.log(this.Owner);
            console.log(error)
        }
    }

}