const eventData = require('./data.json');
const dayjs = require('dayjs');

var currDay = new dayjs(new Date())
var startDate = dayjs('2021-01-11')



function getAllDayAndTimeOfEvent(eventName) { 
   
    // Find all days with a matching event name
    foundData = eventData.filter(element => {
        // Find the element where info.events[0] or [1] contains an exactly matching string 
        if (element.info.events[0].includes(eventName) || element.info.events[1].includes(eventName)) {
            return element;
        }
    });
    return foundData;
}

function getOnlyNextEvent(eventName) { 
    console.log(eventName);
    var eventDay = currDay.diff(startDate, 'day') + 1;
    console.log(startDate.format('DD-MM-YYYY') + "\n" + currDay.format('DD-MM-YYYY'));
    console.log(eventDay);
    var firstEventFound = "";

    const foundData = getAllDayAndTimeOfEvent(eventName); 
    if (foundData.length > 0) {
        const updatedData = foundData.filter(element => {
            return parseInt(element.day) >= parseInt(eventDay);
        });
        for(var element = 0; element<updatedData.length; element++) { 
            if (updatedData[element].info.events[0].indexOf(eventName) != -1){
                // console.log("Big event found " + eventName + " in " + updatedData[element].day + " at: " + updatedData[element].info.time[updatedData[element].info.events[0].indexOf(eventName)]); 
                firstEventFound = "Big event found " + eventName + " in " + updatedData[element].day + " at: " + updatedData[element].info.time[updatedData[element].info.events[0].indexOf(eventName)];
                break;
            }
            if(updatedData[element].info.events[1].indexOf(eventName) != -1) {
                // console.log("Small event found " + eventName + " in " + updatedData[element].day + " at: " + updatedData[element].info.time[updatedData[element].info.events[1].indexOf(eventName)]); 
                firstEventFound = "Small event found " + eventName + " in " + updatedData[element].day + " at: " + updatedData[element].info.time[updatedData[element].info.events[1].indexOf(eventName)];

            }
            // console.log(updatedData[element].info.events[1]);
        }
        return firstEventFound; 
    }
}
// console.log(getOnlyNextEvent("Officer XP"));



module.exports = {
    getAllDayAndTimeOfEvent,
    getOnlyNextEvent
}
    //     updatedData.forEach(element => {
    //         if (element.info.events[0].indexOf(eventName) != -1) {
    //                 // firstEventFound= "Next event found:" + eventName + " in " + element.day + " at: " + element.info.time[element.info.events[0].indexOf(eventName)];
    //                 console.log("Big event found " + eventName + " in " + element.day + " at: " + element.info.time[element.info.events[0].indexOf(eventName)]);
                
    //         }
    //         if(element.info.events[1].indexOf(eventName) != -1) {
    //             console.log("Small event found " + eventName + " in " + element.day + " at: " + element.info.time[element.info.events[1].indexOf(eventName)]);   
    //         }
            
    //     });
    // }
    
