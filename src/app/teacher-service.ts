import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teach } from './teach';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiUrl = 'http://localhost:3000/teachers';
  
  constructor(private http: HttpClient) { }
    getAllTeachers(): Observable<Teach[]> {
      return this.http.get<Teach[]>(this.apiUrl);
    }

    saveTeacher(teacher: Teach): Observable<Teach> {
      return this.http.post<Teach>(this.apiUrl, teacher);
    }
}