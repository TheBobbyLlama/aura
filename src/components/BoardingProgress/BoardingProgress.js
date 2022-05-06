import { ReactComponent as mailIcon } from "../../assets/images/svg/icn_send-invite.svg";
import { ReactComponent as notifyIcon } from "../../assets/images/svg/icn_reminder.svg";
import { ReactComponent as calenderIcon } from "../../assets/images/svg/icn_hr_calendar.svg";
import { ReactComponent as inactiveIcon } from "../../assets/images/svg/icn_user-inactivate.svg";
import { ReactComponent as deleteIcon } from "../../assets/images/svg/icn_user-delete.svg";
import { dummyData } from "../../DUMMYDATA/dummyData";

import { useEffect, useState } from "react";
import { useFormLogic } from "../../Hooks/useFormLogic";

const ICONS = [
  { Icon: mailIcon, message: "Send Invite" },
  { Icon: notifyIcon, message: "Notifications" },
  { Icon: calenderIcon, message: "Calender" },
  { Icon: inactiveIcon, message: "Inactivate" },
  { Icon: deleteIcon, message: "Delete" },
];

const BoardingProgress = () => {
  const [state, setState, handleChange] = useFormLogic({
    initalFormState: {
      searchTerm: "",
      data: [],
      text: "",
      isChecked: false,
    },
  });
  const [isChecked, setIsChecked] = useState(false);
  const filterData = () => {
    const filteredDummyData = dummyData.filter((item) => {
      return item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    });
    setState({ ...state, data: filteredDummyData });
  };

  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
  };
  const handleMultipleCheckboxes = (e) => {};
  useEffect(() => {
    filterData();
  }, [state.searchTerm]);

  return (
    <div className="progress-container">
      <div className="progress-header">
        <div className="progress-header-col">
          <span className="span-text">On-boarding Progress</span>
          <input
            placeholder="Search name"
            className="progress-input"
            onChange={handleChange}
            value={state.searchTerm}
          />
        </div>
        <div className="progress-header-col">
          <div className="progress-icons">
            {ICONS.map((icon) => {
              const ToolBarIcon = icon.Icon;
              return (
                <div className="content-icon" key={icon.message}>
                  <ToolBarIcon className={"img-icon"} />

                  <div>{icon.message}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="progress-sub-container">
        <div className="progress-sub-container-header">
          <label>
            <input type="checkbox" onChange={handleCheckbox} />
            Full Name
          </label>
          <span>Job Role</span>
          <span>Status</span>
          <span>Progress</span>
          <span>Due Data</span>
        </div>
        {state.data.map((item) => {
          return (
            <div key={item.id} className="">
              <label htmlFor="info">
                <input
                  name="info"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleMultipleCheckboxes}
                />
                {item.name}
                {item.role}
                {item.status}
                {item.progress}
                {item.date}
              </label>
            </div>
          );
        })}
        <span className="view">View All</span>
      </div>
    </div>
  );
};

export default BoardingProgress;
