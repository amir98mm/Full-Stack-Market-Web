import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedComponent } from './components/logged/logged.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MycartComponent } from './components/mycart/mycart.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileContentComponent,
    ProfileHeaderComponent,
    ProfileMenuComponent,
    ProfileSettingComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LoggedComponent,
    MycartComponent,
    CartComponent,
    SignupComponent
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
