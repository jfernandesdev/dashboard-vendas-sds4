import Chart from 'react-apexcharts';

export default function DonutChart() {

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
  }

  const options = {
    legend: {
      show: true
    }
  }
  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height="240"
    />

  );
}