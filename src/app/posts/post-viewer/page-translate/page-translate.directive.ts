import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPageTranslate]'
})
export class PageTranslateDirective {
  @Input()
  public set translate(percentage: number) {
    this.setTranslateStyle(percentage);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  setTranslateStyle(percentage: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(${percentage}%)`);
  }
}
