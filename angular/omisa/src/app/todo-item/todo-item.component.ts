import { Component, OnInit, Input, Output} from '@angular/core';
import { DbTodos } from '../db-todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoTitle:string = "";
  @Input() todoItem:DbTodos = new DbTodos(0, '', false);

  constructor() { }

  ngOnInit(): void {
  }


  setStyles(){
    //console.log('set styles');
    let classes = 
    {
      itemRow: true,
      textLineThroght: this.todoItem.completed
    }

    return classes;
  }

  onCheckBoxCompleted(){
    //console.log('checkbox clicked');
    this.todoItem.completed = !this.todoItem.completed;
  }

}
