# `Renderer2`

```
abstract class Renderer2 {
  abstract data: Record<string, any>;
  destroyNode: ((node: any) => void) | null;
  
  abstract destroy(): void;
  abstract createElement(name: string, namespace?: string): any;
  abstract createComment(value: string): any;
  abstract createText(value: string): any;
  abstract appendChild(parent: any, newChild: any): void;
  abstract insertBefore(parent: any, newChild: any, refChild: any, isMove?: boolean): void;
  abstract removeChild(parent: any, oldChild: any, isHostElement?: boolean): void;
  abstract selectRootElement(selectorOrNode: any, preserveContent?: boolean): any;
  abstract parentNode(node: any): any;
  abstract nextSibling(node: any): any;
  abstract setAttribute(el: any, name: string, value: string, namespace?: string): void;
  abstract removeAttribute(el: any, name: string, namespace?: string): void;
  abstract addClass(el: any, name: string): void;
  abstract removeClass(el: any, name: string): void;
  abstract setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void;
  abstract removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void;
  abstract setProperty(el: any, name: string, value: any): void;
  abstract setValue(node: any, value: string): void;
  abstract listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => void;
}
```

## `RendererStyleFlags2` [enum]

```
Important: 1 << 0
DashCase: 1 << 1
```

## Example: Click Counter Directive

```
@Directive({
  selector: '[appClickCounter]'
})
export class ClickCounterDirective implements OnInit {
  public count = 0;
  public clickListener;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.clickListener = this.renderer.listen(
      this.el.nativeElement, 'click', () => this.count++
    );
  }

  ngOnDestroy() {
    this.clickListener.unsubscribe();
  }
}
```