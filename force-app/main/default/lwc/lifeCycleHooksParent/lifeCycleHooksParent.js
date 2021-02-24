import { LightningElement } from 'lwc';

export default class LifeCycleHooksParent extends LightningElement {
    isChildVisible = false;
    constructor(){
        super()
        console.log("Parent Constructor Called");
    }
    connectedCallback(){
        console.log("Parent connected callback called");
    }
    renderedCallback(){
        console.log("Parent rendered callback called");
    }
    changeHandler(event){
        this.isChildVisible = !this.isChildVisible;
    }

}