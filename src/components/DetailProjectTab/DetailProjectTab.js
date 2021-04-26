import { RadioGroup } from "@material-ui/core";
import React from "react";
import RadioButtonsGroup from "./RadioButtonsGroup";

const DetailProjectTab = () => {
  return (
    <div className="detail-project-tab">
      <div className="container">
        <div className="col-lg-8">
          <div className="">
            <h2></h2>
            <input type="email" />
          </div>
          <p></p>
          <div>
            <RadioButtonsGroup />
            <RadioButtonsGroup />
          </div>
        </div>
        <div className="col-lg-4"></div>
        <label for="avatar">
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default DetailProjectTab;
