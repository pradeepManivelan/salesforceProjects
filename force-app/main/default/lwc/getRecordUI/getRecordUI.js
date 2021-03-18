import { LightningElement, wire, api } from 'lwc';
import {getRecordUi} from 'lightning/uiRecordApi';
export default class GetRecordUI extends LightningElement {
    @api recordId;

    formFields = [{"fieldName":"AccountNumber", "label":"Account Number"},
    {"fieldName":"AnnualRevenue", "label":"Annual Revenue"},
    {"fieldName":"Name", "label":"Name"},
    {"fieldName":"Phone", "label":"Phone"}]

    @wire(getRecordUi, {recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountUiHandler({data, error}){
        if(data){
            console.log(data);
            this.formFields = this.formFields.map(item => {
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error);
        }
    }


}