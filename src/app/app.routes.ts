import { Routes } from '@angular/router';
import { UserList } from './features/user-list/user-list';
import { TaskList } from './features/task-list/task-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserList
  },
  {
    path: 'to-do',
    component: TaskList
  }
];