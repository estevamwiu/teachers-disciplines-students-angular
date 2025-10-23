import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Study } from './study';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = 'http://localhost:3000/students';
  
  constructor(private http: HttpClient) { }

  getAllStudent(): Observable<Study[]> {
    return this.http.get<Study[]>(this.apiUrl);
  }

  save(study: Study): Observable<Study> {
    return this.http.post<Study>(this.apiUrl, study);
  }

  delete(study: Study): Observable<void> { 
    return this.http.delete<void>(`${this.apiUrl}/${study.id}`);
  }

  update(study: Study): Observable<Study> { 
    return this.http.put<Study>(`${this.apiUrl}/${study.id}`, study);
  }
}