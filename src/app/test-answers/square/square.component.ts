import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8']

  columnClass = ''
  @Input() columnName = ''
  @Input() columnNumber = 0

  constructor() {}

  ngOnInit(): void {
    if (this.columnNumber % 2 == 0) {
      this.columnClass = 'odd'
    } else {
      this.columnClass = 'even'
    }
  }
}
