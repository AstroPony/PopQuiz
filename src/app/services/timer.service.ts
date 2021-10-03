import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  curSec: number = 0;
  progressbarValue$ = new BehaviorSubject<number>(100);
  secondsLeft$ = new BehaviorSubject<number>(0);
  time: number = 10;
  timer: any = null;
  sub: any = null;

  constructor() { }

  startTimer() {
    if (!this.sub) {
      this.timer = interval(1000);
    } else {
      this.sub.unsubscribe();
    }

    this.sub = this.timer.subscribe((sec: number) => {
      this.progressbarValue$.next(100 - sec * 100 / this.time);
      this.curSec = sec;
      this.secondsLeft$.next((10 - sec));

      if (this.curSec === this.time) {
        this.sub.unsubscribe();
        this.startTimer();
      }
    });

  }

  getProgressbarValue(): Observable<number> {
    return this.progressbarValue$.asObservable();
  }

  getSecondsLeft(): Observable<number> {
    return this.secondsLeft$.asObservable();
  }
}
