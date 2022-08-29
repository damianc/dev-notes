# Composite

Examples:
- [HTML Nodes](#example-1-html-nodes)
- [Files and Folders](#example-2-files-and-folders)

## Example 1: HTML Nodes

* use:

```
const article = new MarkupElement('article');
let articleHeader, articleSection, sectionHeader, sectionParagraph; 


article.append(articleHeader = new MarkupElement('h1'));
article.append(articleSection = new MarkupElement('section'));

articleHeader.append(new MarkupText('Post Title'));
articleSection.append(sectionHeader = new MarkupElement('h2'));
articleSection.append(sectionParagraph = new MarkupElement('p'));

sectionHeader.append(new MarkupText('Section 1'));
sectionParagraph.append(new MarkupText('Line 1.'));
sectionParagraph.append(new MarkupText('Line 2.'));


console.log(
    article.markup()
);

/*
<article>
  <h1>
    Post Title
  </h1>
  <section>
    <h2>
      Section 1
    </h2>
    <p>
      Line 1.
      Line 2.
    </p>
  </section>
</article>
*/
```

* Components - `MarkupElement` and `MarkupText`:

```
class HTMLNode {
    children: HTMLNode[] = [];

    constructor(public name: string) {}

    append(node: HTMLNode): void {
        this.children.push(node);
    }

    markup(): string {
        const markup = new MarkupBearer('');

        if (this instanceof MarkupText) {
            markup.add(this.name);
        } else if (this instanceof MarkupElement) {
            markup.add('<' + this.name + '>');
            this.listMarkup(markup);
            markup.add('</' + this.name + '>');
        }

        return markup.markup;
    }

    listMarkup(markup: MarkupBearer, ind = '\t'): void {
        if (this.children.length) {
            this.children.forEach(ch => {
                if (ch instanceof MarkupText) {
                    markup.add(ind + ch);
                } else if (ch instanceof MarkupElement) {
                    markup.add(ind + '<' + ch + '>');
                    ch.listMarkup(markup, ind + '\t');
                    markup.add(ind + '</' + ch + '>');
                }
            });
        }
    }

    toString(): string {
        return this.name;
    }
}

class MarkupElement extends HTMLNode {}
class MarkupText extends HTMLNode {}

class MarkupBearer {
    constructor(public markup: string) {}

    add(extraMarkup: string) {
        this.markup += extraMarkup + '\n';
    }
}
```

## Example 2: Files and Folders

* use:

```
const folderProject = new RemoteFolder('project');

const folderAssets = new RemoteFolder('assets');
folderProject.append(folderAssets);
folderProject.append(new RemoteFile('index.html'));

const folderJS = new RemoteFolder('js');
folderAssets.append(folderJS);
folderJS.append(new RemoteFile('app.js'));
folderJS.append(new RemoteFile('utils.js'));

const folderCSS = new RemoteFolder('css');
folderAssets.append(folderCSS);
folderCSS.append(new RemoteFile('style.css'));


folderProject.view();

/*
project/
  |-- assets/
    |-- js/
      |-- app.js
      |-- utils.js
    |-- css/
      |-- style.css
  |-- index.html
*/


folderJS.view();

/*
js/
  |-- app.js
  |-- utils.js
*/
```

* Components - `RemoteFile` and `RemoteFolder`:

```
class RemoteDataContainer {
    children: RemoteDataContainer[] = [];

    constructor(public name: string) {}

    append(container: RemoteDataContainer): void {
        this.children.push(container);
    }

    toString(): string {
        return this.name;
    }

    listContent(tree: any, ind = '\t'): void {
        if (this.children.length) {
            this.children.forEach(ch => {
                tree.path += '\n' + ind + '|-- ' + ch;
                ch.listContent(tree, ind + '\t');
            });
        }
    }

    view(): void {
        const tree = { path: '' + this };
        this.listContent(tree);
        console.log(tree.path);
    }
}

class RemoteFile extends RemoteDataContainer {
    append(container: RemoteDataContainer): void {}
    listContent(): void {}
}

class RemoteFolder extends RemoteDataContainer {
    toString(): string {
        return this.name + '/';
    }
}
```