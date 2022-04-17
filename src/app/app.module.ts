import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavComponent } from './shared/nav/nav.component';
import { ModelsComponent } from './models/models.component';
import { ButtonComponent } from './button/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    ProfileComponent,
    NavComponent,
    ModelsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
