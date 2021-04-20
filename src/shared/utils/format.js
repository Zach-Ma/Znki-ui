import dayjs from 'dayjs';

/**
 * 
 * @param {dayjs} date1 previous date
 * @param {*} date2  subsequent date
 * @param {*} format 'day'..
 * @returns 
 */
export const dateDiff = (date1, date2, format) => {
  const d1 = dayjs(date1);
  const d2 = dayjs(date2);
  return d2.diff(d1, format);
}