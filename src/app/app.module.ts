import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PwComponent } from './pw/pw.component';
import { TypingChallangeComponent } from './typing-challange/typing-challange.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PwComponent,
    TypingChallangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
