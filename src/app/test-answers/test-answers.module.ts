import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TestAnswersComponent } from './test-answers.component'
import { SquareComponent } from './square/square.component'

@NgModule({
  declarations: [TestAnswersComponent, SquareComponent],
  imports: [CommonModule],
  exports: [TestAnswersComponent],
})
export class TestAnswersModule {}

//black and white, starting with white
