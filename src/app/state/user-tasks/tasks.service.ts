import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TasksStore } from './tasks.store';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private tasksStore: TasksStore, private http: HttpClient) {}

  async fetchTasksData() {
    try {
      const response = await this.http
        .get(`https://jsonplaceholder.typicode.com/todos`)
        .toPromise();
      this.tasksStore.setTasks(response as any);
      return response as any;
    } catch (error) {
      throw error;
    } 
  }
}
