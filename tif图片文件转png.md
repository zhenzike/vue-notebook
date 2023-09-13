```js
//首先这里需要npm包tiff.js  ,接受的参数为 上传文件时的blob路径，和文件名，返回tif文件转换后的png图片
async tiffToPngFile(url, filename) {
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    Tiff.initialize({ TOTAL_MEMORY: 100 * 1024 * 1024 });
    const tiff = new Tiff({ buffer })
    const canvas = document.createElement('canvas');
    canvas.width = tiff.width();
    canvas.height = tiff.height();
    const ctx = canvas.getContext('2d');
    tiff.setDirectory(0);
    ctx.drawImage(tiff.toCanvas(), 0, 0);
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            const file = new File([blob], filename, { type: "image/png" });
            resolve(file);
        }, "image/png");
    });
},
```

