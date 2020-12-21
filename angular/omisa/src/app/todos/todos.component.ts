import { Component, OnInit } from '@angular/core';
import { DbTodos } from '../db-todos';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  allTodos:DbTodos[] = [];
  /* = [
    {
      id:123,
      title:"title 1",
      completed: false
    },
    {
      id:456,
      title:"title 2",
      completed: true
    },
    {
      id:789,
      title:"title 3",
      completed: false
    }
  ];*/

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getTodos().subscribe(todos => {
      this.allTodos = todos;
    })
  }

}
