import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPickListValues extends LightningElement {

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo


    @wire(getPicklistValues, {recordTypeId:"$objectInfo.data.defaultRecordTypeId", fieldApiName:INDUSTRY_FIELD})
    pickListHandler({data, error}){
        if(data){
            console.log(data);
            //this.generatePickList(data);
            this.industryOptions = [...this.generatePickList(data)]
        }
        if(error){
            console.error(error);
        }
    }

    selectedValue = '';
    industryOptions = [];
    // get options() {
    //     return [
    //         ,
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    handleChange(event) {
        this.selectedValue = event.detail.value;
    }

    generatePickList(data){
        return data.values.map(item => ({ label: item.label, value: item.value}))
    }


}