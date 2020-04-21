import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postSvc: PostService) {
    this.fetchFromApi();
  }

  fetchFailed() {
    //TODO: handle error
  }

  fetchFromApi() {
    this.postSvc.getPosts()
      .subscribe(
        (res: IPost[]) => {
          this.posts = res;
        },
        err => {
          //fetchFailed();
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
  }

}
