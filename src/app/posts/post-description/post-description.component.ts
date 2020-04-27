import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';

import { CountdownService } from 'src/app/core/services/countdown.service';
@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent {

  _post: IPost;
  //Observable, returns a string
  countdownExpiration$;

  @Input() set post(val: IPost) {
    this._post = val;
    if (this._post.dateExpiration) {
      this.countdownExpiration$ = this.countdownSvc.getCountdown(this._post.dateExpiration);
    }
  }

  get post(): IPost {
    return this._post;
  }

  constructor(private countdownSvc: CountdownService) { }
}
