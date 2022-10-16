
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '@confitec-core/models/user.model';
import { environment } from '@environment';
import {
    createServiceFactory,
    SpectatorService,
    SpyObject,
} from '@ngneat/spectator';
import { of } from 'rxjs';
import { EducationService } from './education.service';

describe('EducationService', () => {
    let spectator: SpectatorService<EducationService>;
    let httpClient: SpyObject<HttpClient>;
    const createService = createServiceFactory({
        service: EducationService,
        imports: [HttpClientModule],
    });

    beforeEach(() => {
        spectator = createService();
        httpClient = spectator.inject(HttpClient);
    });

    it('should create', () => {
        expect(spectator).toBeTruthy();
    });

    it('should fetch education list', (done) => {
        const spyGet = jest.spyOn(httpClient, 'get').mockImplementation(() => of([
            {
                id: 1,
                description: 'Infantil'
            },
            {
                id: 2,
                description: 'Fundamental'
            },
            {
                id: 3,
                description: 'Médio'
            },
            {
                id: 4,
                description: 'Superior'
            }
        ]));
        spectator.service.getEducations().subscribe((users) => {
            expect(spyGet).toHaveBeenCalledWith(environment.baseURL + '/education');
            expect(users.length).toEqual(4);
            done();
        });
    });

});
