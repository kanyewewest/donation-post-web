import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';
import { CountdownService } from 'src/app/core/services/countdown.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {

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

  @Input() hasImage: boolean = false;
  @Input() hasCountdown: boolean = false;
  @Input() lineClip: number = 1;

  constructor(private countdownSvc: CountdownService) { }

  get txtLineClipClass(): string {
    return `txt-clip-${this.lineClip}`;
  }
}
