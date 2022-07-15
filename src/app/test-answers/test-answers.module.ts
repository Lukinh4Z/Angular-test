import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TestAnswersComponent } from './test-answers.component'

@NgModule({
  declarations: [TestAnswersComponent],
  imports: [CommonModule],
  exports: [TestAnswersComponent],
})
export class TestAnswersModule {}

//a black square in the middle of the screen, 100px h & w.
