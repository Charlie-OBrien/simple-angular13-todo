import { Component } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Charlie", [
    new TodoItem("Walk dog", true),
    new TodoItem("Watch Star Wars in chronological order"),
    new TodoItem("Learn Angular"),
  ]);  
  
//Getters
  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

//Method will throw error
 addItem(newItem: string) {
    if (newItem != "") {
       return this.list.addItem(newItem);
    }
  } //Need string to fix Parameter has an any type error

  showComplete: boolean = false;
}
