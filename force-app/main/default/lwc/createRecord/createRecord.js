import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecord extends LightningElement {
    formFields = {};
    
    changeHandler(event){
        console.log(event);
        const {name,value} = event.target;
        this.formFields[name] = value;
    }

    createContact(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput).then(result => {
            this.showToast('Success', '${result.id}')
        }).catch(error => {
            console.log(error);
            this.showToast('Error', 'Error Occured', 'error')
        }); 
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || "success"
        }))
    }
}