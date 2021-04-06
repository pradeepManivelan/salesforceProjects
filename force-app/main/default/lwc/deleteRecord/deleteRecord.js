import { LightningElement } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';
export default class DeleteRecord extends LightningElement {
    recordId;
    changeHandler(event){
        this.recordId = event.target.value;
    }

    deleteHandler(){
        deleteRecord(this.recordId).then(result => console.log(result));
    }

}