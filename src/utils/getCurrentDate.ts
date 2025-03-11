export function getCurrentYearAndMonth() {
  const currentDate = new Date();
  const year = String(currentDate.getFullYear());
  const month = String(currentDate.getMonth() + 1);
  return { year, month };
}