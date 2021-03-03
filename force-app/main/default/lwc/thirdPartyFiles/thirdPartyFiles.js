import { LightningElement } from 'lwc';
import MOMENTJS from "@salesforce/resourceUrl/momentJS";
import ANIMATECSS from "@salesforce/resourceUrl/animateCSS";
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
export default class ThirdPartyFiles extends LightningElement {
    dateAndTime;
    isLibraryLoaded = false;
    renderedCallback(){
        if(this.isLibraryLoaded){
            return 
        }else{
            Promise.all([
                loadScript(this, MOMENTJS+'/moment/moment.min.js'),
                loadStyle(this, ANIMATECSS+'/animate/animate.min.css'),

            ]).then(() => {
                this.setDateAndTime();
            }).catch(error => {
                console.error(error);
            })
            this.isLibraryLoaded = true;
        }

    }

    setDateAndTime(){
        this.dateAndTime = moment().format('LLLL');
    }
}