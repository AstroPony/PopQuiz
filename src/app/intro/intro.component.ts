import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() playerName: string = '';
  @Input() score: number = 0;
  @Input() completed: boolean = false;
  mobileView: boolean = false;
  private destroy$ = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getQuizCompleted()
      .pipe(takeUntil(this.destroy$))
      .subscribe(completed => this.completed = completed);
    this.mobileView = window.innerWidth <= 767;
    window.onresize = () => this.mobileView = window.innerWidth <= 767;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
