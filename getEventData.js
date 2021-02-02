const eventData = require('./eventData.json');

function findEventData(eventName) { 
    foundData = eventData.filter(element => {
        if(element.EventName == eventName) {
            return element;
        }
    });
    return foundData;
}
module.exports =  {
    findEventData
}