import { LightningElement } from 'lwc';

export default class ComponentCommunicationParent extends LightningElement {
    progressValue = 0
    updateProgress(event){
        this.progressValue = event.target.value;
    }
}