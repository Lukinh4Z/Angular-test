import { PiecesModule } from './pieces/pieces.module'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TableModule } from './table/table.module'
import { TestAnswersComponent } from './test-answers.component'

@NgModule({
  declarations: [TestAnswersComponent],
  imports: [CommonModule, TableModule, PiecesModule],
  exports: [TestAnswersComponent],
})
export class TestAnswersModule {}
