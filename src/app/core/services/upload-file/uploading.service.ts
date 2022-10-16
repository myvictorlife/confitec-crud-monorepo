import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadingService {

    private url = 'api/user';

    constructor(private httpClient: HttpClient) {}

    public uploadFormData(formData) {
        return this.httpClient.post<any>(`PUT_THE_DOMAIN_HERE/upload/`, formData);
    }

}
