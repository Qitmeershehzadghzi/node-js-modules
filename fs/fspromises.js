// fspromises.js
const fs  =require('fs/promises')
const path =require('path');
let  filename ='promises.txt'
const filePAth =path.join(__dirname,filename)




// readdir  by promises

let file = __dirname
fs.readdir(file)
.then((data)=>console.log(data))
.catch((err)=>console.log(err));




// // writefile by  promises
fs.writeFile(filePAth,"this is the initial data","utf-8")
.then(console.log('file created succesfully'))
.catch((err)=>console.log(err));




// // readfile by  promises
fs.readFile(filePAth,"utf-8")
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

// updated file data  by promises

fs.appendFile(filePAth,"\nthis is the updated data","utf-8")
.then(console.log('file has been updated'))
.catch((err)=>console.log(err));





// delted  file data  by promises
// fs.promises.unlink(filePAth)
// .then(console.log('file has been deleted'))
// .catch((err)=>console.log('error is include',err));








