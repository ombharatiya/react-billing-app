export const getCurrentDate = () => {
  const today = new Date();
  return (
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
  );
};

export const getFormattedDate = (today: Date) => {
  return (
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
  );
};

export const getReverseFormattedDate = (dateStr: string) => {
  const dateArr: string[] = dateStr.split("-");
  return dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
};
