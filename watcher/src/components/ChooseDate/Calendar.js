import React, { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePicker, DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import AddTask from "./AddTask";
import "./home.scss";

const Calendar = () => {
  const [date, setDate] = useState();

  return (
    <div className="calendar-ctn">
      <p>
        Selected Date:{" "}
        {date ? format(date, "dd MMM yyyy", { locale: enGB }) : ""}
      </p>
      <DatePickerCalendar
        date={date}
        onDateChange={setDate}
        locale={enGB}
        className="calendar-comp"
      />
      <AddTask date={date} className="addtask-comp" />
    </div>
  );
};
export default Calendar;
