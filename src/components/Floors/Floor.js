import React, { useState } from "react";
import Tablee from "./Tablee";
import RadioButtonsGroup from "../DetailProjectTab/RadioButtonsGroup";

const Floor = () => {
  /*const state = {
    items: [
      {
        id: 1,
        floorName: "خالد",
        description: "الوصف",
        gender: "ذكر",
        caseX: "ناشط",
        appear: "تردد الظهور",
        attachs: "المرفقات",
      },
    ],
    data: {
      floorName: "",
      description: "",
      gender: "",
      caseX: "",
      appear: "",
      attachs: "",
    },
  };*/

  const [state, setState] = useState([
    {
      id: 1,
      floorName: "خالد",
      description: "الوصف",
      gender: "ذكر",
      caseX: "ناشط",
      appear: "تردد الظهور",
      attachs: "المرفقات",
    },
  ]);
  const [current, setCurrent] = useState({
    floorName: "",
    description: "",
    gender: "",
    caseX: "",
    appear: "",
    attachs: "",
  });

  const handleChange = (e) => {
    setCurrent({ ...current, [e.target.name]: e.target.value });
    /* setItems(e.target.value);*/
  };

  const addItem = (e) => {
    e.preventDefault();
    setState((prev) => [...prev, current]);
  };

  return (
    <div className="floor">
      <form onSubmit={addItem}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <input type="text" onChange={handleChange} name="floorName" />
              <textarea
                rows="4"
                onChange={handleChange}
                name="description"
              ></textarea>
              <RadioButtonsGroup handleChange={handleChange} />
            </div>
            <div className="col-lg-4">
              <select name="appear" id="cars">
                <option value="volvo">تردد الظهور</option>
              </select>
            </div>
          </div>
        </div>
        <button>اضافة دور</button>
      </form>
      <Tablee state={state} />
    </div>
  );
};

export default Floor;
