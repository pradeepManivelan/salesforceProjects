import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {subscribe, MessageContext} from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {
    @wire(MessageContext)
    context

    receivedMessage
    
    connectedCallback(){
        this.subscribeMessage();
    }
    subscribeMessge(){
        subscribe(this.context, SAMPLEMC, (message) => {this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }
    handleMessage(message){
        this.receivedMessage = message.messageToSend.value? message.messageToSend.value:"No Message";
    }
}