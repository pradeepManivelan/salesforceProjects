import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    name;
    handleClick(){
        this.isVisible = true;
    }
    changeName(event){
        this.name = event.target.value;
    }
    get checkName(){
        return this.name === "hello";
    }
}