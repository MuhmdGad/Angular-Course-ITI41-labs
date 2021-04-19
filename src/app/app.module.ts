import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    FirstComponent,
    SecondComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
