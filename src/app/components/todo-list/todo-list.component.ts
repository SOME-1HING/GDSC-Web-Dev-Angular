import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ITodo } from '../../interfaces/itodo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [TodoItemComponent, CdkDropList, CdkDrag],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: ITodo[] = [];
  filteredTodos: ITodo[] = [];

  @ViewChild('inputTask') inputTask: ElementRef = new ElementRef({});

  addItemTodo(task: string) {
    const input = this.inputTask.nativeElement;

    if (task.length == 0) return;

    this.todos.push({
      uid: uuidv4(),
      task: task,
    });

    this.filteredTodos = [...this.todos];
    input.value = '';
    input.focus();
  }

  onRemoveTodo(uid: string) {
    this.todos = this.todos.filter((item) => item.uid != uid);
    this.filteredTodos = [...this.todos];
  }
}
