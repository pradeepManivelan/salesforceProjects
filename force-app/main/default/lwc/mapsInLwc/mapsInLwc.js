import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/MapsLWCController.getAccounts";
export default class MapsInLwc extends LightningElement {
    mapMarkers = {};
    selectedMarker = ''
    @wire(getAccounts)
    wireHandler({data, error}){
        if(data){
            console.log(data);
            this.formatData(data);
        }
        if(error){
            console.log(error);
        }
    }

    formatData(data){
        this.mapMarkers = data.map(item => {
            return {
                location:{
                    Street:item.BillingStreet ||'',
                    City:item.BillingCity || '',
                    State:item.BillingState || '',
                    Country:item.BillingCountry || '',
                    PostalCode:item.BillingPostalCode || ''
                },
                icon:'utility:salesforce1',
                title:item.Name,
                value:item.Name,
                description:item.description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value;

    }
    selectedMarker(event){
        this.selectedMarker = event.detail.selectedMarkerValue
    }
}