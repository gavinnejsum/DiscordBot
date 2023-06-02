const eventData = require('./eventData.json');
const officerData = require('./Commands/OfficerTool/officerData.json');

function findEventData(eventName) {     
  const foundData = eventData.filter(element => {
    if (element.EventName === eventName) {
      return element;
    }

    return null;
  });

  return foundData;
}

function findOfficerData(purpose) { 
  const foundData = officerData.filter(element => {
    if (element.Name === purpose) {
      return element;
    }

    return null;
  });

  return foundData;
}

module.exports =  {
  findEventData,
  findOfficerData
}
