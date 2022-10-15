import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCrudPageRoutingModule } from './user-crud-routing.module';

import { UserCrudPage } from './user-crud.page';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditModalComponent } from './modals/user-edit-modal/user-edit-modal.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserCrudPageRoutingModule
  ],
  declarations: [
    UserCrudPage,
    UserCardComponent,
    UserListComponent,
    UserEditModalComponent,
    UserEditComponent
  ]
})
export class UserCrudPageModule {}
