import { LightningElement, wire } from 'lwc';
import {updateRecord} from 'lightning/uiRecordApi';
import {getListUi} from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS = [
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
    {label:'Phone',fieldName:'Phone', editable:true},
    {label:'Email',fieldName:'Email', type:'email'},
    {label:'Title',fieldName:'Title'}
]
export default class UpdateRecord extends LightningElement {
    contacts = [];
    columns = COLS;
    draftValues = [];
    @wire(getListUi, {
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts'
    })listViewHandler({data, error}){
        if(data){
            console.log(data);
            this.contacts = data.records.records.map(item => {
                return {
                    'Id':this.getValue(item, 'Id'),
                    'Name':this.getValue(item, 'Name'),
                    'Phone':this.getValue(item, 'Phone'),
                    'Email':this.getValue(item, 'Email'),
                    'Title':this.getValue(item, 'Title')

                }
            })
        }
        if(error){
            console.log(error);
        }
    }

    getValue(data, field){
        return data.fields[field].value;
    }

    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues))
        const recordInputs = event.detail.draftValues.map(item => {
            const fields = {...item}
            return {fields:fields};
        })

        const promises = recordInputs.map(recordInput => {
            updateRecord(recordInput)
        })

        Promise.all(promises).then(() => {
            console.log('Updated Successfully')
            this.draftValues=[];
        }).catch(error => {
            console.error(error);
        })
    }
}