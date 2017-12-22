import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submitanswer',
  templateUrl: './submitanswer.component.html',
  styleUrls: ['./submitanswer.component.css']
})
export class SubmitanswerComponent implements OnInit {

  answerInput: string;
  @Output() buttonClicked = new EventEmitter();
  @Input() questionInfo;
  userScore: number = 0;

  constructor() { }

  ngOnInit() {
  }

  checkAnswerInput(answerInput): void {
    console.log(this.answerInput)
    if (this.questionInfo.answer == this.answerInput) {
      console.log("correct")
      this.userScore += this.questionInfo.value;
      this.answerInput = "";
      this.buttonClicked.emit()
    } else {
      console.log("wrong");
      this.answerInput = "";
      this.buttonClicked.emit();
    }

  }
}
