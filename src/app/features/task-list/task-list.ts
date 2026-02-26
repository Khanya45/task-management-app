import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { TasksStore } from "../../state/user-tasks/tasks.store";
import { TasksService } from "../../state/user-tasks/tasks.service";
import { UserStore } from "../../state/users/user.store";
import { TaskForm } from "../../components/task-form/task-form";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [CommonModule, TaskForm],
  templateUrl: "./task-list.html",
  styleUrl: "./task-list.css",
})
export class TaskList implements OnInit {
  private router = inject(Router);

  userStore = inject(UserStore);
  tasksService = inject(TasksService);
  tasksStore = inject(TasksStore);

  loading = signal(false);
  showTaskModal = signal(false);


  // Reactive filtered tasks
  userTask = computed(() => {
    const selectedUserId = this.userStore.selectedUserId$()?.id;
    return this.tasksStore
      .tasks()
      .filter((task) => task.userId === Number(selectedUserId));
  });

  userDetails = computed(() => {
    const selectedUserId = this.userStore.selectedUserId$()?.id;

    if (!selectedUserId) return null;

    return this.userStore.user().find((user) => user.id === selectedUserId);
  });

  async ngOnInit() {
    this.loading.set(true);

    const tasks = await this.tasksService.fetchTasksData();

    this.tasksStore.setTasks(tasks);

    this.loading.set(false);
  }


  openModal() {
    this.showTaskModal.set(true);
  }

  closeModal() {
    this.showTaskModal.set(false);
  }

  goBack() {
    this.router.navigate(["/users"]);
  }
}
