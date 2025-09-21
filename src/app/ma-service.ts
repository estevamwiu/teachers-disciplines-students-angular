import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matter } from './matter';

@Injectable({
  providedIn: 'root'
})
export class MaService {
  apiUrl = 'http://localhost:3000/matters';
  
  constructor(private http: HttpClient) { }
    getAllMatter(): Observable<Matter[]> {
      return this.http.get<Matter[]>(this.apiUrl);
    }

    saveMatter(ma: Matter): Observable<Matter> {
      return this.http.post<Matter>(this.apiUrl, ma);
    }
}
