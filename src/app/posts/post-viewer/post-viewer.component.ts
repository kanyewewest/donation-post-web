import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.scss']
})
export class PostViewerComponent implements OnInit {

  page: number = 1;
  pagesN: number = 0;
  imgArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  mutatedImgArray: number[][] = [];
  //0 left 1 right
  btnStatus: Array<boolean> = [false, false];
  percentageTranslate: number = 0;

  constructor() { }

  translatePage(direction: 'left' | 'right') {
    let _direction = direction === 'left' ? 1 : -1;
    this.percentageTranslate += _direction * 100;
  }

  ngOnInit(): void {
    if (this.imgArray.length !== 0) {
      this.pagesN = Math.ceil(this.imgArray.length / 3);
      while (this.imgArray.length > 0) {
        this.mutatedImgArray.push(this.imgArray.splice(0, this.pagesN));
      }

      this.checkButtons();
    }
  }

  changePage(direction: 'left' | 'right') {
    if (this.pagesN !== 0) {
      if (direction === 'left' && this.btnStatus[0] === true) {
        --this.page;
        this.translatePage('left');
      } else if (direction === 'right' && this.btnStatus[1] === true) {
        ++this.page;
        this.translatePage('right');
      }
      this.checkButtons();
    }
  }

  checkButtons() {
    this.btnStatus[0] = this.page === 1 ? false : true;
    this.btnStatus[1] = this.page === this.pagesN ? false : true;
  }
}
