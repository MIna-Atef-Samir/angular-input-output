import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() currentTodo: string = '';
  @Input() Todos: string[] = [];
  @Output() addNewTodo = new EventEmitter<any>();


  onAddTodo(value : string) {
    this.addNewTodo.emit(value);
  }
  onPopTodo() {
    this.Todos.pop();
  }
  
}
