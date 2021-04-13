import { LightningElement } from 'lwc';
import getAccountController from '@salesforce/apex/AccountController.getAccountController';
export default class ApexImperativeLWC extends LightningElement {
    
    accountList;

    handleAccount(){
        getAccountController().then(result => {
            this.accountList = result;
            console.log(this.accountList);
        }).catch(error => {
            console.error(error);
        })
    }
}