import { LightningElement } from 'lwc';
import searchAccounts from "@salesforce/apex/AccountController.searchAccounts";
export default class ApexInLwcWithParams extends LightningElement {
    searchKey;
    accounts;
    timer
    seachHandler(event){
        window.clearTimeout(this.timer);
        this.searchKey = event.target.value;
 this.timer = setTimeout(() => {
     this.searchMethod
 },1000)
    }


    searchMethod(){
        searchAccounts({searchKey:this.searchKey}).then(result => {
            this.accounts = result;
            console.log(result)
        }).catch(error => {
            console.error(error);
        })
    }

}