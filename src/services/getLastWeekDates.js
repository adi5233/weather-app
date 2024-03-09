function getLastWeekDates() {
  const currentDate = new Date(); // Get current date
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // January is 0, so add 1 to get correct month
  const currentDay = currentDate.getDate();

  // Calculate the start date (current date minus 6 days)
  let startDay = currentDay - 6;
  let startMonth = currentMonth;
  let startYear = currentYear;

  if (startDay <= 0) {
    // If the start day is negative, adjust the month and year accordingly
    startMonth -= 1;
    if (startMonth === 0) {
      // If the start month is January, adjust the year
      startYear -= 1;
      startMonth = 12; // December
    }
    // Calculate the last day of the previous month
    const lastDayOfPreviousMonth = new Date(startYear, startMonth, 0).getDate();
    // Calculate the correct start day
    startDay = lastDayOfPreviousMonth + startDay;
  }

  // Construct start date
  const startDate = `${startYear}-${startMonth
    .toString()
    .padStart(2, "0")}-${startDay.toString().padStart(2, "0")}`;

  // Construct end date (current date)
  const endDate = `${currentYear}-${currentMonth
    .toString()
    .padStart(2, "0")}-${currentDay.toString().padStart(2, "0")}`;

  return { startDate, endDate };
}

export default getLastWeekDates;
