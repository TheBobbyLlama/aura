import { LocalizationProvider, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function CalendarCard() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="dash-card calendar-card">
        <h3>Payroll Calendar</h3>
        <CalendarPicker onChange={console.log} />
      </div>
    </LocalizationProvider>
  );
}
