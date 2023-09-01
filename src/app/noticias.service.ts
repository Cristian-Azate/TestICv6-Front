import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiUrl = 'http://localhost:7355/api/Noticias'; 

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createNews(news: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, news);
  }
}