const clone = require('rfdc')()
const dayjs = require('dayjs');

const advancedFormat = require('dayjs/plugin/advancedFormat');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

const helpers = require('./helpers');
const eventData = require('./data.json');
const createEmbeddedMessages = require('./createEmbeds');

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const startDate = dayjs('2021-10-05');

function getAllMatchingEvents(eventName) {
  // Find all days with a matching event name
  const foundData = eventData.filter(element => {
    // Find the element where info.events[0] or [1] contains an exactly matching string
    if (element.info.events[0].includes(eventName) || element.info.events[1].includes(eventName)) {
      return element;
    }

    return null;
  });

  return foundData;
}

function lastDayScenario(foundData, currDay, eventName, currEventDay, legacyNextEventDay) {
  let firstEventFound;

  for (let element = 0; element < foundData.length; element+=1) {
      const nextEventDay = currDay.add((11 - currEventDay + parseInt(foundData[element].day, 10)), 'day');

      if (foundData[element].info.events[0].indexOf(eventName) !== -1) {
          firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), foundData[element].info.time[foundData[element].info.events[0].indexOf(eventName)]];

          break;
      } else if (foundData[element].info.events[1].indexOf(eventName) !== -1) {
        firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), foundData[element].info.time[foundData[element].info.events[1].indexOf(eventName)]];

        break;
      }
  }

  return firstEventFound;
}

function getNextEvent(eventName, currDay) {
  const currDayInGMT = currDay.utc();
  const dayDifference = currDay.diff(startDate, 'day') + 1; // finds daydifference to calculate current event day
  let currEventDay;

  if (dayDifference > 11) {  // if daydifference is bigger than 11
    currEventDay = dayDifference % 11;

    if (currEventDay === 0) {
      currEventDay = 11;
    }
  } else {
    currEventDay = dayDifference;
  }

  let firstEventFound;
  let nextEventDay;

  const foundData = getAllMatchingEvents(eventName);

  if (foundData.length > 0) {
    const updatedData = foundData.filter(element => parseInt(element.day, 10) >= parseInt(currEventDay, 10));

    if (updatedData.length === 0) {
      firstEventFound = lastDayScenario(foundData, currDayInGMT, eventName, currEventDay, nextEventDay);
    } else if (updatedData.length > 0) {
      for (let element = 0; element < updatedData.length; element+=1) {
        nextEventDay = currDayInGMT.add((updatedData[element].day - currEventDay), 'day');

        if (updatedData[element].info.events[0].indexOf(eventName) !== -1) {
          const eventTimes = [];

          if (currEventDay === parseInt(updatedData[element].day, 10)) {
            for (let index = 0; index < updatedData[element].info.events[0].length; index+=1) {
              if (updatedData[element].info.events[0][index] === eventName) {
                eventTimes.push(index);
              }
            }

            const nextEventTime = helpers.isEventPassed(currDayInGMT, eventTimes);

            if (nextEventTime !== -1) {
              firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), `${nextEventTime  }:00 `];

              break;
            }
          } else {
            firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), updatedData[element].info.time[updatedData[element].info.events[0].indexOf(eventName)]];

            break;
          }
        } else if (updatedData[element].info.events[1].indexOf(eventName) !== -1) {
          const eventTimes = [];

          if (currEventDay === parseInt(updatedData[element].day, 10)) {
            for (let index = 0; index < updatedData[element].info.events[1].length; index+=1) {
              if (updatedData[element].info.events[1][index] === eventName) {
                  eventTimes.push(index);
              }
            }

            const nextEventTime = helpers.isEventPassed(currDayInGMT, eventTimes);

            if (nextEventTime !== -1) {
              firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), `${nextEventTime  }:00 `];

              break;
            }
          } else {
            firstEventFound = [eventName, nextEventDay.format('MMMM Do YYYY'), updatedData[element].info.time[updatedData[element].info.events[1].indexOf(eventName)]];

            break;
          }
        }
      }

      if (firstEventFound === undefined) {
        firstEventFound = lastDayScenario(foundData, currDayInGMT, eventName, currEventDay, nextEventDay);
      }
    } else {
      firstEventFound = ["Event not found"];
    }

    return createEmbeddedMessages.createSingleEventEmbed(firstEventFound, currDay);
  }

  return null
}

