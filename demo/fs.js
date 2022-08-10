import fs from 'fs';

let content = fs.readFileSync('folder/subtext.txt', 'utf-8');
console.log(content);

node