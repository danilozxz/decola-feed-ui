import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private apiUrl = 'http://localhost:8080/posts';
  private apiUrl = 'https://desafio-deploy-api-avanade-production.up.railway.app/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, post);
  }
}
