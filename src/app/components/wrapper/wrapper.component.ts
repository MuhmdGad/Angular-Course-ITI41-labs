import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent implements OnInit {
  data = [];

  receiver(eventData) {
    console.log(eventData);
    this.data.push(eventData);
  }
  constructor() {}

  ngOnInit(): void {}
}
