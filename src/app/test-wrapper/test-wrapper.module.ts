import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TestWrapperComponent } from './test-wrapper.component'

@NgModule({
  declarations: [TestWrapperComponent],
  imports: [CommonModule],
  exports: [TestWrapperComponent],
})
export class TestWrapperModule {}
