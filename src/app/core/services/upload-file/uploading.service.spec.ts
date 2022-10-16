
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {
    createServiceFactory,
    SpectatorService,
    SpyObject,
} from '@ngneat/spectator';
import { UploadingService } from './uploading.service';

describe('UplodadingService', () => {
    let spectator: SpectatorService<UploadingService>;
    let httpClient: SpyObject<HttpClient>;
    const createService = createServiceFactory({
        service: UploadingService,
        imports: [
            HttpClientModule,
            AngularFireModule.initializeApp({}),
            AngularFireDatabaseModule
        ]
    });

    beforeEach(() => {
        spectator = createService();
        httpClient = spectator.inject(HttpClient);
    });

    it('should create', () => {
        expect(spectator).toBeTruthy();
    });
});
