import { Injectable, signal, computed } from '@angular/core';

export interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private _users = signal<UserData[]>([]);
  private selectedUser = signal<UserData | null>(null);

  users$ = this._users.asReadonly();
  selectedUserId$ = this.selectedUser.asReadonly();
  user = computed(() => this._users());

  constructor() {}

  async setUsers(user: UserData[]) {
    this._users.set(user);
  }

  selectUser(user: UserData) {
    this.selectedUser.set(user);
  }

  clearUser() {
    this._users.set([]);
  }
}
