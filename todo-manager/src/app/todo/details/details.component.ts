import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public localTodo: Todo | undefined;
  private todoList: Todo[] = [];

  constructor(private router: ActivatedRoute) {}

  public ngOnInit(): void {
    const todos = localStorage.getItem('todos');

    this.todoList = todos ? JSON.parse(todos) : [];

    console.log(this.todoList)
    this.router.params.subscribe((el) => {
      this.localTodo = this.todoList[(el as any).id];
    });
  }
}
