import { computed, Injectable, signal } from '@angular/core';
import { UserStore } from '../users/user.store';

export interface TaskData {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TasksStore {
  private _tasks = signal<TaskData[]>([]);
  tasks = computed(() => this._tasks());

  constructor(private userStore: UserStore) {}

  async setTasks(tasks: TaskData[]) {
      this._tasks.set(tasks);
    }

    async addTask(task: TaskData) {
      const currentTasks = this._tasks();
      const newTask = {
        ...task,
        id: currentTasks.length + 1, 
      };
      this._tasks.set([...currentTasks, newTask]);
    }
}
