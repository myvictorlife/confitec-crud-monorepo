
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
    createServiceFactory,
    SpectatorService,
    SpyObject,
} from '@ngneat/spectator';
import { of } from 'rxjs';
import { UserService } from './user.service';

describe('UserService', () => {
    let spectator: SpectatorService<UserService>;
    let httpClient: SpyObject<HttpClient>;
    const createService = createServiceFactory({
        service: UserService,
        imports: [HttpClientModule],
    });

    beforeEach(() => {
        spectator = createService();
        httpClient = spectator.inject(HttpClient);
    });

    it('should create', () => {
        expect(spectator).toBeTruthy();
    });

    it('should fetch all users', () => {
        const spyGet = jest.spyOn(httpClient, 'get').mockImplementation(() => of([
            {
                id: 1,
                firstName: 'Victor',
                lastName: 'Barbosa',
                email: 'victor@gmail.com',
                bithDate: '1991-09-01',
                educationaId: 1,
                educationalHistory: 1
            },
            {
                id: 2,
                firstName: 'Carlos',
                lastName: 'Silva',
                email: 'carlos@gmail.com',
                bithDate: '1993-01-03',
                educationaId: 2,
                educationalHistory: 2
            }
        ]));
        spectator.service.fetchAll().subscribe((users) => {
            expect(spyGet).toHaveBeenCalledWith(
                'https://run.mocky.io/v3/441925dd-29fb-4a58-8f5c-bc3d907856ac'
            );
            expect(users.length).toEqual(1);
        });
    });

});
