// fsAsyncawait.js
// const { error } = require('console');
const { appendFile } = require('fs');
const fs  =require('fs/promises')
const path =require('path');
let  filename ='Asyncawait.txt'
const filePAth =path.join(__dirname,filename)


let file = __dirname
// fs.promises.readdir(file)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

// const readFile = async()=>{
// try{
//  const res = await fs.promises.readdir(file)
//  console.log(res);
 
// }catch(error){
// console.log(error);

// }
// }


// readFile()



// write file by async await 


const writeFile = async ()=>{
    try{
 fs.writeFile(filePAth,'This is the initial data','utf-8')
 console.log('file write succesfully');
 
    }catch(error){
        console.log(error);
        
    }
}
writeFile()
const readfile = async ()=>{
    try{
const data = await  fs.readFile(filePAth,'utf-8')
 console.log(data);
 
    }catch(error){
        console.log(error);
        
    }
}
readfile()
const appenFile = async ()=>{
         try{
 await fs.appendFile(filePAth,'\nThis is the updated data','utf-8')
     console.log('file update succesfully');
        
        }catch(error){
            console.log(error);
            
        }
     }
     appenFile()



// unlike file 

// const unl =async ()=>{
//     try{
//         await fs.unlink(filePAth)
//         console.log('file deleted');
        
//     }catch(error){
//         console.log(error);
        
//     }
// }
// unl()