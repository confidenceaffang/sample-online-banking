"use client";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Doughnut} from "react-chartjs-2";

import React from 'react'

ChartJS.register(ArcElement,Tooltip, Legend);

const DoughnutChart = ({ account }: DoughnutChartProps) => {
    const data= {
        datasets :[{
            label: "Banks",
            data: [1250, 2500, 3750],
            backgroundColor: ["#17c49c", "#c4bf17","#1b16c4"]
        }],
        labels: account.map(account => account.name)
    }
  return <Doughnut data={data} 
  options={{
    cutout: '70%',
    plugins:{
        legend:{
            display: false
        }
    }
  }}/>
 

}
export default DoughnutChart;
