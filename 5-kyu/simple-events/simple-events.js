function Event(){
    const handlers=[];
    return {
        subscribe: function(fn){
            handlers.push(fn);
        },
       unsubscribe: function(fn){
            const index= handlers.indexOf(fn);
            if(index !== -1){
                handlers.splice(index,1);
            }
        },
        
        emit:function(...args){
            handlers.forEach(fn=>{
                fn(...args)
            })
        }
       
    };
}
​