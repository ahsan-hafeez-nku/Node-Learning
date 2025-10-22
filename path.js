const path = require('path');
const file = "text/ahsan.txt";

console.log(path.basename(file));
console.log(path.dirname(file));
console.log(path.extname(file));
// console.log(path.format(file));
console.log(path.isAbsolute(file));
console.log(path.parse(file));
console.log(path.resolve('.txt', 'ahsan.txt'));

console.log(__dirname);
console.log(__filename);