import React from "react";
import "./progessBar.css";
import { useGlobalContext } from "../../context/context";

const ProgressBar = () => {
  const { steps } = useGlobalContext();
  const list = [
    { label: 1, title: "UserDetails" },
    { label: 2, title: "ProfileDetails" },
    { label: 3, title: "SignupDetails" },
    { label: 4, title: "Review" },
  ];

  return (
    <>
      <div class="stepper-wrapper">
        {list.map((list, index) => {
            let progressStatus=""
              if (index < steps)
              progressStatus = "completed"
          else if (index === steps)
              progressStatus = "active"
          return (
            <div class={"stepper-item " + progressStatus} key={index}>
              <div class="step-counter">{list.label}</div>
              <div class="step-name">{list.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProgressBar;
