import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';
import { PostcardComponent } from './pages/post/postcard/postcard.component';
import { PostlistComponent } from './pages/post/postlist/postlist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  //http://localhost:4200/login
  {path:"", component: LoginComponent},

  //http://localhost:4200/register
  {path:"register", component: RegisterComponent},

  //http://localhost:4200/profile
  {path:"profile/:userId", component: ProfileComponent},
 
  //http://localhost:4200/feed
  {path:"feed", component: FeedComponent},
  
  //redirect to login?
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
