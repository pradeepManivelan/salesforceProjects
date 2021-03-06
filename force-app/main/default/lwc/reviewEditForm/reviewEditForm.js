import { LightningElement, api } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME from '@salesforce/schema/Contact.Name';
import TITLE from '@salesforce/schema/Contact.Title';
import PHONE from '@salesforce/schema/Contact.Phone';
import EMAIL from '@salesforce/schema/Contact.Email';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';

export default class ReviewEditForm extends LightningElement {

    objectApiName = CONTACT_OBJECT;
    fields = {
        accountId:ACCOUNT_ID,
        name: NAME, 
        title:TITLE, 
        phone:PHONE, 
        email:EMAIL, 
    }
}