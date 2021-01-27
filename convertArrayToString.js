const { stringify } = require("querystring");

function ArgumentToString(array) {
    var retString = "";
    array.forEach(element => {
        if (retString.length == 0) {
            retString = element;
        }
        else {
            retString += " " + element;
        }
    });
    retString = retString.toLowerCase();
    // console.log(retString);
    return retString;
}

function capitalizeFirstLetter(str) {
    var splitString = str.split(" ");

    for(let i = 0; i<splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        if(splitString[i] == "Slb") {
            splitString[i] = "SLB"; 
        }
    }

    return splitString.join(" ");
}

module.exports = {
    ArgumentToString,
    capitalizeFirstLetter
}


