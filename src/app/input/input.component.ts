import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]="title"
           (keyup.enter)="changeTitle(inputElement)"
           #inputElement>
    <button (click)="changeTitle(inputElement)">
      Save
    </button>
    <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // I commented the line below because of tslint warning: "Type string trivially inferred from a string literal, remove type annotation"
  // title: string = '';
  title = '';

  constructor() {
  }

  changeTitle(inputElementReference): void {
    this.title = inputElementReference.value;
  }

  ngOnInit() {
  }

}
