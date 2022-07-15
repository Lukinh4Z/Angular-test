import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TestAnswersComponent } from './test-answers.component'

@NgModule({
  declarations: [TestAnswersComponent],
  imports: [CommonModule],
  exports: [TestAnswersComponent],
})
export class TestAnswersModule {}
