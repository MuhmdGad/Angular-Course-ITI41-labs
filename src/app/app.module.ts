import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first/first.component";
import { SecondComponent } from "./components/second/second/second.component";
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, WrapperComponent, TitleComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
