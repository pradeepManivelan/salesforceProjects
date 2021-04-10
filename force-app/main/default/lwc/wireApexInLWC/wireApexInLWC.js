import { LightningElement, wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType';
export default class WireApexInLWC extends LightningElement {
    selectedType;
    
    @wire(filterAccountByType, {type:'$selectedType'})
    filteredAccounts

    get getOptions(){
        return[
           { label: 'Customer - Direct', value: 'Customer - Direct'}
        ]
    }

    changeOptions(event){
        this.selectedType = event.target.value;
    }
}