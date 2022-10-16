import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCrudPage } from './user-crud.page';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  {
    path: '',
    component: UserCrudPage
  },
  {
    path: 'new',
    component: UserNewComponent
  },
  {
    path: 'edit',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCrudPageRoutingModule {}
