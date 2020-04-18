import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngAfterViewInit(): void {
    let domRect: DOMRect = this.el.nativeElement.getBoundingClientRect();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(document.documentElement.scrollTop);
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate3d(0,${document.documentElement.scrollTop}px,0)`);
  }

}
