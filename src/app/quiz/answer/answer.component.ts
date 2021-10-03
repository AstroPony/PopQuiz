import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import { Question } from "../../interfaces/question";
import { DataService } from "../../services/data.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() question: Question = {} as Question;
  @Output() incScore = new EventEmitter<boolean>();
  answers: [] = [];
  showAnswers: string = '';
  correctAnswer: number = 0;
  questionsLeft: number = 0;
  private destroy$ = new Subject();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.correctAnswer = this.question.correctIndex;
    this.answers = this.question.answers;

    this.dataService.getQuestionsLeft()
      .pipe(takeUntil(this.destroy$))
      .subscribe(amount => this.questionsLeft = amount)
  }

  ngOnChanges(): void {
    this.correctAnswer = this.question.correctIndex;
    this.answers = this.question.answers;
    this.showAnswers = '';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
