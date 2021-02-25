import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isVisible = false;
    handleClick(){
        this.isVisible = true;
    }
    closeHandler(){
        this.isVisible = false;
    }
}