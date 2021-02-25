import { LightningElement, api } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    val = 0;
    changeHandler(event){
        this.val = event.target.value;
    }

    @api resetHandler(){
        this.val = 0;
    }
}