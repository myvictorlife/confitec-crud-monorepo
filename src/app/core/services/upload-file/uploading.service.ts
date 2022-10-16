
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UploadFile } from '@confitec-core/models/upload-file.model';
import { Observable } from 'rxjs';

@Injectable()
export class UploadingService {

    location = 'uploads';

    constructor(private angularFireStorage: AngularFireStorage) {}

    imageName() {
        const newTime = Math.floor(Date.now() / 1000);
        return Math.floor(Math.random() * 20) + newTime;
    }
    async storageFile(imageData: any) {
        try {
            const imageName = this.imageName();
            return new Promise((resolve, reject) => {
                const fileName = this.location + imageName;
                const pictureRef = this.angularFireStorage.ref(fileName);
                pictureRef.put(imageData).then(() => {
                    pictureRef.getDownloadURL().subscribe((url: any) => {
                        resolve({ fileName, url } as UploadFile);
                    });
                }).catch((error) => {
                    reject(error);
                });
            });
        } catch(error) {
            console.log('Ops storageFile failed!!!', error);
        }
    }

}
