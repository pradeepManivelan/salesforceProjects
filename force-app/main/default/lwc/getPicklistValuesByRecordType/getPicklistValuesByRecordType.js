import { LightningElement, wire } from 'lwc';
import {getPicklistValuesByRecordType, getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesByRecordType extends LightningElement {
    ratingOptions;
    industryOptions;
    selectedRating
    selectedIndustry

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo


    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT, recordTypeId: "$objectInfo.data.defaultRecordTypeId"})
    picklistHandler({data, error}){
        if(data){
            console.log(data);
            this.ratingOptions = this.pickListGenerator(data.picklistFieldValues.Rating);
            this.industryOptions = this.pickListGenerator(data.picklistFieldValues.Industry);
        }
        if(error){
            console.error(error);
        }
    }

    pickListGenerator(data){
        return (data.values.map(item => ({label:item.label, value:item.value})))
    }

    handleChange(event){
        if(event.target.name == "Rating"){
            this.selectedRating = event.target.value
        }
        if(event.target.name == "Industry"){
            this.selectedIndustry = event.target.value;        }
      
    }
}