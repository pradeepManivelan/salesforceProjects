import { LightningElement, api } from 'lwc';

export default class ComponentCommunicationChild extends LightningElement {
    @api name;
    @api age;
    @api isAvailable;
    get availability(){
        return this.isAvailable ? "will play tomorrow's game": "unfit";
    }
}