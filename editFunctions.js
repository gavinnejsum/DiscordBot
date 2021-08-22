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
    retString = correctName(retString); 
    //console.log(retString);
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
function placeHolderName(str) { 
    var splitString = str.split(" "); 

    for (let i = 0; i <splitString.length; i++) {
        
    }
}

function removeSpacesBetweenWords(str) {
    var splitStr = str.split(" ");
    var newStr = "";
    for (let index = 0; index < splitStr.length; index++) {
        newStr = newStr.concat(splitStr[index]);
       
    }
    return newStr;

}
function correctName(string) {
    switch (string) {
        case "upgrade ship":
        case "ship":
            return string = "ship upgrade";
        case "ship heroic":
        case "upgrade ship heroic":
        case "ship big":
        case "upgrade ship big":
        case "ship upgrade big": 
            return string = "ship upgrade heroic";
        case "ship slb":
        case "slb ship":
        case "upgrade ship slb":
        case "slb ship upgrade":
        case "ship slb upgrade":
            return string = "ship upgrade slb";
        case "recruit":
            return string ="officer recruit";
        case "recruit heroic":
        case "recruit officer heroic":
        case "heroic officer recruit":
        case "officer heroic":
            return string = "officer recruit heroic";
        case "recruit slb":
        case "recruit officer slb":
        case "slb officer recruit":
        case "slb recruit officer":
            return string = "officer recruit slb";
        case "xp":
            return string = "officer xp";
        case "xp big":
        case "xp heroic":
        case "officer xp heroic":
        case "officer heroic xp":
        case "officer big xp":
            return string= "officer xp big";
        case "xp slb":
        case "officer slb xp":
        case "slb officer xp":
        case "slb xp":
            return string = "officer xp slb";
        case "upgrade station":
        case "station":
            return string = "station upgrade";
        case "upgrade station big":
        case "station big":
        case "station big upgrade":
        case "big station upgrade":
        case "station upgrade heroic":
        case "upgrade heroic station":
        case "heroic station upgrade":
            return string = "station upgrade big"
        case "station slb":
        case "upgrade station slb":
        case "station slb upgrade":
        case "slb station upgrade":
            return string = "station upgrade slb";
        default:
            return string; 
    }
}

module.exports = {
    ArgumentToString,
    capitalizeFirstLetter,
    removeSpacesBetweenWords,
    correctName
}