function getEventsEntireDay(currDay) {
  const dayDifference = currDay.diff(startDate, 'day') + 1; // finds daydifference to calculate current event day
  let currEventDay;

  if (dayDifference > 11) {  // if daydifference is bigger than 11
    currEventDay = dayDifference % 11;

    if (currEventDay === 0) {
      currEventDay = 11;
    }
  } else {
    currEventDay = dayDifference;
  }
    
  const foundData = eventData.filter(element => {
    if (element.day === currEventDay) {
      return element;
    }

    return null
  });

  return foundData; // return embed instead of array
}

function getListOfEvent(eventName, currDay) {
  const dayDifference = currDay.diff(startDate, 'day') + 1; // finds daydifference to calculate current event day

  let currEventDay;
  let combinedData;
  let nextEventDay;
  let returnString = "";

  if (dayDifference > 11) {  // if daydifference is bigger than 11
    currEventDay = dayDifference % 11;

    if (currEventDay === 0) {
      currEventDay = 11;
    }
  } else {
    currEventDay = dayDifference;
  }

  const foundData = getAllMatchingEvents(eventName);

  if (foundData.length > 0) {
    const updatedData = foundData.filter(element => parseInt(element.day, 10) >= parseInt(currEventDay, 10));
    const foundDataFirstRotation = clone(foundData);
    foundDataFirstRotation.forEach(element => {
      element.day = parseInt(element.day, 10) + 11;
    });
    const foundDataSecondRotation = clone(foundDataFirstRotation);
    foundDataSecondRotation.forEach(element => {
      element.day = parseInt(element.day, 10) + 11;
    });

    const foundDataAllRotation = foundDataFirstRotation.concat(foundDataSecondRotation);
    combinedData = updatedData.concat(foundDataAllRotation);
  }

    if (combinedData != null) {
        for (let element = 0; element < combinedData.length; element+=1) {
          nextEventDay = currDay.add((combinedData[element].day - currEventDay), 'day');

          if (combinedData[element].info.events[0].indexOf(eventName) !== -1) {
            if (combinedData[element].info.events[0].indexOf(eventName) !== -1) {
              for (let index = 0; index < combinedData[element].info.events[0].length; index+=1) {
                if (combinedData[element].info.events[0][index] === eventName) {
                  if (returnString.length === 0) {
                    returnString += `${nextEventDay.format('MMMM Do YYYY')  } At: ${  combinedData[element].info.time[index]}`;
                  } else {
                    returnString += `\n${  nextEventDay.format('MMMM Do YYYY')  } At: ${  combinedData[element].info.time[index]}`;
                  }
                }
              }
            }
          } else if (combinedData[element].info.events[1].indexOf(eventName) !== -1) {
            for (let index = 0; index < combinedData[element].info.events[1].length; index+=1) {
              if (combinedData[element].info.events[1][index] === eventName) {
                if (returnString.length === 0) {
                  returnString += `${nextEventDay.format('MMMM Do YYYY')  } At: ${  combinedData[element].info.time[index]}`;
                } else {
                  returnString += `\n${  nextEventDay.format('MMMM Do YYYY')  } At: ${  combinedData[element].info.time[index]}`;

                  if (returnString.length > 200) {
                    break;
                  }
                }
              }
            }
          }
        }

        const embed = createEmbeddedMessages.createMultipleNextEventEmbed([eventName, returnString]);

        return embed;
    }

    return null
}

module.exports = {
  getAllMatchingEvents,
  getNextEvent,
  getEventsEntireDay,
  getListOfEvent
}
