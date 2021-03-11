import { LightningElement, wire } from 'lwc';
import {getPicklistValuesByRecordType, getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesByRecordType extends LightningElement {
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo


    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT, recordId: "$objectInfo.data.defaultRecordTypeId"})
    picklistHandler({data, error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.error(error);
        }
    }
}