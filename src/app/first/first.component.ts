import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['first.component.css'],
})
export class FirstComponent {
  myDefaultText: string = 'This is just a default text';
  myText: string = '';

  onUpdateTextField(event: any) {
    this.myText = (<HTMLInputElement>event.target).value; //CASTING
  }

  onDefaultText(event: any) {
    this.myText = this.myDefaultText;
  }
}
