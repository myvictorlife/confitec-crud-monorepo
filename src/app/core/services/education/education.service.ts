import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '@confitec-core/models/education.model';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class EducationService {

    constructor(private httpClient: HttpClient) {}

    getEducations(): Observable<Education[]> {
        return this.httpClient.get<Education[]>('https://run.mocky.io/v3/bf33565f-7802-48ab-8330-e29e41f3eea3');
    }

}
