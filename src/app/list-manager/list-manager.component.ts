import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <h1 *ngIf="userLoggedIn">{{title}}</h1>
    <todo-input (submit)="addItem($event)"></todo-input>
    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [todoItem]="item"></todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  userLoggedIn = true;
  title = 'todo';
  todoList;

  constructor(private todoListService: TodoListService) { }

  addItem(item): void {
    this.todoListService.addItem(item);
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList()
  }

}