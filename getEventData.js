const eventData = require('./eventData.json');
const officerData = require('./Commands/OfficerTool/OfficerDataTypes/officerData.json');


function findEventData(eventName) {     
    foundData = eventData.filter(element => {
        if(element.EventName == eventName) {
            return element;
        }
    });
    return foundData;
}

function findOfficerData(purpose) { 
    foundData = officerData.filter(element => {
        if(element.Name == purpose) {
            return element;
        }
    });
    return foundData;
}

module.exports =  {
    findEventData,
    findOfficerData
}