import { Injectable, signal } from "@angular/core";
import { UserStore } from "./user.store";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {

  constructor(private userStore: UserStore, private http: HttpClient) {}

  async fetchUsersData() {
    try {
      const response = await this.http
        .get(`https://jsonplaceholder.typicode.com/users`)
        .toPromise();
      this.userStore.setUsers(response as any);
      return response as any;
    } catch (error) {
      throw error;
    } 
  }

}
