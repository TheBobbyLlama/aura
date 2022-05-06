import AuraHeader from "../AuraHeader/AuraHeader";
import HeaderButton from "../HeaderButton/HeaderButton";
import SideBar from "../SideBar/SideBar";
import BoardingProgress from "../BoardingProgress/BoardingProgress";
import DashboardCards from "../DashboardCards/DashboardCards";

import AreaChart from "../Charts/AreaChart";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";

import userPic from "../../assets/images/images/emp-userpic.jpg";
import reminderIcon from "../../assets/images/images/bell.png";
import gridIcon from "../../assets/images/images/grid.png";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <AuraHeader>
        <HeaderButton icon={userPic} caption="User Profile" rounded />
        <HeaderButton icon={reminderIcon} caption="Notifications" />
        <HeaderButton icon={gridIcon} caption="Layout" />
      </AuraHeader>
      <main className="dashboard__content">
        <SideBar />
        <div className="dashboard-charts">
          <LineChart />
          <AreaChart />
          <BarChart />
        </div>
        <BoardingProgress />
        <DashboardCards />
      </main>
    </div>
  );
};

export default Dashboard;
