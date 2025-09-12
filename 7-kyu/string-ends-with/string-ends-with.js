const solution=(str, ending)=>{
    str= str.toLowerCase();
    ending= ending.toLowerCase();
 if(ending==="")return true;
 if(ending.length> str.length)return false;
 if(str===ending)return true;
 return str.endsWith(ending);
 
}