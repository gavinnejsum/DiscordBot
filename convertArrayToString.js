function ArgumentToString(array) { 
    var retString= ""; 
    console.log(retString.length);
    array.forEach(element => {
        if(retString.length == 0) {
        retString= element;
        }
        else { 
            retString+= " "+element; 
        }
    });
    return retString;
}

module.exports= {
    ArgumentToString
}


