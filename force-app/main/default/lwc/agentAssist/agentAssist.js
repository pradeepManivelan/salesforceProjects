import { LightningElement } from 'lwc';

export default class AgentAssist extends LightningElement {
    connectedCallback(){
        console.log("Child connected call back")
    }
    renderedCallback(){
        console.log("Child rendered");
    }
}