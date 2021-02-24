import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {
    constructor(){
        super()
        console.log("Child constructor called")
    }
    connectedCallback(){
        console.log("Child connected callback called")
    }
    renderedCallback(){
        console.log("Child rendered Callback");
    }
    disconnectedCallback(){
        alert("Child component removed");
    }
}