import { format } from 'date-fns'

export function FormatFloat (number) {
    return number.toFixed(2)
  };


  
export function FormatDate () {
    return format(Date(), 'dd.MM.yyyy')
};