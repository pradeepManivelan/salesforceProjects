import { LightningElement, wire, api } from 'lwc';
import {getRecordUi} from 'lightning/uiRecordApi';
export default class GetRecordUI extends LightningElement {
    @api recordId;


    @wire(getRecordUi, {recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountUiHandler({data, error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.error(error);
        }
    }


}