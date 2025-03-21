const eventEmitter = require('events')
// console.log(eventEmitter);
const emitter = new eventEmitter()

emitter.on('greet',(agr)=>{
    console.log(`hello`,agr.Name,agr.age);	
    
})
emitter.emit('greet',{Name:'saad ghazi',age:22})
// greet()