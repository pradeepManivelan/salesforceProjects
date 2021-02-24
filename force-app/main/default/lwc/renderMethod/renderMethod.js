import { LightningElement } from 'lwc';
import renderTemplate from './renderMethod.html';
import signUpTemplate from './signUp.html';
import signInTemplate from './signIn.html';
export default class RenderMethod extends LightningElement {
    selected = '';
    render(){
        return this.selected == "Sign Up" ? signUpTemplate:
        this.selected == "Sign In" ? signInTemplate:
        renderTemplate;
    }
    changeHandler(event){
        this.selected = event.target.label;
    }
}