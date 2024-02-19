import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { ITodo } from '../../interfaces/itodo';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnChanges {
  rutaCheck: string = '';

  @Input() todo: ITodo = { uid: '', task: '' };
  @Output() onRemoveTodo = new EventEmitter<string>();

  ngOnChanges(): void {
    this.rutaCheck = '';
  }

  removeTodo(uid: string) {
    this.onRemoveTodo.emit(uid);
  }
}
