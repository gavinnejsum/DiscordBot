const helpers = require('./helpers.js');
const eventData = require('./data.json');
const createEmbeddedMessages = require('./createEmbeds.js');
const clone = require('rfdc')()
const dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

// var testDay = new dayjs(new Date());
// var testDay = dayjs('2021-02-04').hour(20);
// getNextEvent("ship upgrade", testDay);
var startDate = dayjs('2021-01-11');

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
function getNextEvent(eventName, currDay) {
    currDayInGMT = currDay.utc();
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
            firstEventFound = lastDayScenario(foundData, currDayInGMT, eventName, currEventDay, nextEventDay);
            // ----------------------------------------------------------------------------------------------------------------
        } else if (updatedData.length > 0) {
            for (var element = 0; element < updatedData.length; element++) {
                nextEventDay = currDayInGMT.add((updatedData[element].day - currEventDay), 'day');
                if (updatedData[element].info.events[0].indexOf(eventName) != -1) {
                    var eventTimes = [];
                    if (currEventDay == parseInt(updatedData[element].day)) {
                        for (let index = 0; index < updatedData[element].info.events[0].length; index++) {
                            if (updatedData[element].info.events[0][index] == eventName) {
                                eventTimes.push(index);
                            }
                        }
                        nextEventTime = helpers.isEventPassed(currDayInGMT, eventTimes);
                        if (nextEventTime != -1) {
                            firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), nextEventTime + ":00 "];
                            break;
                        }
                    } else {
                        firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), updatedData[element].info.time[updatedData[element].info.events[0].indexOf(eventName)]];
                        break;
                    }
                    // ----------------------------------------------------------------------------------------------------------------
                } else if (updatedData[element].info.events[1].indexOf(eventName) != -1) {
                    var eventTimes = [];
                    if (currEventDay == parseInt(updatedData[element].day)) {
                        for (let index = 0; index < updatedData[element].info.events[1].length; index++) {
                            if (updatedData[element].info.events[1][index] == eventName) {
                                eventTimes.push(index);
                            }
                        }
                        nextEventTime = helpers.isEventPassed(currDayInGMT, eventTimes);
                        if (nextEventTime != -1) {
                            firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), nextEventTime + ":00 "];
                            break;
                        }
                    } else {
                        firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), updatedData[element].info.time[updatedData[element].info.events[1].indexOf(eventName)]];
                        break;
                    }
                }
            }
            if (firstEventFound == undefined) {
                firstEventFound = lastDayScenario(foundData, currDayInGMT, eventName, currEventDay, nextEventDay);
            }
        }
        else {
            firstEventFound = ["Event not found"];
        }
        return createEmbeddedMessages.createSingleEventEmbed(firstEventFound, currDay);
    }
}
function lastDayScenario(foundData, currDay, eventName, currEventDay, nextEventDay) {
    var firstEventFound;

    for (var element = 0; element < foundData.length; element++) {
        nextEventDay = currDay.add((11 - currEventDay + parseInt(foundData[element].day)), 'day');
        if (foundData[element].info.events[0].indexOf(eventName) != -1) {
            firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), foundData[element].info.time[foundData[element].info.events[0].indexOf(eventName)]];
            break;
            // ----------------------------------------------------------------------------------------------------------------
        } else if (foundData[element].info.events[1].indexOf(eventName) != -1) {
            firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), foundData[element].info.time[foundData[element].info.events[1].indexOf(eventName)]];
            break;
        }
    }
    return firstEventFound;
}
function getEventsEntireDay(currDay) {

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
function getListOfEvent(eventName, currDay) {

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
                if (combinedData[element].info.events[0].indexOf(eventName) != -1) {

                    for (let index = 0; index < combinedData[element].info.events[0].length; index++) {

                        if (combinedData[element].info.events[0][index] == eventName) {
                            if (returnString.length == 0) {
                                returnString += nextEventDay.format('MMMM Do YYYY') + " At: " + combinedData[element].info.time[index];
                            } else {
                                returnString += "\n" + nextEventDay.format('MMMM Do YYYY') + " At: " + combinedData[element].info.time[index];
                            }
                        }
                    }
                }
            } else if (combinedData[element].info.events[1].indexOf(eventName) != -1) {
                for (let index = 0; index < combinedData[element].info.events[1].length; index++) {
                    if (combinedData[element].info.events[1][index] == eventName) {
                        if (returnString.length == 0) {
                            returnString += nextEventDay.format('MMMM Do YYYY') + " At: " + combinedData[element].info.time[index];
                        } else {
                            returnString += "\n" + nextEventDay.format('MMMM Do YYYY') + " At: " + combinedData[element].info.time[index];
                            if(returnString.length > 200) {
                                console.log("test")
                                break; 
                            }
                        }
                        
                    }
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

