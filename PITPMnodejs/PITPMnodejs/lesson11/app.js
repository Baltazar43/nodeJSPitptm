const fs = require('fs');

let writeableStream = fs.createWriteStream('hello1.txt');
writeableStream.write('������ ���!');
writeableStream.write(' ������ � \n');
writeableStream.end('�����');
let readableStream = fs.createReadStream(
    'hello1.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});