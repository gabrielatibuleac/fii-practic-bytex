import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public todoList: Todo[] = [];

  public newTodoName: string = '';

  public ngOnInit(): void {
    const todos = localStorage.getItem('todos');

    this.todoList = todos ? JSON.parse(todos) : [];
  }

  public onTodoChanged(item: number): void {
    this.todoList[item].checked = !this.todoList[item].checked;

    this.updateLocalStorage();
  }

  public addNewTodo(): void {
    if (this.newTodoName.length) {
      this.todoList.push({
        text: this.newTodoName,
        checked: false,
      });
      this.newTodoName = '';
    }

    this.updateLocalStorage();
  }

  public onValueChange(event: any): void {
    this.newTodoName = event?.target.value;
  }

  public onRemoveTodo(index: number): void {
    this.todoList.splice(index, 1);

    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}
