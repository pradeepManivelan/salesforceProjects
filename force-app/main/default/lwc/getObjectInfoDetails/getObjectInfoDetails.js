import { LightningElement,wire } from 'lwc';
import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi';
import ACCOUNT_FIELD from '@salesforce/schema/Account'
import OPPORTUNITY_FIELD from '@salesforce/schema/Opportunity'
export default class GetObjectInfoDetails extends LightningElement {
    // defaultRecordTypeId
    // @wire(getObjectInfo, {objectApiName:ACCOUNT_FIELD})
    // getObjectDetails({data, error}){
    //     if(data){
    //         this.defaultRecordTypeId = data.defaultRecordTypeId;
    //         console.log(data)
    //     }
    //     if(error){
    //         console.error(error);
    //     }
    // }

    objectFields = [ACCOUNT_FIELD, OPPORTUNITY_FIELD]
    objectDetails
    @wire(getObjectInfos, {objectApiNames:'$objectFields'})
    getObjectDetails({data, error}){
        if(data){
            this.objectDetails = data;
            //this.defaultRecordTypeId = data.defaultRecordTypeId;
            console.log(data)
        }
        if(error){
            console.error(error);
        }
    }

}