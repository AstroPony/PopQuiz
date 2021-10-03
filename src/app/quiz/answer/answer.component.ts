import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Question} from "../../interfaces/question";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit, OnChanges {
  @Input() question: Question = {} as Question;
  @Output() incScore = new EventEmitter<boolean>();
  answers: [] = [];
  showAnswers: string = '';
  correctAnswer: string = '';

  constructor() { }

  ngOnInit(): void {
    this.answers = this.question.answers;
  }

  ngOnChanges(): void {
    this.answers = this.question.answers;
    this.showAnswers = '';
  }

  checkAnswer(i: number) {
    this.showAnswers = 'showAnswers';

    if (i === this.question.correctIndex) {
      setTimeout(() => {
        this.incScore.emit(true);
      }, 2000)
    } else {

      setTimeout(() => {
        this.incScore.emit(false);
      }, 2000)
    }
  }

}
