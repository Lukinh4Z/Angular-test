import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-test-answers',
  templateUrl: './test-answers.component.html',
  styleUrls: ['./test-answers.component.scss'],
})
export class TestAnswersComponent implements OnInit {
  colNumb = 8
  rowNumb = 8

  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']

  columns = [{ name: '', number: 0 }]

  generateColumnsObj(colNumb: number) {
    for (let i = 0; i < colNumb; i++) {
      this.columns[i] = {
        name: this.letters[i],
        number: i + 1,
      }
    }
  }

  positions = [
    {
      id: 0,
      columnName: 'A',
      column: 1,
      row: 2,
      firstMove: true,
      posX: 0,
      posY: 0,
      player: 1,
    },
    {
      id: 1,
      columnName: 'C',
      column: 3,
      row: 3,
      //assuming that, as it is on row '3', it has already
      //taken it's firs move.
      firstMove: false,
      posX: 0,
      posY: 0,
      player: 1,
    },
    {
      id: 1,
      columnName: 'A',
      column: 1,
      row: 7,
      firstMove: true,
      posX: 0,
      posY: 0,
      player: 2,
    },
  ]

  constructor() {
    this.generateColumnsObj(this.colNumb)
  }

  ngOnInit(): void {}
}
