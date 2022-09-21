import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  async getUsers() {
    try {
      return await lastValueFrom(
        this.httpClient.get<User[]>(environment.API_USERS_URL)
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateUser(user: User) {
    try {
      await lastValueFrom(
        this.httpClient.put(environment.API_USERS_URL, user, {
          params: { id: user.id.toString() },
        })
      );
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async addUser(user: User) {
    try {
      const responseValue = await lastValueFrom(
        this.httpClient.post(environment.API_USERS_URL, user)
      );
      return responseValue;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteUser(userId: number) {
    try {
      await lastValueFrom(
        this.httpClient.delete(environment.API_USERS_URL, {
          params: { id: userId.toString() },
        })
      );
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
