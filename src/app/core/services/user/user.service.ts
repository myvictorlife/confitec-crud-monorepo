import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

    private url = 'api/user';

    constructor(private httpClient: HttpClient) {}

    fetchAll(): Observable<User[]> {
        return this.httpClient.get<User[]>('https://run.mocky.io/v3/f3c0322f-7ca1-4f8e-b8eb-a56ed43abead');
    }

    fetchById(id: number): Observable<User[]> {
        return this.httpClient.get<User[]>('https://run.mocky.io/v3/f3c0322f-7ca1-4f8e-b8eb-a56ed43abead');
    }

    update(user: User): Observable<User> {
        return this.httpClient.put<User>('https://run.mocky.io/v3/f3c0322f-7ca1-4f8e-b8eb-a56ed43abead', user);
    }

    delete(user: User): Observable<User> {
        return this.httpClient.delete<User>('https://run.mocky.io/v3/f3c0322f-7ca1-4f8e-b8eb-a56ed43abead');
    }

}
