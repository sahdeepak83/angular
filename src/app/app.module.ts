import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const appRoutes: Routes = [
  {
     path: '',
     component: UserloginComponent
  },
  {
     path: 'app-mainpage',
     component: MainpageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
