import { Component, OnInit } from '@angular/core';
import { DbTodos } from '../db-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  allTodos:DbTodos[] = [
    {
      id:123,
      title:"title 1",
      completed: true
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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
