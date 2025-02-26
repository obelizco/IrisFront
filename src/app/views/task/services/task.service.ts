import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDo } from '../models/IToDo.interface';
import { HttpService } from 'src/app/core/services/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpService,) { }

  getAll(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>("/ToDo");
  }


  add(toDoItem: IToDo): Observable<IToDo> {
    return this.http.post<IToDo>("/ToDo", toDoItem);
  }

  update(toDoItem: IToDo): Observable<IToDo> {
    return this.http.put<IToDo>(`${"/ToDo"}/${toDoItem.id}`, toDoItem);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/ToDo/${id}`);
  }
}
