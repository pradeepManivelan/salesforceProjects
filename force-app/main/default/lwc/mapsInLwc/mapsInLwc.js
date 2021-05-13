import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/MapsLWCController.getAccounts";
export default class MapsInLwc extends LightningElement {
    @wire(getAccounts)
    wireHandler({data, error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.log(error);
        }
    }
}