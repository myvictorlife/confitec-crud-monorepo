import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCrudPageRoutingModule } from './user-crud-routing.module';

import { UserCrudPage } from './user-crud.page';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserNewComponent } from './user-new/user-new.component';
import { ConfitecComponentsModule } from '@confitec-components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserCrudPageRoutingModule,
    ConfitecComponentsModule
  ],
  declarations: [
    UserCrudPage,
    UserCardComponent,
    UserListComponent,
    UserEditComponent,
    UserFormComponent,
    UserNewComponent
  ]
})
export class UserCrudPageModule {}
