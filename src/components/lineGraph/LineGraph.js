import React, { useState, useEffect } from "react";
import "../../styles/LineGraph.css";

import { Line } from "react-chartjs-2";
import { options, fetchDataForLineGraph } from "../../helper/utilForLineGraph";

const LineGraph = ({ casesType, ...props }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDataForLineGraph(setData, casesType);
  }, [casesType]);

  return (
    <div className={props.className}>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204,16,52,0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default LineGraph;
