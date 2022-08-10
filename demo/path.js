import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Name of file: ' , path.baseName, __filename);
console.log('Name of file: ' , path.dirName, __filename);
