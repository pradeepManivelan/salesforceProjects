import { LightningElement } from 'lwc';
import pubsub from 'c/pubSub';
export default class PubSubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.subscriber();
    }
    subscriber(){
        pubsub.subscribe('componentA', (message) => {
            this.message = message;
        })

    }
    

}