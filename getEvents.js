
const eventData = require('./data.json');
const createEmbeddedMessages = require('./createEmbeds.js');
const dayjs = require('dayjs');
const clone = require('rfdc')()
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

// var currDay = new dayjs(new Date());
var startDate = dayjs('2021-01-11');
// var currDay = dayjs('2021-01-12');


function getAllMatchingEvents(eventName) {

    // Find all days with a matching event name
    foundData = eventData.filter(element => {
        // Find the element where info.events[0] or [1] contains an exactly matching string 
        if (element.info.events[0].includes(eventName) || element.info.events[1].includes(eventName)) {
            return element;
        }
    });
    return foundData;
}
function getNextEvent(eventName) {
    var currDay = new dayjs(new Date());
    var dayDifference = currDay.diff(startDate, 'day') + 1; // finds daydifference to calculate current event day
    var currEventDay;
    if (dayDifference > 11) {  // if daydifference is bigger than 11 
        var currEventDay = dayDifference % 11;
    } else {
        currEventDay = dayDifference;
    }
    var firstEventFound;
    var nextEventDay;
    const foundData = getAllMatchingEvents(eventName);
    if (foundData.length > 0) {
        const updatedData = foundData.filter(element => {
            return parseInt(element.day) >= parseInt(currEventDay);
        });
        if (updatedData.length == 0) {
            for (var element = 0; element < foundData.length; element++) {
                nextEventDay = currDay.add((11 - currEventDay + parseInt(foundData[element].day)), 'day');
                if (foundData[element].info.events[0].indexOf(eventName) != -1) {
                    firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), foundData[element].info.time[foundData[element].info.events[0].indexOf(eventName)] + " UTC"];
                    break;
                } else if (foundData[element].info.events[1].indexOf(eventName) != -1) {
                    firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), foundData[element].info.time[foundData[element].info.events[1].indexOf(eventName)] + " UTC"];
                    break;
                }
            }
        } else if (updatedData.length > 0) {
            for (var element = 0; element < updatedData.length; element++) {
                nextEventDay = currDay.add((updatedData[element].day - currEventDay), 'day');
                if (updatedData[element].info.events[0].indexOf(eventName) != -1) {
                    firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), updatedData[element].info.time[updatedData[element].info.events[0].indexOf(eventName)] + " UTC"];
                    break;
                } else if (updatedData[element].info.events[1].indexOf(eventName) != -1) {
                    firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), updatedData[element].info.time[updatedData[element].info.events[1].indexOf(eventName)] + " UTC"];
                    break;
                }
            }
        }
    }
    else {
        firstEventFound = ["Event not found"];
    }
    return createEmbeddedMessages.createSingleEventEmbed(firstEventFound);
}

function getEventsEntireDay() {
    var currDay = new dayjs(new Date());
    var dayDifference = currDay.diff(startDate, 'day') + 1; // finds daydifference to calculate current event day
    var currEventDay;
    if (dayDifference > 11) {  // if daydifference is bigger than 11 
        var currEventDay = dayDifference % 11;
        if (currEventDay == 0) {
            currEventDay = 11;
        }
    } else {
        currEventDay = dayDifference;
    }
    foundData = eventData.filter(element => {
        if (element.day == currEventDay) {
            return element;
        }
    });
    return foundData; // return embed instead of array
}
getEventsEntireDay();
function getListOfEvent(eventName) {
    var currDay = new dayjs(new Date());
    var dayDifference = currDay.diff(startDate, 'day') + 1; // finds daydifference to calculate current event day
    var currEventDay;
    var combinedData;
    var nextEventDay;
    var returnString = "";
    var time;
    if (dayDifference > 11) {  // if daydifference is bigger than 11 
        var currEventDay = dayDifference % 11;
    } else {
        currEventDay = dayDifference;
    }
    foundData = getAllMatchingEvents(eventName);
    if (foundData.length > 0) {
        var updatedData = foundData.filter(element => {
            return parseInt(element.day) >= parseInt(currEventDay);
        });
        var foundDataFirstRotation = clone(foundData);
        foundDataFirstRotation.forEach(element => {
            element.day = parseInt(element.day) + 11;
        });
        var foundDataSecondRotation = clone(foundDataFirstRotation);
        foundDataSecondRotation.forEach(element => {
            element.day = parseInt(element.day) + 11;
        });
        foundDataAllRotation = foundDataFirstRotation.concat(foundDataSecondRotation);
        combinedData = updatedData.concat(foundDataAllRotation);
    }
    if (combinedData != null) {
        for (let element = 0; element < combinedData.length; element++) {
            nextEventDay = currDay.add((combinedData[element].day - currEventDay), 'day');
            if (combinedData[element].info.events[0].indexOf(eventName) != -1) {
                if (returnString.length == 0) {
                    returnString += nextEventDay.format('MMMM Do YYYY') + " At: " + combinedData[element].info.time[combinedData[element].info.events[0].indexOf(eventName)];
                } else {
                    returnString += "\n" + nextEventDay.format('MMMM Do YYYY') + " At: " + combinedData[element].info.time[combinedData[element].info.events[0].indexOf(eventName)];
                }
            } else if (combinedData[element].info.events[1].indexOf(eventName) != -1) {
                if (returnString.length == 0) {
                    returnString += nextEventDay.format('MMMM Do YYYY') + " At:" + combinedData[element].info.time[combinedData[element].info.events[1].indexOf(eventName)];
                } else {
                    returnString += "\n" + nextEventDay.format('MMMM Do YYYY') + " At:" + combinedData[element].info.time[combinedData[element].info.events[1].indexOf(eventName)];
                }
            }
        }
        embed = createEmbeddedMessages.createMultipleNextEventEmbed([eventName, returnString]);
        return embed;
    }
}

module.exports = {
    getAllMatchingEvents,
    getNextEvent,
    getEventsEntireDay,
    getListOfEvent

}

