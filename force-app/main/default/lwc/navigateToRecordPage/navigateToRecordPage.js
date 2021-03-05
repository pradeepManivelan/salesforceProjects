import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type:"standard__recordPage",
            attributes:{
                recordId:'0035g000001gM12AAE',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    navigateToEditPage(){
        this[NavigationMixin.Navigate]({
            type:"standard__recordPage",
            attributes:{
                recordId:'0035g000001gM12AAE',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}