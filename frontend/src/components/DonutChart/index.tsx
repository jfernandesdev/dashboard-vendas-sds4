import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';

import { SaleSum } from 'types/sale';

type ChartData = {
  labels: string[];
  series: number[];
}

export default function DonutChart() {

  let chartData: ChartData = { labels: [], series: [] }

  axios.get(`${BASE_URL}/sales/amount-by-seller`).
    then(response => {
      const data = response.data as SaleSum[];
      const myLabels = data.map(x => x.sellerName);
      const mySeries = data.map(x => x.sum);

      chartData = { labels: myLabels, series: mySeries };
      console.log(chartData);
    })

  // const mockData = {
  //   labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
  //   series: [477138, 499928, 444867, 220426, 473088],
  // }

  const options = {
    legend: {
      show: true
    }
  }
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />

  );
}