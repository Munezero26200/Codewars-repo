const longest = (s1, s2)=> {
let combineStr= (s1+s2).replace(/,/g, "").toLowerCase().split("");
let uniqueChar= new Set(combineStr);
let finalStr= [...uniqueChar].sort().join("");
return finalStr;
}