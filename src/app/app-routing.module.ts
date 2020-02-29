import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowhideComponent} from './showhide/showhide.component'
import { LoopComponent } from './loop/loop.component';
import { BindTextComponent } from './bind-text/bind-text.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';

const routes: Routes = [
  {path:"showhide", component: ShowhideComponent},
  {path:"loop", component: LoopComponent},
  {path:"text", component: BindTextComponent},
  {path:"api", component: ApiFetchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
