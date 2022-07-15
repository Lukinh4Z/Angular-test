import { Component } from '@angular/core'

@Component({
  selector: 'app-test-answers',
  templateUrl: './test-answers.component.html',
  styleUrls: ['./test-answers.component.scss'],
})
export class TestAnswersComponent {
  columns = [
    { name: 'A', odd: false },
    { name: 'B', odd: true },
    { name: 'C', odd: false },
    { name: 'D', odd: true },
    { name: 'E', odd: false },
    { name: 'F', odd: true },
    { name: 'G', odd: false },
    { name: 'H', odd: true },
  ]
}
