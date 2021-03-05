import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordRelationshipPage extends NavigationMixin(LightningElement) {
    navigateToRecordRelationshipPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                objectApiName:'Account',
                recordId:'0015g000004ZZ68AAG',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}