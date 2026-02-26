import { Component, inject, signal, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksStore } from '../../state/user-tasks/tasks.store';
import { UserStore } from '../../state/users/user.store';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  loading = signal(false);
  userId!: number;

  form = this.fb.group({
    title: ['', Validators.required],
    completed: [false]
  });

  constructor(private userStore: UserStore, private tasksStore: TasksStore) {}

  ngOnInit() {
    this.userId = Number(this.userStore.selectedUserId$()?.id);
  }

  async submit() {
    if (this.form.invalid) return;
    this.loading.set(true);

    try {
      const task = {
        title: this.form.value.title!,
        completed: this.form.value.completed ?? false,
        userId: this.userId,
        id: this.tasksStore.tasks().length + 1
      };

      this.tasksStore.addTask(task);
      console.log('Adding task:', task);

    } finally {
      this.loading.set(false);
      this.close.emit();
    }
  }

  closeModal() {
    this.close.emit();
  }
}
