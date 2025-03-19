const fs  =require('fs')
const path =require('path');
let  filename ='fsasync.txt'
const filePAth =path.join(__dirname,filename)


// fsaync.js
// write file data

fs.writeFile(filePAth,"This is the initial data","utf-8",(err)=>{
if(err){
    console.error(err);
    
}
else{
    console.log('your data is saved')
}
})

// read file data
fs.readFile(filePAth,"utf-8",(err,data)=>{
    if(err){
        console.error(err);
        
    }
    else{
        console.log(data)
    }
    })

// updated file data

fs.appendFile(filePAth,"\nThis is the updated data","utf-8",(err)=>{
if(err){
    console.error(err);
    
}
else{
    console.log('your data is updated')
}
})

// delete file data


// fs.unlink(filePAth,(err)=>{
//     if(err){
//         console.error(err);
        
//     }
//     else{
//         console.log('file has been deleted')
//     }
//     })

// rename file nama

const newfilename = 'updatedfsasync.txt';
const newfilepath =path.join(__dirname,newfilename)
const renamfile =fs.rename(filePAth,newfilepath,(err)=>{
if(err){
    console.error(err);
    
}
else{
    console.log('file has been renamed')
}
})
console.log('file new name succesfull',renamfile);
