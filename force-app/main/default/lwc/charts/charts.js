import { LightningElement } from 'lwc';
import chartJS from "@salesforce/resourceUrl/chartJS";
import {loadScript} from "lightning/platformResourceLoader";
export default class Charts extends LightningElement {
    renderedCallback(){
        loadScript(this, chartJS+'/chartJs/Chart.js').then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error);
        })
    }
}