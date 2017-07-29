import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardsetComponent } from './cardset/cardset.component';
import { CardfilterPipe } from './cardfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardsetComponent,
    CardfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
