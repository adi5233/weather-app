function getPreviousMonthDates() {
  const currentDate = new Date(); // Get current date
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // January is 0, so add 1 to get correct month

  // Calculate previous month
  let previousMonth = currentMonth - 1;
  let previousYear = currentYear;
  if (previousMonth === 0) {
    // If current month is January, previous month is December of previous year
    previousMonth = 12; // December
    previousYear -= 1; // Previous year
  }

  // Get the last day of the previous month
  const lastDayOfPreviousMonth = new Date(
    previousYear,
    previousMonth,
    0
  ).getDate();

  // Construct start and end dates for the previous month
  const startDate = `${previousYear}-${previousMonth
    .toString()
    .padStart(2, "0")}-01`; // Format: YYYY-MM-DD
  const endDate = `${previousYear}-${previousMonth
    .toString()
    .padStart(2, "0")}-${lastDayOfPreviousMonth}`;

  return { startDate, endDate };
}

export default getPreviousMonthDates;
