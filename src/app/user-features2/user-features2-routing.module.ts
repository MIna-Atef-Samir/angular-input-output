import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFeatures2Component } from './user-features2.component';

const routes: Routes = [{ path: '', component: UserFeatures2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFeatures2RoutingModule { }
