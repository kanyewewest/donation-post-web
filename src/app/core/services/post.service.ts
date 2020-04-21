import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { IPost } from '../models/post.model';
import { dummyPosts } from '../dummies/post.dummy';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private api: ApiService) { }

  getPost(id: number): Observable<IPost> {
    return this.api.get(`/post/${id}`);
  }

  //TODO: posts filters
  getPosts(): Observable<IPost[]> {
    return new Observable<IPost[]>(sub => {
      sub.next(dummyPosts);
    }).pipe(
      tap((res) => console.log(res)),
      delay(5000)
    );
    //return this.api.get(`/post`);
  }

  postPost(post: IPost): Observable<IPost> {
    return this.api.post(`/post`, post);
  }

  putPost(id: number, post: IPost): Observable<IPost> {
    return this.api.put(`/post/${id}`, post);
  }

  delPost(id: number): Observable<any> {
    return this.api.delete(`/post/${id}`);
  }
}
