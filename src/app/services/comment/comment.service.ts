import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // private apiUrl = 'http://localhost:8080/comments';
  private apiUrl = 'https://desafio-deploy-api-avanade-production.up.railway.app/comments';


  constructor(private http: HttpClient) {}

  getComments(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}`)
  }

  getCommentsByPostId(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      map(comments => comments.filter(comment => comment.postId === postId))
    );
  }

  addComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, comment)
  }

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
