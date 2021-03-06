import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NaviagateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navigateToVfPage'
            }
        }).then(url => {
                window.open(url);
            })
    }
}