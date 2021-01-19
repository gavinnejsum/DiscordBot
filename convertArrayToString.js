function ArgumentToString(array) { 
    var retString= ""; 
    console.log(retString.length);
    array.forEach(element => {
        if(retString.length=0) {
        retString= element;
        }
        else { 
            retString+= " "+element; 
        }
    });
    return retString;
}
var arr = ["Hello","There"];
console.log(stringArgument);

var strinArg = (ArgumentToString(arr));
if( strinArg== "Hello There") { 
    console.log(stringArgument);
  }
module.exports= {
    ArgumentToString
}


