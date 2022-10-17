
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UploadFile } from '@confitec-core/models/upload-file.model';
import { User } from '@confitec-core/models/user.model';
import { environment } from '@environment';
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
    const user = {
        id: 1,
        firstName: 'Victor',
        lastName: 'Barbosa',
        email: 'victor@gmail.com',
        educationId: 1,
        historyEducation: { fileName: 'Confitec.pdf', url: 'https://location/confitec.pdf'} as UploadFile,
        dob: '1991-01-01'
    } as User;
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

    it('should fetch all users', (done) => {
        const spyGet = jest.spyOn(httpClient, 'get').mockImplementation(() => of([
            {
                id: 1,
                firstName: 'Victor',
                lastName: 'Barbosa',
                email: 'victor@gmail.com',
                dob: '1991-09-01',
                educationId: 1,
                educationalHistory: 1
            },
            {
                id: 2,
                firstName: 'Carlos',
                lastName: 'Silva',
                email: 'carlos@gmail.com',
                dob: '1993-01-03',
                educationId: 2,
                educationalHistory: 2
            }
        ]));
        spectator.service.fetchAll().subscribe((users) => {
            expect(spyGet).toHaveBeenCalledWith(
                environment.baseURL + '/user'
            );
            expect(users.length).toEqual(2);
            done();
        });
    });

    it('should add user', (done) => {
        const spyGet = jest.spyOn(httpClient, 'post').mockImplementation(() => of(user));
        spectator.service.addUser(user).subscribe((newUser) => {
            expect(spyGet).toHaveBeenCalledWith(
                environment.baseURL + '/user', newUser
            );
            expect(newUser.firstName).toEqual('Victor');
            done();
        });
    });

    it('should user update', (done) => {
        const spyGet = jest.spyOn(httpClient, 'put').mockImplementation(() => of(user));
        spectator.service.update(user).subscribe((newUser) => {
            expect(spyGet).toHaveBeenCalledWith(environment.baseURL + '/user', newUser);
            expect(newUser.firstName).toEqual('Victor');
            done();
        });
    });

    it('should user delete', (done) => {
        const spyGet = jest.spyOn(httpClient, 'delete').mockImplementation(() => of(user));
        spectator.service.delete(user).subscribe((newUser) => {
            expect(spyGet).toHaveBeenCalledWith(environment.baseURL + '/user/' + newUser.id);
            done();
        });
    });

});
