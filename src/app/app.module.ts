import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavComponent } from './shared/nav/nav.component';
<<<<<<< HEAD
import { ModelsComponent } from './models/models.component';
import { ButtonComponent } from './button/button/button.component';

=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostcardComponent } from './pages/post/postcard/postcard.component';
import { PostlistComponent } from './pages/post/postlist/postlist.component';
>>>>>>> 21bdb41ae0d8d952005b60a31e7e722b4110aeba

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    ProfileComponent,
    NavComponent,
<<<<<<< HEAD
    ModelsComponent,
    ButtonComponent
=======
    PostcardComponent,
    PostlistComponent
>>>>>>> 21bdb41ae0d8d952005b60a31e7e722b4110aeba
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
