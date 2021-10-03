import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getQuizCompleted().subscribe((completed: boolean) => {
      this.completed = completed;
    });
    this.mobileView = window.innerWidth <= 767;
    window.onresize = () => this.mobileView = window.innerWidth <= 767;
  }

}
