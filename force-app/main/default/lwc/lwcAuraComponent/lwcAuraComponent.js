import { LightningElement, api } from 'lwc';

export default class LwcAuraComponent extends LightningElement {
    @api title;
    
    sendHandler(){
        const event = new CustomEvent('sendMsg',{
            detail:{
                'msg':"This is sent from LWC to Aura"
            }
        })
        this.dispatchEvent(event);
    }
}