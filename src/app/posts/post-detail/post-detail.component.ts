import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { IPost } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post: IPost;
  constructor(private route: ActivatedRoute, private postSvc: PostService) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.postSvc.getPost(id).subscribe(
      res => this.post = res,
      err => this.fetchFailed(err)
    );
  }

  fetchFailed(err) {
    //TODO: handle error
    console.log(err);
  }
}
