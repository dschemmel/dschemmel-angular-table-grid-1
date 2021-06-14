import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
Renderer2,
  ViewChild
} from '@angular/core';

declare var window: Window;

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.scss']
})
export class HelloComponent implements AfterViewInit, OnDestroy {
  @ViewChild('list') list?: ElementRef<HTMLUListElement>;

  // @ts-ignore
  private readonly observer = new window.ResizeObserver(entries => {
    const offsetWidth = entries[0].borderBoxSize[0].inlineSize;
    const clientWidth = entries[0].contentBoxSize[0].inlineSize;
    this.element.nativeElement.style.setProperty('--scrollbarWidth', `${offsetWidth - clientWidth}px`);

    if (this.renderer && offsetWidth < 1500) {
      this.renderer.addClass(this.element.nativeElement, 'small');
      console.log(`%csmall: ${offsetWidth}`, 'color: whiet;')
    }
    else {
      this.renderer.removeClass(this.element.nativeElement, 'small');
      console.log(`%cwide: ${offsetWidth}`, 'color: whiet;')
    }
  });

  constructor(private readonly element: ElementRef<HTMLBaseElement>, private readonly renderer: Renderer2) {}

  ngAfterViewInit() {
    this.observer.observe(this.list!.nativeElement);
  }

  ngOnDestroy() {
    this.observer.unobserve(this.list!.nativeElement);
  }

  Columns = Array(12)
    .fill(0)
    .map((_, i) => i + 1);

  Data = [
    {
      d1: 21025,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 11:13:46',
      d8: 'Kartenproduktion V-22',
      d9: 'List [EXCEL]',
      d13: [
        { d1: 21139, d2: '1, Tageskarte (Vorverkauf)', d3: 'url1' },
        { d1: 21140, d2: '1, Tageskarte (Vorverkauf)', d3: 'url1' }
      ]
    },
    {
      d1: 21024,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:56',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi',
      d13: [{ d1: 21141, d2: '1, Tageskarte (Vorverkauf)', d3: 'url1' }]
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    },
    {
      d1: 21023,
      d2: 'SCHEMMEL',
      d3: 11999000,
      d4: 'Produziert',
      d5: 'Fertig',
      d6: true,
      d7: '2021-05-29 09:18:46',
      d8: 'Kartenproduktion V-22',
      d9: 'PDF-Multi'
    }
  ];
}
