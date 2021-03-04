import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ToastNotifications extends LightningElement {
    successHandler(){
        this.showToast("Success", "{0} This is a Success Notification {1}", "success")
    }
    warningHandler(){
        this.showToast("Warning", "This is a warning Notification", "warning")
    }
    errorHandler(){
        this.showToast("Error", "This is a Error Notification", "error")
    }
    infoHandler(){
        this.showToast("Info", "This is a Info Notification", "info")
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData : [
                "Salesforce",{
                    url:"https://www.salesforce.com/",
                    label:"Click here"
                }
            ]
        })
        this.dispatchEvent(event);
    }

}