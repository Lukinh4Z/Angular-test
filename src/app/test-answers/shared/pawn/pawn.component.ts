import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.scss'],
})
export class PawnComponent implements OnInit {
  @Input() position = {
    columnName: '',
    row: 0,
  }

  constructor() {}

  ngOnInit(): void {}
}
