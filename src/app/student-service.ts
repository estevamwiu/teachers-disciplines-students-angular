import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Study } from './study'; // Import correto

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = 'http://localhost:3000/students'; // Ou ajuste para 'studies' se for o caso
  
  constructor(private http: HttpClient) { }

  getAllStudent(): Observable<Study[]> { // Mudou para Study[]
    return this.http.get<Study[]>(this.apiUrl);
  }

  saveStudent(study: Study): Observable<Study> { // Mudou para study: Study
    return this.http.post<Study>(this.apiUrl, study);
  }

  delete(study: Study): Observable<void> { // Mudou para study: Study
    return this.http.delete<void>(`${this.apiUrl}/${study.id}`);
  }

  update(study: Study): Observable<Study> { // Mudou para study: Study
    return this.http.put<Study>(`${this.apiUrl}/${study.id}`, study);
  }
}