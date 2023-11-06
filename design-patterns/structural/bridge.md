# Bridge

## Example: Decorated Text

* use:

```
const mdRenderer = new  MarkdownRenderer();
const htmlRenderer = new  HTMLRenderer();

const boldText = new  BoldText('foo bar');
boldText.renderer = mdRenderer;

console.log(boldText.print());
// '**foo bar**'


const italicText = new  ItalicText('bar baz');
italicText.renderer = htmlRenderer;

console.log(italicText.print());
// '<i>bar baz</i>'
```

* `DecoraredText`:

```
abstract  class  DecoratedText {
  public renderer!: Renderer;
  
  constructor(public text: string) {}
  
  abstract getMarkup(): string;
  
  public print(): string {
    return  this.renderer.render(
      this.getMarkup()
    );
  }
}

class  BoldText  extends  DecoratedText {
  public getMarkup(): string {
    return  '[b]' + this.text + '[/b]';
  }
}

class  ItalicText  extends  DecoratedText {
  public getMarkup(): string {
    return  '[i]' + this.text + '[/i]';
  }
}
```

* `Renderer`:

```
abstract  class  Renderer {
  protected reBold = /\[b\](.+?)\[\/b\]/g;
  protected reItalic = /\[i\](.+?)\[\/i\]/g;
  abstract render(markup: string): string;
}
 
class  MarkdownRenderer  extends  Renderer {
  public render(markup: string): string {
    return markup
      .replace(this.reBold, '**$1**')
      .replace(this.reItalic, '_$1_');
  }
}

class  HTMLRenderer  extends  Renderer {
  public render(markup: string): string {
    return markup
      .replace(this.reBold, '<b>$1</b>')
      .replace(this.reItalic, '<i>$1</i>');
  }
}
```