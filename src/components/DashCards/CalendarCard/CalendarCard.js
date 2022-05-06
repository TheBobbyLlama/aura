import { useEffect, useRef } from "react";
import { LocalizationProvider, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";

const eventDays = [
  new Date(2022, 4, 3),
  new Date(2022, 4, 22),
  new Date(2022, 5, 18),
  new Date(2022, 3, 21),
];

function CalendarDay(day) {
  let extraClass = "";
  const now = new Date();
  const foundEvent = eventDays.find(
    (eventDay) =>
      eventDay.getDate() === day.getDate() &&
      eventDay.getMonth() === day.getMonth()
  );

  if (foundEvent) {
    extraClass = "event-day";
  }

  if (day.getDate() === now.getDate() && day.getMonth() === now.getMonth()) {
    extraClass = "today";
  }
  return (
    <div key={day.valueOf()} className={`dayCell ${extraClass}`}>
      <span className="dayText">{day.getDate()}</span>
    </div>
  );
}

export default function CalendarCard() {
  const cardRef = useRef(null);

  // Force month text to abbreviation.
  const setMonthText = (month) => {
    setTimeout(() => {
      const findMe = cardRef.current.querySelector(
        "div[role='presentation'] > *:first-child > *:first-child"
      );

      findMe.textContent = format(month, "MMM");
    }, 1);
  };

  // Make sure current month text is set correctly as well.
  useEffect(() => {
    setMonthText(new Date());
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div ref={cardRef} className="dash-card calendar-card">
        <h3>Payroll Calendar</h3>
        <CalendarPicker
          renderDay={CalendarDay}
          onMonthChange={setMonthText}
          onChange={console.log}
        />
      </div>
    </LocalizationProvider>
  );
}
