import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

    private url = 'api/user';

    constructor(private httpClient: HttpClient) {}

    fetchAll(): Observable<User[]> {
        return this.httpClient.get<User[]>('https://run.mocky.io/v3/4487097c-75a6-4eaa-bbbc-d36fed452614');
    }

    addUser(user: User): Observable<User> {
        return this.httpClient.post<User>('https://run.mocky.io/v3/494a2650-db60-4c75-89ab-778ff9b02035', user);
    }

    update(user: User): Observable<User> {
        return this.httpClient.put<User>('https://run.mocky.io/v3/6e912d03-7882-446a-a0c1-6117d8faca1d', user);
    }

    delete(user: User): Observable<User> {
        return this.httpClient.delete<User>('https://run.mocky.io/v3/6e912d03-7882-446a-a0c1-6117d8faca1d');
    }

}
