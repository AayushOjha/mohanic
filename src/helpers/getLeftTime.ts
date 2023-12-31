import moment, { Moment } from "moment";

export function getTimeLeft(targetDate: Moment) {
  const now = moment();
  const duration = moment.duration(targetDate.diff(now));
  return {
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
}
