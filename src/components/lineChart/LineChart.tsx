import React from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

export interface ILineChartProps {
  chartData: any;
  chartLabels: any;
}
export interface ILineChartState {
  data: any;
  options: any;
}

class LineChart extends React.Component<ILineChartProps, ILineChartState> {
  constructor(props: ILineChartProps, context: any) {
    super(props, context);
    this.state = this.initialiseState();
  }

  public render() {
    const { data, options } = { ...this.initialiseState() };
    return (
      <div className="height-300 flex-row justify-content-center">
        {/* <h1>LineChart</h1> */}

        <div className="height-300 max-width-500">
          <Line
            // ref="chart"
            data={data}
            options={options}
          />
        </div>
      </div>
    );
  }

  private initialiseState() {
    const { chartData, chartLabels } = { ...this.props };
    // props: OwnProps
    const maxValue = Math.max(...chartData) + 2;
    const minValue = Math.min(...chartData) - 2;
    return {
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                // padding: 80,
                display: true,
              },
              gridLines: {
                drawBorder: true,
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                // min: 0,
                max: maxValue,
                min: minValue,
                display: true,
              },
              gridLines: {
                drawBorder: true,
                display: false,
              },
            },
          ],
        },
        tooltips: {
          // backgroundColor: props.color ? props.color : 'rgba(66, 70, 101, 0.8)',
          backgroundColor: "rgba(66, 70, 101, 0.8)",
          bodyFontFamily: "Avenir",
          // xPadding: 4,
          // yPadding: 2,
          displayColors: false,
          // callbacks: {
          //   // use label callback to return the desired label
          //   label: function (tooltipItem: any, data: any) {
          //     // return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          //     if (tooltipItem.yLabel) return tooltipItem.yLabel;
          //     else return "0";
          //   },
          //   // remove title
          //   title: function (tooltipItem: any, data: any) {
          //     return;
          //   },
          // },
        },
      },

      data: {
        labels: chartLabels,
        // labels: [1, 2, 3, 4, 5, 6, 7, 8],
        // labels: [
        //   "January",
        //   "February",
        //   "March",
        //   "April",
        //   "May",
        //   "June",
        //   "July",
        //   "August",
        //   "September",
        //   "October",
        //   "November",
        //   "December",
        // ],
        datasets: [
          {
            label: "Monthly Bill Amt",
            fill: false,
            lineTension: 0.0,
            // backgroundColor: props.color
            //   ? props.color
            //   : 'rgba(66, 70, 101, 0.4)',
            // borderColor: props.color ? props.color : 'rgba(66, 70, 101, 1)',
            backgroundColor: "rgba(66, 70, 101, 0.4)",
            borderColor: "rgba(66, 70, 101, 1)",
            borderCapStyle: "butt",
            borderDash: [] as any[],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            borderWidth: 2,
            // pointBorderColor: props.color
            //   ? props.color
            //   : 'rgba(66, 70, 101, 1)',
            // pointBackgroundColor: props.color
            //   ? props.color
            //   : 'rgba(66, 70, 101, 1)',
            pointBorderColor: "rgba(66, 70, 101, 1)",
            pointBackgroundColor: "rgba(66, 70, 101, 1)",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            // pointHoverBackgroundColor: props.color
            //   ? props.color
            //   : 'rgba(66, 70, 101, 0.4)',
            // pointHoverBorderColor: props.color
            //   ? props.color
            //   : 'rgba(66, 70, 101, 0.4)',
            pointHoverBackgroundColor: "rgba(66, 70, 101, 0.4)",
            pointHoverBorderColor: "rgba(66, 70, 101, 0.4)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            // data: props.data
            // data: [65, 59, 80, 81, 56, 55, 40],
            data: chartData,
          },
        ],
      },
    };
  }
}
export default LineChart;
