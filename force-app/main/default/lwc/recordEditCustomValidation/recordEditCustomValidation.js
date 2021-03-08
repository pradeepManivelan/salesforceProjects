import { LightningElement } from 'lwc';
import ACCOUNT_FIELD from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordEditCustomValidation extends LightningElement {
    objectApiName = ACCOUNT_FIELD;
    inputValue = '';
    inputHandler(event){
        this.inputValue = event.target.value;
    }

    submitHandler(event){
        event.preventDefault();
        const inputName = this.template.querySelector('lightning-input');
        const inputValue = inputName.value;
        if(!(inputValue.includes("India"))){
            inputName.setCustomValidity("The account name must include India");
        }else{
            inputName.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = inputValue;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputName.reportValidity();
    }

    successHandler(evt){
        const event = new ShowToastEvent({
            title:'Submitted Successfully',
            variant:'success',
            message:'You have successfully submitted' + evt.detail.id
        })
        this.dispatchEvent(event);
    }
    handleError(evt){
        const event = new ShowToastEvent({
            title:'Error Occurred',
            variant:'error',
            message:evt.detail.message
        })
        this.dispatchEvent(event);
    }
}