import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  TimeScale,
  Legend,
} from 'chart.js';
import { Line, Scatter } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import useFetch from "../Utility/useFetch";
import moment from "moment";
import AddWeight from './AddWeight';

ChartJS.register(TimeScale,LinearScale, PointElement, LineElement, Tooltip, Legend);

const WeightHome = () =>{
  const [chartData, setChartData] = useState();
  const {data, isPending, isError } = useFetch({url: 'https://jslester.com/weight/server/'})
  useEffect( ()=>{
    if(data){
        let dataArr = [];
        data.reverse().forEach(weightLog =>{
          dataArr = [...dataArr, {
              "x":  moment.utc(weightLog.created_at).valueOf(), 
              "y":  weightLog.Weight
            }
          ]
        });
        console.log(dataArr);
        setChartData({
          datasets: [{
            label: 'Weight',
            data:dataArr ,               
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 2,
            tension: 0.5
          }]
        });
    }
    
}, [data]);
  
  const options= {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
              minute: 'DD T'
          },
          tooltipFormat: 'DD T'
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Weight'
        }
      }
    }
  }
    
    return(
        <div className='WeightHome'>
              <AddWeight></AddWeight>
             {chartData && <Line options={options} data={chartData} />}
        </div>
    )
}

export default WeightHome;