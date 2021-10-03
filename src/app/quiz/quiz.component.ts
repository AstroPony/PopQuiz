import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';

import { DataService } from "../services/data.service";
import { Question } from "../interfaces/question";
import { TimerService } from "../services/timer.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit, OnDestroy {
  @Output() updateScore = new EventEmitter<number>();
  @Input() secLeft: number = 0;
  secToScore: number = 0;
  private destroy$ = new Subject();

  question: Question = {} as Question;

  constructor(private dataService: DataService,
              private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getSecondsLeft()
      .pipe(takeUntil(this.destroy$))
      .subscribe(seconds => {
      if (seconds === 0) {
        this.question = this.dataService.getData();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  shouldSetScore(answer: boolean) {
    if (answer) {
      this.updateScore.emit(this.secToScore);
    }
    this.question = this.dataService.getData();
    this.timerService.startTimer();
  }

  setScoreBySec(seconds: number) {
    this.secToScore = seconds;
  }

}
