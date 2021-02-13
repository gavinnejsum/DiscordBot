
function isEventPassed(currTime, possibleTimes) {
    for (let element = 0; element < possibleTimes.length; element++) {
        if (parseInt(possibleTimes[element]) == 0) {
            possibleTimes[element] = "5";
        } if (parseInt(possibleTimes[element]) == 1) {
            possibleTimes[element] = "11";
        } if (parseInt(possibleTimes[element]) == 2) {
            possibleTimes[element] = "17";
        } if (parseInt(possibleTimes[element]) == 3) {
            possibleTimes[element] = "23";

        }
    }
    for (let index = 0; index < possibleTimes.length; index++) {
        returnTime = -1
        if (parseInt(currTime.format('k')) < parseInt(possibleTimes[index])) {
            returnTime = possibleTimes[index];
            break;
        }
    }
    return returnTime;
}

module.exports = {
    isEventPassed
}
