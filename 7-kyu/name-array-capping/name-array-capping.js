const capMe= arrName =>{
    if(!Array.isArray(arrName) || arrName.length===0)return [];
    let result=[];
    for(let i=0; i<arrName.length; i++){
        if( typeof arrName[i] === "string"){
            let str= String(arrName[i]).trim();
            let firstChar= str[0].toUpperCase();
            let restChar= str.slice(1).toLowerCase();
            let word= firstChar + restChar;
            
            result.push(word);
        }
    }
    return result;
}