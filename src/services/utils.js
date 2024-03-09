import { DateTime } from "luxon";

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  const formattedTime = DateTime.fromSeconds(secs)
    .setZone(zone)
    .toFormat(format);
  return formattedTime.replace(/\bAM\b|\bPM\b/g, "");
};

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

// const formatToLocalDate = (secs, format = "LLL dd, yyyy") => {
//   const formattedDate = DateTime.fromSeconds(secs * 1000).toFormat(format);
//   return formattedDate;
// };

const formatToLocalDate = (secs, timezone, format = "LLL dd, yyyy") => {
  const formattedDate = DateTime.fromSeconds(secs)
    .setZone(timezone)
    .toFormat(format);
  return formattedDate;
};
export { formatToLocalTime, iconUrlFromCode, formatToLocalDate };
