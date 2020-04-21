import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: IPost;
  @Input() hasImage: boolean = false;
  @Input() lineClip: number = 1;

  constructor() { }

  get txtLineClipClass(): string {
    return `txt-clip-${this.lineClip}`;
  }

  ngOnInit(): void {
  }
}
