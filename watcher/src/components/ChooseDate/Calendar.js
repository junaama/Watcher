import React , {useState} from 'react';
import {enGB} from 'date-fns/locale'
import {DatePicker} from "react-nice-dates"
import 'react-nice-dates/build/style.css'
import AddTask from './AddTask';

const Calendar = () => {
const [date, setDate] = useState();
console.log(date)

        return (
            <>
            
            <DatePicker date={date} onDateChange={setDate} locale={enGB}>
                {({ inputProps, focused})=> (
                    <input className={'input' + (focused ? ' -focused' : '')} {...inputProps}/>
                )}
            </DatePicker>
            <AddTask date={date}/>
            </>
        )
}
export default Calendar