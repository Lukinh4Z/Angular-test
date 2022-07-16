import { PawnComponent } from './pawn/pawn.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [PawnComponent],
  imports: [CommonModule],
  exports: [PawnComponent],
})
export class PiecesModule {}
