import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation'
export default class NavigateToTabItem extends NavigationMixin(LightningElement) {
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Static_Resources_Context_Toast'
            }
        })
    } 
}