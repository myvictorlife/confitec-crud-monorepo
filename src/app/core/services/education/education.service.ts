import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '@confitec-core/models/education.model';
import { environment } from '@environment';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class EducationService {

    constructor(private httpClient: HttpClient) {}

    getEducations(): Observable<Education[]> {
        const url = environment.baseURL + '/education';
        return this.httpClient.get<Education[]>(url);
    }

}
