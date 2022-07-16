import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PawnComponent } from './shared/pawn/pawn.component'
import { SquareComponent } from './square/square.component'
import { TestAnswersComponent } from './test-answers.component'

@NgModule({
  declarations: [TestAnswersComponent, SquareComponent, PawnComponent],
  imports: [CommonModule],
  exports: [TestAnswersComponent],
})
export class TestAnswersModule {}
