import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Teacher } from './teacher/teacher';
import { Subjects } from './subjects/subjects';

const routes: Routes = [
    {path: '', component: Home},
    {path: 'teacher', component: Teacher},
    {path: 'subjects', component: Subjects}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
