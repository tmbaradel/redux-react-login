// collection of useful functions

const dateTodayFormatted = () => {
  const dateToday = new Date();
  let dd = dateToday.getDate();
  let mm = dateToday.getMonth() + 1; // January is 0
  const yyyy = dateToday.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
};


export {
  dateTodayFormatted
};
