# Download File Returned from API with `file-saver`

## Service

```
public downloadFile(id: string): Observable<ArrayBuffer> {
  return this.http.get<ArrayBuffer>(`${this.endpoint}/${id}`, {
    responseType: 'arraybuffer' as 'json'
  });
}
```

## Template

```
<span (click)="downloadFile(file.id, file.name)">
  [download]
</span>
```

## Component

```
import { saveAs } from 'file-saver';

...

public downloadFile(id: string, filename: string): void {
  this.fileService.downloadFile(id).subscribe((source) => {
    saveAs(
      new File([source], filename)
    );
  });
}
```

> `npm i -P file-saver`