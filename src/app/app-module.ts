import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { TeacherComponent } from './teacher-component/teacher-component';
import { FooterComponent } from './footer-component/footer-component';
import { HomeComponent } from './home-component/home-component';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatterComponent } from './matter-component/matter-component';
import { StudentComponent } from './student-component/student-component';

@NgModule({
  declarations: [
    App,
    TeacherComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    MatterComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
