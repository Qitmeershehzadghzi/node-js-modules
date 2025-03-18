const path = require ('path')
console.log(__dirname);
// console.log(__filename);
let filepath  =path.join('folder','student','file.txt')
console.log(filepath);
let resolve =path.resolve(filepath)
let basename =path.basename(filepath)
let extname =path.extname(filepath)
let dirname =path.dirname(filepath)
let parse =path.parse(filepath)
let sep =path.sep(filepath)
console.log({resolve,
    basename,
extname,
dirname,
parse,
sep

});
