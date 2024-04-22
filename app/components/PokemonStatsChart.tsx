import React from 'react';
import dynamic from 'next/dynamic';
import ReactApexChart from 'react-apexcharts';
// import { ChartOptions } from 'apexcharts';

// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
  stats: { name: string; base_stat: number }[];
}

const PokemonStatsChart: React.FC<Props> = ({ stats }) => {
    const chartOptions = {
      series: [{ data: stats.map((stat) => stat.base_stat) }],
      options: {
        chart: {
          type: 'bar',
        },
        xaxis: {
          categories: stats.map((stat) => stat.name),
        },
      },
    };
  
    return (
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={400}
        width="100%"
      />
    );
  };
  
  export default PokemonStatsChart;