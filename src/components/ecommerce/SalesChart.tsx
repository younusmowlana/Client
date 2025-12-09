import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

interface SalesChartProps {
  dailyData?: number[];
  monthlyData?: number[];
  viewType?: 'daily' | 'monthly';
}

export default function SalesChart({ 
  dailyData = [28000, 32000, 25000, 38000, 42000, 35000, 45000],
  monthlyData = [185000, 245000, 198000, 312000, 268000, 295000],
  viewType = 'daily' 
}: SalesChartProps) {
  const [activeView, setActiveView] = useState<'daily' | 'monthly'>(viewType);

  const dailyOptions: ApexOptions = {
    colors: ["#3b82f6"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "area",
      height: 280,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        formatter: (val: number) => `Rs. ${(val / 1000).toFixed(0)}K`,
      },
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: (val: number) => `Rs. ${val.toLocaleString()}`,
      },
    },
  };

  const monthlyOptions: ApexOptions = {
    colors: ["#10b981"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 280,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        formatter: (val: number) => `Rs. ${(val / 1000).toFixed(0)}K`,
      },
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `Rs. ${val.toLocaleString()}`,
      },
    },
  };

  const dailySeries = [
    {
      name: "Daily Sales",
      data: dailyData,
    },
  ];

  const monthlySeries = [
    {
      name: "Monthly Sales",
      data: monthlyData,
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-6 sm:pt-6 pb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Sales Overview
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveView('daily')}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              activeView === 'daily'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
            }`}
          >
            Daily (7 Days)
          </button>
          <button
            onClick={() => setActiveView('monthly')}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              activeView === 'monthly'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
            }`}
          >
            Monthly (6 Months)
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto px-2 pb-5">
        <div className="min-w-[650px] xl:min-w-full">
          {activeView === 'daily' ? (
            <Chart options={dailyOptions} series={dailySeries} type="area" height={280} />
          ) : (
            <Chart options={monthlyOptions} series={monthlySeries} type="bar" height={280} />
          )}
        </div>
      </div>
    </div>
  );
}