import Chart from 'react-apexcharts';

export default function BarChart() {

  const options = {
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    colors: ['#5c57d3'],
  };

  const mockData = {
    labels: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
    },
    series: [
      {
        name: '% Sucesso',
        data: [43.6, 67.1, 67.7, 45.6, 71.1]
      }
    ]
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height="240"

    />
  );
}