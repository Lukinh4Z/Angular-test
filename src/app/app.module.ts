import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { TestAnswersModule } from './test-answers'
import { TestWrapperModule } from './test-wrapper'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestWrapperModule, TestAnswersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
