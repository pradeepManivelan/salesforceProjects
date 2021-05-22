import { LightningElement } from 'lwc';
import {loadStyle} from "lightning/platformResourceLoader";
import customStyling from "@salesforce/resourceUrl/customStyling"
export default class FixedReviewpage extends LightningElement {
    connectedCallback(){
        console.log("parent connected")
    }
    renderedCallback(){
        Promise.all([loadStyle(this, customStyling)]);
        console.log("parent rendered")
    }
}