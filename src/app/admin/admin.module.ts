import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CanActivate, Permission } from '../auth/route-gurd';




const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivate],
  
    component: AdminComponent,
    children: [

      {
        path: '',
        canActivateChild: [Permission],
        children: [
          {
            path: 'create-product',
            component: CreateProductComponent,

          },

          {
            path: 'create-user',
            component: CreateUserComponent,

          },
        ]
      },
      {
        path: 'user-list',
        component: UserListComponent,

      }
    ]
  },

]

@NgModule({
  declarations: [
    AdminComponent,
    CreateProductComponent,
    CreateUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class AdminModule { }
