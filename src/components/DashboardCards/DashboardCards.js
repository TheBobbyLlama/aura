import Button from "../Button/Button";
import CalendarCard from "../DashCards/CalendarCard/CalendarCard";

export default function DashboardCards() {
  return (
    <div className="dashboard-cards">
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <div>
        <Button>Edit</Button>
      </div>
    </div>
  );
}
