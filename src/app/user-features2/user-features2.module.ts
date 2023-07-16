import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFeatures2RoutingModule } from './user-features2-routing.module';
import { UserFeatures2Component } from './user-features2.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserFeatures2Component,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserFeatures2RoutingModule
  ]
})
export class UserFeatures2Module { }
