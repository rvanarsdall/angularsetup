import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowhideComponent } from './showhide/showhide.component';
import { LoopComponent } from './loop/loop.component';
import { BindTextComponent } from './bind-text/bind-text.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowhideComponent,
    LoopComponent,
    BindTextComponent,
    ApiFetchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
