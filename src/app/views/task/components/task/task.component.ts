import { Component } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory.interface';
import { IToDo } from '../../models/IToDo.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  task!: ICategory[];
  selectedCategory: string = "ALL";
  nameTodo = '';
  todos: IToDo[] = [];
  filteredTodos: IToDo[] = [];

  constructor(private serviceToDo$: TaskService) { }

  ngOnInit() {
    this.serviceToDo$.getAll().subscribe((res: IToDo[]) => {
      this.todos = res;
      this.filteredTodos = this.todos;
    });

    this.task = [
      { name: 'All', description: 'ALL' },
      { name: 'To Do', description: 'TD' },
      { name: 'Done', description: 'DONE' }
    ];
  }

  ngOnChanges() {
    this.filterTodos();
  }

  filterTodos() {
    if (this.selectedCategory === 'ALL') {
      this.filteredTodos = this.todos;
    } else if (this.selectedCategory === 'TD') {
      this.filteredTodos = this.todos.filter(todo => !todo.isCompleted);
    } else if (this.selectedCategory === 'DONE') {
      this.filteredTodos = this.todos.filter(todo => todo.isCompleted);
    }
  }

  click(): void {
    this.serviceToDo$.add({ title: this.nameTodo, description: '', isCompleted: false })
      .subscribe((newTodo) => {
        this.todos.push(newTodo);
        this.filterTodos();
      });
    this.nameTodo = '';
  }

  borrar(id: number) {
    this.serviceToDo$.delete(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.filterTodos();
    });
  }

  updateStatus(item: IToDo): void {
    item.isCompleted = !item.isCompleted;
    this.serviceToDo$.update(item).subscribe(() => {
      this.filterTodos();
    });
  }
}
