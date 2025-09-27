import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { TeacherComponent } from './teacher-component/teacher-component';
import { MatterComponent } from './matter-component/matter-component';
import { StudentComponent } from './student-component/student-component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'matter', component: MatterComponent},
    {path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
