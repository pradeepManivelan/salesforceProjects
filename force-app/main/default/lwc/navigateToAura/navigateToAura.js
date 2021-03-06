import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToAura extends NavigationMixin(LightningElement) {
    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__AuraNavigation'
            },
            state:{
                "c__id":"9876543456789"
            }
        })
    }
}