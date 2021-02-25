import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    
    closeHandler(){
        const event = new CustomEvent('close');
        this.dispatchEvent(event);
    }
}