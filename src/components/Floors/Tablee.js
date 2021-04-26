import React from "react";
import { Table } from "react-bootstrap";

const Tablee = ({ state }) => {
  return (
    <div className="container">
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>الدور</th>
            <th>الحالة</th>
            <th>النوع</th>
            <th>تردد الظهور</th>
            <th>الوصف</th>
            <th>المرفقات</th>
            <th>الفعل</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            return (
              <tr>
                <td>{item.floorName}</td>
                <td>{item.caseX}</td>
                <td>{item.gender}</td>

                <td>{item.appear}</td>
                <td>{item.description}</td>
                <td>{item.attachs}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tablee;
