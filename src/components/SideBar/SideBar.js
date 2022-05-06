import layoutPic from "../../assets/images/svg/global-module-navigation/Dashboard.svg";
import empCheckPic from "../../assets/images/svg/global-module-navigation/Me.svg";
import onboardPic from "../../assets/images/svg/global-module-navigation/Onboarding.svg";
import orgPic from "../../assets/images/svg/icn_organization.svg";
import benefitsPic from "../../assets/images/svg/global-module-navigation/Benefits.svg";
import settingsPic from "../../assets/images/svg/global-module-navigation/Settings.svg";
import payrollPic from "../../assets/images/svg/icn_payroll.svg";
import timePic from "../../assets/images/svg/global-module-navigation/Time.svg";

const sidePics = [
  layoutPic,
  empCheckPic,
  onboardPic,
  orgPic,
  benefitsPic,
  settingsPic,
  payrollPic,
  timePic,
];

export default function SideBar() {
  return (
    <div className="sidebar">
      {sidePics.map((pic, index) => {
        return <img key={index} src={pic} alt="" />;
      })}
    </div>
  );
}
