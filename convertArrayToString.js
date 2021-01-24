function ArgumentToString(array) { 
    var retString= ""; 
    array.forEach(element => {
        if(retString.length == 0) {
        retString= element;
        }
        else { 
            retString+= " "+element; 
        }
    });
    retString = retString.toLowerCase();
    // console.log(retString);
    return retString;
}

module.exports= {
    ArgumentToString
}


