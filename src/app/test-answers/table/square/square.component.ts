import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() columnName = ''
  @Input() columnNumber = 0
  @Input() rowNumb = 0
  @Input() isMovable = false

  movement = false
  columnClass = ''
  numbers = [0]

  constructor() {
    this.movement = this.isMovable
  }

  columnCreate(rowNumb: number) {
    for (let i = 0; i < rowNumb; i++) {
      this.numbers[i] = i + 1
    }
  }

  ngOnInit(): void {
    if (this.columnNumber % 2 == 0) {
      this.columnClass = 'odd'
    } else {
      this.columnClass = 'even'
    }
    this.columnCreate(this.rowNumb)
  }
}
