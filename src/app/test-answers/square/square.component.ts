import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-square-even',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8']

  column: string = ''
  constructor() {}

  ngOnInit(): void {}
}
