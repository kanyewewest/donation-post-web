import { Component } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: IPost[] = [];

  constructor(private postSvc: PostService) {

  }

  ngOnInit() {
    this.postSvc.getPosts()
      .subscribe(
        res => this.posts = res,
        err => this.fetchFailed(err)
      )
  }

  fetchFailed(err) {
    //TODO: handle error
    console.log(err);
  }
}
