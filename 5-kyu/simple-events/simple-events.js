function Event(){
    const handlers=[];
   return {
       subscribe: fn=>{
           handlers.push(fn);
       },
       unsubscribe: fn=>{
           const index= handlers.indexOf(fn);
           if(index !== -1){
               handlers.splice(index,1);
           }
       },
      
       emit:(...args)=>{
           handlers.forEach(fn=>{
               fn(...args);
           })
       },
   }
}