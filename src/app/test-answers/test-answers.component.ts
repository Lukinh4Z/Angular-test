import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-test-answers',
  templateUrl: './test-answers.component.html',
  styleUrls: ['./test-answers.component.scss'],
})
export class TestAnswersComponent implements OnInit {
  columns = [
    { name: 'A', number: 1 },
    { name: 'B', number: 2 },
    { name: 'C', number: 3 },
    { name: 'D', number: 4 },
    { name: 'E', number: 5 },
    { name: 'F', number: 6 },
    { name: 'G', number: 7 },
    { name: 'H', number: 8 },
  ]

  position = [
    {
      id: 0,
      columnName: 'A',
      column: 1,
      row: 2,
      firstMove: true,
      posX: 0,
      posY: 0,
    },
    {
      id: 1,
      columnName: 'C',
      column: 3,
      row: 3,
      firstMove: false,
      posX: 0,
      posY: 0,
    },
  ]

  stylePos = {
    column: 0,
    row: 0,
    define: '',
  }

  renderPawn(number: number) {
    this.position[number].posX = -450 + this.position[number].column * 100
    this.position[number].posY = 450 - this.position[number].row * 100
  }

  onClick(number: number, position: any) {
    let move = 0
    {
      position[number].firstMove ? ((move = 0), (position[number].firstMove = false)) : (move = -1)
    }

    for (let i = -1; i <= move; i++) {
      const rect = document.getElementById(position[number].columnName + (parseInt(position[number].row) + (2 + i)))

      if (rect) {
        if (!rect.className.includes('highlight')) {
          rect.className += ' highlight'
        }
        rect.addEventListener(
          'click',
          () => {
            position[number].row = parseInt(rect.id.charAt(1))
            this.renderPawn(number)
            // this.rect.removeAllListeners()
          },
          false,
        )
      }
    }
  }

  ngOnInit(): void {
    this.position.forEach(element => {
      this.renderPawn(element.id)
    })
  }
}
