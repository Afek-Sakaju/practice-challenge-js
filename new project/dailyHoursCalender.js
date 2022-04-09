/**
 * the file calculate total hours of work
 * due to date given ect..
 */
class dailyHours {
  constructor(entryHour, exitHour){
    this.entryHour = entryHour;
    this.exitHour = exitHour;
    
    let hoursCalculator = 0;
    let minutesCalculator = 0;
    function hoursAndMinutesCalc(entryHour, exitHour){
      hoursCalculator = +exitHour.slice(0, 2);
      minutesCalculator = +exitHour.slice(3, 5);

      hoursCalculator -= +entryHour.slice(0, 2);
      minutesCalculator -= +entryHour.slice(3, 5);
      return hoursCalculator;
    }
    this.totalHours = hoursAndMinutesCalc(entryHour, exitHour);
  }
}
const firstDayHours = new dailyHours('08:11', '17:50');
console.log(firstDayHours.totalHours);

  