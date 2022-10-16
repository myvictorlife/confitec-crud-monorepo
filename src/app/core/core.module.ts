
import { NgModule } from '@angular/core';
import { coreEffectsAtBootstrap } from './core.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { EducationService } from './services/education/education.service';
import { UploadingService } from './services/upload-file/uploading.service';


@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature(coreEffectsAtBootstrap),
    HttpClientModule
  ],
  providers: [
    UserService, EducationService, UploadingService
  ]
})
export class CoreModule {}
