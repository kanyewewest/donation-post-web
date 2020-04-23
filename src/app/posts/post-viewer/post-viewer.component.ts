import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.scss']
})
export class PostViewerComponent {

  page: number = 1;
  pagesN: number = 0;
  _mutatedImgArray: string[][];
  @Input()
  set imgArray(imgs: string[]) {
    this.pagesN = Math.ceil(imgs.length / 3);

    //split imgs into groups of 3
    this._mutatedImgArray = imgs.map(function (e, i) {
      return i % 3 === 0 ? imgs.slice(i, i + 3) : null;
    }).filter(function (e) { return e; });
    this.checkButtons();
  }

  get mutatedImgArray() {
    return this._mutatedImgArray;
  }

  //0 left 1 right
  btnStatus: Array<boolean> = [false, false];
  percentageTranslate: number = 0;

  constructor() {

  }

  translatePage(direction: 'left' | 'right') {
    let _direction = direction === 'left' ? 1 : -1;
    this.percentageTranslate += _direction * 100;
  }

  ngOnInit() {
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
