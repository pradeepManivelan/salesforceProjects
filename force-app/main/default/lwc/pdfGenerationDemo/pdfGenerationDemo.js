import { api, LightningElement } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF';

export default class PdfGenerationDemo extends LightningElement {
    @api recordId;
    imageURL = "https://tse3.mm.bing.net/th?id=OIP.JuOYUCTzWZSN2RhH-veeJAHaEQ&pid=Api&P=0&w=279&h=161";
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'12345 Sunny Road',
        address2:' Sunnyville, CA 12345'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]

    get totalAmount(){
        return this.services.reduce((total, service) => {
            return total = total + service.amount;
        },0)
    }

    pdfHandler(){
        let pdfContent = this.template.querySelector('.container');
        console.log(pdfContent);
        generatePDF({recordId:this.recordId,htmlData:pdfContent.outerHTML}).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    }
    //pdf
}