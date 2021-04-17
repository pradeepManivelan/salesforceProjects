import { LightningElement } from 'lwc';
const BOOKSURL= 'https://www.googleapis.com/books/v1/volumes?q=mark';
export default class BookApp extends LightningElement {
    books;
    searchKey = 'Stephan';
    timer;
    connectedCallback(){
        this.fetchData();
    }

    changeHandler(event){
        window.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            console.log(event.detail.value);
        },2000)
        
        // this.searchKey = event.details.value;
    }
    fetchData(){
        fetch(BOOKSURL+this.searchKey)
        .then(result => result.json())
        .then(result => {
            this.books = result
            console.log(result)})
        .catch(error => console.log(error))
    }

}