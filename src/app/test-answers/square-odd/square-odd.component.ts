import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-square-odd',
  templateUrl: './square-odd.component.html',
  styleUrls: ['./square-odd.component.scss'],
})
export class SquareOddComponent implements OnInit {
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8']

  @Input() column = ''

  constructor() {}

  ngOnInit(): void {}
}
