import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  constructor() {}

  ngOnInit(): void {}

  firstName: string = '';
  lastName: string = '';
  data = {};

  @Output() event = new EventEmitter();

  add() {
    this.data = {
      firstName: this.firstName,
      lastName: this.lastName,
    };
    this.event.emit(this.data);
  }
}
