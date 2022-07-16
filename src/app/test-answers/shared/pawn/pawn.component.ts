import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.scss'],
})
export class PawnComponent implements OnInit {
  position = {
    column: 'A',
    row: '2',
  }

  constructor() {}

  ngOnInit(): void {}
}
