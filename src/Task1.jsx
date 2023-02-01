import React from "react";
// import { useCallback, useEffect, useState } from "react";

import data from "./api/dummy_data.json";

const Task1 = () => {
  return (
    <div>
      <h1>Task 1</h1>
      <table className="table">
        <thead>
          <tr className="table_row">
            <th>Parameter</th>
            {data[0].data.map((val, indx) => {
              return <th key={indx}>{val.time}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((val, indx) => {
            return (
              <tr key={indx} className={"table_row"}>
                <td>{val.name}</td>
                {val.data.map((item, indx1) => (
                  <td key={indx1}>{item.value}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Task1;
