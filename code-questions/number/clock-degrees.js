// input : hour:0-11, minutes:0-59 , output: degree
// example : 00:15, result - 90

const oneDegree = 360 / 60; // = 6

const convertHourToMinutes = (hours) => hours * 5;

function returnDegreeRange({ hours, minutes } = {}) {
    const m = Math.abs(convertHourToMinutes(hours) - minutes);
    const d1 = m * oneDegree;

    return [d1, 360 - d1];
}

const time = { hours: 6, minutes: 45 };

const result = returnDegreeRange(time);