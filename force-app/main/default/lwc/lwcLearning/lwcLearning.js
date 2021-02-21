import { LightningElement, track } from 'lwc';

export default class LwcLearning extends LightningElement {
    name = "Pradeep"
    title = "Salesforce developer"
    // @track
    address = {
        city: "Coimbatore",
        state: "Tamil Nadu",
        pinCode: 641031
    }
    changeTitle(event){
        this.title = event.target.value;
    }
    // trackCity(event){
    //     this.address.city = event.target.value;
    // }
    //better to use spread operator since in js it is recommended not to mutate object
    trackCity(event){
        this.address = {...this.address, "city":event.target.value};
    }

    //getters 
    num1 = 10;
    num2 = 30;
    get multiply(){
        return this.num1 * this.num2;
    }

}