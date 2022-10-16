
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
    declarations: [
        FileUploadComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        FileUploadComponent
    ]
})
export class ComponentsModule { }
