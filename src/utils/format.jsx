import { format } from "date-fns";

export function FormatFloat(number) {
  return number.toFixed(2);
}

export function FormatDate(date) {
  return format(new Date(date), "dd.MM.yyyy");
}
