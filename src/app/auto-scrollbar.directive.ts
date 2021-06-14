import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[auto-scrollbar]'
})
export class AutoScrollbarDirective implements AfterViewInit {
  constructor(private readonly element: ElementRef<HTMLBaseElement>) {}

  ngAfterViewInit() {
    const offsetWidth = this.element.nativeElement.offsetWidth;
    console.log(`%cAutoScrollbar ${offsetWidth}`, 'color: white;');
  }
}
