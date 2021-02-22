import { LightningElement } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class QuizApp extends LightningElement {
  count = 0;
    //to store answers
    selected = {};
    totalCorrectAnswers = 0;
   
  questionList = [
    {
      id: "Question 1",
      ques: "How many planets are there in the solar system?",
      answers: {
        a: 8,
        b: 9,
        c: 7
      },
      correctAnswer: "a"
    },
    {
      id: "Question 2",
      ques: "What is the name of the recently launched rover in Mars?",
      answers: {
        a: "Curiosity",
        b: "Perseverance",
        c: "Voyager"
      },
      correctAnswer: "b"
    },
    {
      id: "Question 3",
      ques: "By how many angle did earth is tilted?",
      answers: {
        a: 23.5,
        b: 24.5,
        c: 27.5
      },
      correctAnswer: "a"
    }
  ];
  get counter() {
    return (this.count += 1);
  }
  submitHandler(event){ 
    event.preventDefault();
      let correct = this.questionList.filter(item => item.correctAnswer === this.selected[item.id]);
      this.totalCorrectAnswers = correct.length;
        // console.log(correct);
        // console.log(this.totalCorrectAnswers );
        this.showToast();   
  }
  resetHandler(){
    console.log(Object.keys(this.selected).length)
    console.log(this.questionList.length)
    this.selected = {}
    this.totalCorrectAnswers = 0;
  }
  //to check if all the answers are selected
  get allNotSelected(){
    return !(Object.keys(this.selected).length == this.questionList.length);
  }

  changeHandler(event){
      this.selected = {...this.selected,[event.target.name]:event.target.value};
  }
  showToast() {
    const event = new ShowToastEvent({
        title: 'Successfully Submitted',
        variant:(this.totalCorrectAnswers === this.questionList.length)? "success":"error",
        message: `You have scored ${this.totalCorrectAnswers} marks out of ${this.questionList.length}`,
    });
    this.dispatchEvent(event);
}

}
