import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]="title"
           (keyup.enter)="submitValue(inputElement)"
           #inputElement>
    <button (click)="submitValue(inputElement)">
      Save
    </button>
    <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = '';

  constructor() {
  }

  submitValue(inputElementReference: any): void {
    this.submit.emit(inputElementReference.value);
  }

  ngOnInit() {
  }

}
