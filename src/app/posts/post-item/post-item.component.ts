import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() hasImage: boolean = false;
  @Input() lineClip: number = 1;

  constructor() { }

  get txtLineClipClass(): string {
    return `txt-clip-${this.lineClip}`;
  }

  ngOnInit(): void {
  }

}
