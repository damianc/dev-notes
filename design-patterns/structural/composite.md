# Composite

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