import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TestAnswersComponent } from './test-answers.component'
import { SquareComponent } from './square/square.component'
import { SquareOddComponent } from './square-odd/square-odd.component'
import { PawnComponent } from './shared/pawn/pawn.component'

@NgModule({
  declarations: [TestAnswersComponent, SquareComponent, SquareOddComponent, PawnComponent],
  imports: [CommonModule],
  exports: [TestAnswersComponent],
})
export class TestAnswersModule {}
