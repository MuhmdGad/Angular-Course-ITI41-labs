import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['first.component.css'],
})
export class FirstComponent implements OnInit {
  myText: string = 'Just a default Text!';

  myDefaultText: string = 'Muhammad Taha';

  ngOnInit(): void {}

  onUpdateTextField(event: any) {
    this.myText = (<HTMLInputElement>event.target).value; //CASTING
  }

  onDefaultText(event: any) {
    this.myText = this.myDefaultText;
  }
}
