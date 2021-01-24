
const eventData = require('./data.json');
const createEmbeddedMessages = require('./createEmbeddedMessages.js');
const dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

var currDay = new dayjs(new Date());
var startDate = dayjs('2021-01-11');
// var currDay = dayjs('2021-01-18');


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
                console.log(nextEventDay.toString());
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
                // console.log(updatedData[element].day);
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
    
    return createEmbeddedMessages.createEmbed(firstEventFound);
}

function getTodaysEvents() {
    var dayDifference = currDay.diff(startDate, 'day') + 1; // finds daydifference to calculate current event day
    var currEventDay;
    if (dayDifference > 11) {  // if daydifference is bigger than 11 
        var currEventDay = dayDifference % 11;
    } else {
        currEventDay = dayDifference;
    }
    console.log(currEventDay);
    foundData = eventData.filter(element => {
        if (element.day == currEventDay) {
            console.log(element.day);
            return element;
        }
    });






    return foundData;
}


// console.log(getOnlyNextEvent("officer xp slb"));
module.exports = {
    getAllMatchingEvents,
    getNextEvent,
    getTodaysEvents

}

