import { Component } from '@angular/core';

@Component({
  selector: 'app-user-features2',
  templateUrl: './user-features2.component.html',
  styleUrls: ['./user-features2.component.scss']
})
export class UserFeatures2Component {
  currentTodo = "todo from parent";
  Todos = ["buy milk", "train your muscles", "train your brain", "Stay fucking hard"];

  addTodo(newTodo: any) {
    this.Todos.push(newTodo);
  }
}
