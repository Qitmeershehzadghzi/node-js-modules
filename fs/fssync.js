// write file sync
const fs =require('fs')
const path =require('path')
const filename ='test.txt'
const filepath = path.join(__dirname, filename);
//     writefile
const writefile =fs.writeFileSync(filepath,'hello world updated','utf-8')	
console.log(
    writefile
);
// read file sync


const readfile = fs.readFileSync(filepath,'utf-8')
console.log(readfile);

// updated data
const updateddata =fs.appendFileSync(filepath,'\nupdated data','utf-8')
console.log(  updateddata);

// delete data
const deletedata =fs.unlinkSync(filepath)
console.log(deletedata);
// rename filename



const newupdatedfilename = 'updatedtest.txt';
const newfilepath = path.join(__dirname, newupdatedfilename);

// Rename ka kaam
const renamefile =fs.renameSync(filepath, newfilepath);

console.log('File renamed successfully',renamefile);
