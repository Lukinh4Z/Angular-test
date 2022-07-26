import { TestAnswersComponent } from './../../test-answers.component'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.scss'],
})
export class PawnComponent implements OnInit {
  @Input() positions = {
    id: 0,
    columnName: '',
    column: 0,
    row: 0,
    posX: 0,
    posY: 0,
    player: 0,
  }

  pawnClass = ''

  @Input() rowNumb = 0
  @Input() colNumb = 0

  ngOnInit(): void {
    this.renderPawn()
    this.pawnClass = 'player' + this.positions.player
  }

  renderPawn() {
    this.positions.posX = -(50 + this.colNumb * 50) + this.positions.column * 100
    this.positions.posY = 50 + this.colNumb * 50 - this.positions.row * 100
  }

  onClick(positions: any) {
    let moves = 0
    let factor = 0

    {
      positions.player === 1 ? (factor = 1) : (factor = -1)
    }
    {
      positions.firstMove ? ((moves = 2), (positions.firstMove = false)) : (moves = 1)
    }

    for (let i = 0; i < moves; i++) {
      const rect = document.getElementById(positions.columnName + (parseInt(positions.row) + (1 + i) * factor))

      if (rect) {
        if (!rect.className.includes('highlight')) {
          rect.className += ' highlight'
        }
        let rectListener = () => {
          positions.row = parseInt(rect.id.charAt(1))
          this.renderPawn()
        }
        rect.addEventListener('click', rectListener, false)
      }
    }
  }
}
