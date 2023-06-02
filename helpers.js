function isEventPassed(currTime, possibleTimes) {
  for (let element = 0; element < possibleTimes.length; element += 1) {
    if (parseInt(possibleTimes[element], 10) === 0) {
      possibleTimes[element] = "5";
    } else if (parseInt(possibleTimes[element], 10) === 1) {
      possibleTimes[element] = "11";
    } else if (parseInt(possibleTimes[element], 10) === 2) {
      possibleTimes[element] = "17";
    } else if (parseInt(possibleTimes[element], 10) === 3) {
      possibleTimes[element] = "23";
    }
  }

  let returnTime = -1

  for (let index = 0; index < possibleTimes.length; index += 1) {
    if (parseInt(currTime.format('k'), 10) < parseInt(possibleTimes[index], 10)) {
      returnTime = possibleTimes[index];

      break;
    }
  }

  return returnTime;
}

function ifBigHeroic(eventName) {
  if (eventName.toLowerCase() === "officer recruit" || eventName.toLowerCase() === "ship upgrade") {
    return true;
  }

  return false;
}

module.exports = {
  isEventPassed,
  ifBigHeroic
}
