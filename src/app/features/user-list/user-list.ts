import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserStore } from '../../state/users/user.store';
import { UserService } from '../../state/users/user.service';
import { TasksStore } from '../../state/user-tasks/tasks.store';
import { TasksService } from '../../state/user-tasks/tasks.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {

  loading = false;
  expandedUserId = signal<number | null>(null);

  constructor(
    public userStore: UserStore,
    public userService: UserService,
    public tasksService: TasksService,
    public tasksStore: TasksStore,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('UserList component initialized');
    this.loading = true;
    this.userService.fetchUsersData().then((users) => {
      this.userStore.setUsers(users);
      this.loading = false;
    });
    this.tasksService.fetchTasksData().then((tasks) => {
      this.tasksStore.setTasks(tasks);
      this.loading = false;
    });
  }

  selectUser(user: any) {
    this.userStore.selectUser(user);
    this.expandedUserId.update(current =>
     current === user.id ? null : user.id
    );
    // this.router.navigate(['/to-do']);
  }

  viewTasks(){
    this.router.navigate(['/to-do']);
  }
}
