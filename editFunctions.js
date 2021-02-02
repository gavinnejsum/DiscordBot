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

    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        if (splitString[i].includes("Slb")) {
            splitString[i] = "SLB";
        } else if(splitString[i].includes("Xp")) { 
            splitString[i] = "XP";

        }
    }

    return splitString.join(" ");
}
console.log(capitalizeFirstLetter("officer xp slb"))
function removeSpacesBetweenWords(str) {
    var splitStr = str.split(" ");
    var newStr = "";
    for (let index = 0; index < splitStr.length; index++) {
        newStr = newStr.concat(splitStr[index]);
       
    }
    return newStr;
}

module.exports = {
    ArgumentToString,
    capitalizeFirstLetter,
    removeSpacesBetweenWords
}


