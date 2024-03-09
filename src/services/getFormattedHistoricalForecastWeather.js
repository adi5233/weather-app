import getPreviousMonthDates from "./getPreviousMonthDates";
import getLastWeekDates from "./getLastWeekDates";

const getFormattedHistoricalForecastWeather = async ({ lat, lon, dataFor }) => {
  const latitude = lat;
  const longitude = lon;

  let startDate, endDate;

  if (dataFor == "lastMonth") {
    ({ startDate, endDate } = getPreviousMonthDates());
  } else if (dataFor == "lastWeek") {
    ({ startDate, endDate } = getLastWeekDates());
  } else {
    startDate = "2024-03-01";
    endDate = "2024-03-07";
  }

  const url = `https://archive-api.open-meteo.com/v1/era5?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m`;

  const res = await fetch(url);
  const result = await res.json();

  const data = [];
  for (let i = 0; i < result.hourly.time.length; i++) {
    data.push({
      date: result.hourly.time[i].toString(),
      temp: result.hourly.temperature_2m[i],
    });
  }

  const groupedByDate = data.reduce((acc, { date, temp }) => {
    const dateOnly = date.split("T")[0];
    if (!acc[dateOnly]) {
      acc[dateOnly] = { date: dateOnly, temps: [] };
    }
    acc[dateOnly].temps.push(temp);
    return acc;
  }, {});

  const formattedHistoricalForecastWeather = Object.values(groupedByDate).map(
    ({ date, temps }) => {
      const averageTemp =
        temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
      return { date, temp: averageTemp };
    }
  );

  const dates = formattedHistoricalForecastWeather
    .map((entry) => entry.date)
    .map((dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        // year: "numeric",
        // month: "long",
        day: "numeric",
      });
    });

  const temps = formattedHistoricalForecastWeather.map((entry) => entry.temp);
  return { dates, temps };
};

export default getFormattedHistoricalForecastWeather;
