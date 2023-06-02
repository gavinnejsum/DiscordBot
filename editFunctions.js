function correctName(string) {
  switch (string) {
    case "upgrade ship":
    case "ship":
      return "ship upgrade";
    case "ship heroic":
    case "upgrade ship heroic":
    case "ship big":
    case "upgrade ship big":
    case "ship upgrade big":
      return "ship upgrade heroic";
    case "ship slb":
    case "slb ship":
    case "upgrade ship slb":
    case "slb ship upgrade":
    case "ship slb upgrade":
      return "ship upgrade slb";
    case "recruit":
      return "officer recruit";
    case "recruit heroic":
    case "recruit officer heroic":
    case "heroic officer recruit":
    case "officer heroic":
      return "officer recruit heroic";
    case "recruit slb":
    case "recruit officer slb":
    case "slb officer recruit":
    case "slb recruit officer":
      return "officer recruit slb";
    case "xp":
      return "officer xp";
    case "xp big":
    case "xp heroic":
    case "officer xp heroic":
    case "officer heroic xp":
    case "officer big xp":
      return "officer xp big";
    case "xp slb":
    case "officer slb xp":
    case "slb officer xp":
    case "slb xp":
      return "officer xp slb";
    case "upgrade station":
    case "station":
      return "station upgrade";
    case "upgrade station big":
    case "station big":
    case "station big upgrade":
    case "big station upgrade":
    case "station upgrade heroic":
    case "upgrade heroic station":
    case "heroic station upgrade":
      return "station upgrade big"
    case "station slb":
    case "upgrade station slb":
    case "station slb upgrade":
    case "slb station upgrade":
      return "station upgrade slb";

    default:
      return string;``
  }
}

function ArgumentToString(array) {
  let retString = "";

  array.forEach(element => {
    if (retString.length === 0) {
      retString = element;
    } else {
      retString += ` ${  element}`;
    }
  });

  retString = retString.toLowerCase();
  retString = correctName(retString);

  return retString;
}

function capitalizeFirstLetter(str) {
  const splitString = str.split(" ");

  for (let i = 0; i < splitString.length; i += 1) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);

    if (splitString[i].includes("Slb")) {
      splitString[i] = "SLB";
    } else if(splitString[i].includes("Xp")) {
      splitString[i] = "XP";
    }
  }

  return splitString.join(" ");
}

function removeSpacesBetweenWords(str) {
  const splitStr = str.split(" ");
  let newStr = "";

  for (let index = 0; index < splitStr.length; index += 1) {
    newStr = newStr.concat(splitStr[index]);
  }

  return newStr;
}

module.exports = {
  ArgumentToString,
  capitalizeFirstLetter,
  removeSpacesBetweenWords,
  correctName
}
