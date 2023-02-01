import React from "react";
import { useEffect, useState } from "react";

import data from "./api/dummy_data_2.json";

const Task3 = () => {
  const [tableHead, setTableHead] = useState([]);

  useEffect(() => {
    const values = Object.values(data);
    setTableHead(values[0]);
  }, []);
  return (
    <div>
      <h1>Task 3</h1>
      <table className="table">
        <thead>
          <tr className="table_row">
            <th>Time</th>
            {Object.keys(tableHead).map((val, indx) => {
              console.log(val);
              return <th key={indx}>{val}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((val, indx) => {
            return (
              <tr key={indx} className="table_row">
                <td>{val}</td>
                {Object.values(data[val]).map((item, indx1) => {
                  return <td key={indx1}>{item}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Task3;
