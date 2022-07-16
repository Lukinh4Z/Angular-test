import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SquareComponent } from './square/square.component'

@NgModule({
  declarations: [SquareComponent],
  imports: [CommonModule],
  exports: [SquareComponent],
})
export class TableModule {}
