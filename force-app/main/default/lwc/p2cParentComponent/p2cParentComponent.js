import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    resetHandler(){
        this.template.querySelector('c-p2c-child-component').resetHandler();
    }
}