
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
        imports: [HttpClientModule],
    });

    beforeEach(() => {
        spectator = createService();
        httpClient = spectator.inject(HttpClient);
    });

    it('should create', () => {
        expect(spectator).toBeTruthy();
    });
});
