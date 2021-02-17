# Download Textarea Content with `URL.createObjectURL()`

```
const editor = document.getElementById('editor');
const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  downloadFile('document.txt');
});

function downloadFile(filename) {
  const textFile = new Blob([editor.value], {
    type: 'text/plain'
  });
  const objectUrl = URL.createObjectURL(textFile);
  
  const synthLink = document.createElement('a');
  synthLink.download = filename;
  synthLink.href = objectUrl;
  synthLink.click();
  
  URL.revokeObjectURL(objectUrl);
}
```