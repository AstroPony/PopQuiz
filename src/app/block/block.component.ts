import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() finalScore: number = 0;
  @Input() finalPlayer: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.finalScore)
  }

}
