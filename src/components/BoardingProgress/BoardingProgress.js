import mailIcon from "../../assets/images/svg/icn_send-invite.svg";
import notifyIcon from "../../assets/images/svg/icn_reminder.svg";
import calenderIcon from "../../assets/images/svg/icn_hr_calendar.svg";
import inactiveIcon from "../../assets/images/svg/icn_user-inactivate.svg";
import deleteIcon from "../../assets/images/svg/icn_user-delete.svg";
import { dummyData } from "../../DUMMYDATA/dummyData";

import Input from "../Input/Input";
import { useState, useEffect } from "react";

import "./BoardingProgress.scss";

const ICONS = [
  { icon: mailIcon, message: "Send Invite" },
  { icon: notifyIcon, message: "Notifications" },
  { icon: calenderIcon, message: "Calender" },
  { icon: inactiveIcon, message: "Inactivate" },
  { icon: deleteIcon, message: "Delete" },
];

const useFormLogic = ({ initalFormState }) => {
  const [state, setState] = useState(initalFormState);
  //   const handleChange = (e) => {
  //     setState({
  //       ...state,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  return [state, setState];
};

const BoardingProgress = () => {
  const [state, setState] = useFormLogic({
    initalFormState: {
      searchTerm: "",
      data: [],
      isHovering: false,
      text: "",
    },
  });

  const handleMouseOver = (icon) => {
    setState({ ...state, isHovering: true, text: icon });
  };
  const handleMouseOut = () => {
    setState({ ...state, isHovering: false, text: "" });
  };

  const handleChange = (e) => {
    setState({ ...state, searchTerm: e.target.value });
    console.log(state);
  };

  const filterData = () => {
    const filteredDummyData = dummyData.filter((item) => {
      return item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    });
    setState({ ...state, data: filteredDummyData });
  };

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
            {ICONS.map((item) => {
              return (
                <img
                  key={item.message}
                  src={item.icon}
                  alt=""
                  className="img-icon"
                  onMouseOver={() => handleMouseOver(item.message)}
                  onMouseOut={handleMouseOut}
                ></img>
              );
            })}
          </div>

          {state.isHovering && (
            <span className="icon-message">{state.text}</span>
          )}
        </div>
      </div>
      <div className="progress-sub-container">
        {state.data.map((item) => {
          return (
            <label>
              <input type="checkbox" />
              {item.name}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default BoardingProgress;
