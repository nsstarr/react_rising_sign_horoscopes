function getYesterday() {
  const date = new Date();

  let day = date.getDate() - 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let newDay;
  let newMonth;
  // If the day or month is less than 10, add a 0 to the front of the number.
  if (day < 10) {
    newDay = `0${day}`;
  }
  if (month < 10) {
    newMonth = `0${month}`;
  }

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${newMonth}-${newDay}-${year}`;
  return currentDate; // "17-6-2022"
}

export default getYesterday;