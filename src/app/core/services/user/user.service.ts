import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {}

    fetchAll(): Observable<User[]> {
        const url = environment.baseURL + '/user';
        return this.httpClient.get<User[]>(url);
    }

    addUser(user: User): Observable<User> {
        const url = environment.baseURL + '/user';
        return this.httpClient.post<User>(url, user);
    }

    update(user: User): Observable<User> {
        const url = environment.baseURL + '/user';
        return this.httpClient.put<User>(url, user);
    }

    delete(user: User): Observable<User> {
        const url = environment.baseURL + '/user/' + user.id;
        return this.httpClient.delete<User>(url);
    }

}
