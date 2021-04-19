import { LightningElement,api } from 'lwc';

export default class LwcConfiguration extends LightningElement {
    @api heading;
    @api recordId;
    @api level;
    @api complexity;
}