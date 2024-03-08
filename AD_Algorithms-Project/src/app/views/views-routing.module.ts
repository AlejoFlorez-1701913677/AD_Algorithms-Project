import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkRawComponent } from './network-raw/network-raw.component';

const routes: Routes = [
  {
    path: "networkRaw",
    //canActivate: [AuthGuard],
    component: NetworkRawComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
