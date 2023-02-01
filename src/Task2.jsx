import React from "react";
import { useState } from "react";
import { useCallback, useEffect } from "react";
import data from "./api/dummy_data.json";

const Task2 = () => {
  const [convertedData, setConvertedData] = useState("");

  const convertJsonDataStructure = useCallback(() => {
    const newObj = data.reduce((prev, curr) => {
      const dataList = curr.data;
      const name = curr.name;

      dataList.forEach((val) => {
        const time = val.time;
        const value = val.value;

        if (prev.hasOwnProperty(time)) {
          const newObj = { [name]: value };
          Object.assign(prev[time], newObj);
        } else {
          const obj = {
            [time]: {
              [name]: value,
            },
          };
          Object.assign(prev, obj);
        }
      });
      return prev;
    }, {});
    console.log(newObj);
    setConvertedData(JSON.stringify(newObj));
    return newObj;
  }, []);
  useEffect(() => {
    convertJsonDataStructure();
  }, [convertJsonDataStructure]);
  return (
    <div>
      <h2>Task 2</h2>
      <div>{convertedData}</div>
    </div>
  );
};

export default Task2;
