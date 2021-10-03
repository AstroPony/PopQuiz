import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { TimerService } from "../../services/timer.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() secLeft = new EventEmitter<number>();
  progressbarValue: number = 0;
  private destroy$ = new Subject();

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.startTimer();
    this.timerService.getProgressbarValue()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
      this.progressbarValue = value;
    });
    this.timerService.getSecondsLeft()
      .pipe(takeUntil(this.destroy$))
      .subscribe(seconds => {
      this.secLeft.emit(seconds);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
