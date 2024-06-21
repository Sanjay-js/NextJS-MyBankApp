"use client";
import { ArcElement, Legend, Tooltip } from "chart.js";
import 'chart.js/auto';
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChat = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1235, 3748, 8724],
        backgroundColor: ['#0747b6','#2265d8','#2f91fa']
      },
    ],
    labels:['Bank1','bank2','bank3']
  };
  return (
    <div>
      <Doughnut data={data}
      options={
        {
            cutout:'70%',
            plugins:{
                legend:{
                    display:true
                }
            }
        }
      }
      />
    </div>
  );
};

export default DoughnutChat;
