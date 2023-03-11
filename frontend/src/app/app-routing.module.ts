import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedComponent } from './components/logged/logged.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path:"logged",
    component:LoggedComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'content', component: ContentComponent },
      { path: 'cart', component: CartComponent }
   ],
  },
  {
    path:"profile",
    component:ProfileComponent,
    children: [
      { path: '', redirectTo:"content",pathMatch:"full" },
      { path: 'content', component: ProfileContentComponent },
      { path: 'setting', component: ProfileSettingComponent },
   ],
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
