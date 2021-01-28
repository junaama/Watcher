import React , {useState} from 'react';
import { format } from 'date-fns'
import {enGB} from 'date-fns/locale'
import {DatePicker, DatePickerCalendar} from "react-nice-dates"
import 'react-nice-dates/build/style.css'
import AddTask from './AddTask';

const Calendar = () => {
const [date, setDate] = useState();
console.log(date)

        return (
            <>
            
          
            <p>
        Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
      </p>
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
            <AddTask date={date}/>
            </>
        )
}
export default Calendar