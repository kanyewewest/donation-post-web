import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFlip]'
})
export class FlipDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('Flip directive works!');
  }
  ngAfterViewInit(): void {
    this.toggle();
  }

  toggle() {
    let domRect: DOMRect = this.el.nativeElement.getBoundingClientRect();
    this.renderer.addClass(this.el.nativeElement, 'red');
  }
}
