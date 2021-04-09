import { LightningElement,wire } from 'lwc';
import getAccountController from '@salesforce/apex/AccountController.getAccountController';
export default class ApexAccountController extends LightningElement {
    accountList;
    @wire(getAccountController)
    accounts

    
    @wire(getAccountController)
    apexInLwcFunction({data, error}){
        if(data){
            this.accountList = data.map(item => {
                let newName = item.Name === "Pradeep from India"?"Pradeep":item.Name;
                console.log(newName);
                return {...item, newName};
            })
        }
        if(error){
            console.error(error);
        }
    }
}