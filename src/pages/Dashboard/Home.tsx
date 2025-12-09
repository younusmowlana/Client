import SummaryCards from "../../components/ecommerce/SummaryCards";
import LowStockAlert from "../../components/ecommerce/LowStockAlert";
import OutOfStockItems from "../../components/ecommerce/OutOfStockItems";
import RecentSales from "../../components/ecommerce/RecentSales";
import RecentStockPurchases from "../../components/ecommerce/RecentStockPurchases";
import SalesChart from "../../components/ecommerce/SalesChart";
import TopSellingProducts from "../../components/ecommerce/TopSellingProducts";
import PageMeta from "../../components/common/PageMeta";
import {
  summaryData,
  lowStockItems,
  outOfStockItems,
  recentSales,
  recentPurchases,
  topSellingProducts,
  salesChartData,
} from "../../data/MockData";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Paint Shop Dashboard | Admin Panel"
        description="Complete paint shop management dashboard with inventory, sales, and stock tracking"
      />
      <div className="space-y-6">
        {/* Summary Cards Section */}
        <SummaryCards
          todaySales={summaryData.todaySales}
          monthSales={summaryData.monthSales}
          stockValue={summaryData.stockValue}
          lowStockCount={summaryData.lowStockCount}
          outOfStockCount={summaryData.outOfStockCount}
          totalProducts={summaryData.totalProducts}
          pendingPayments={summaryData.pendingPayments}
          todayBills={summaryData.todayBills}
        />

        {/* Critical Alerts Row */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <LowStockAlert items={lowStockItems} />
          <OutOfStockItems items={outOfStockItems} />
        </div>

        {/* Sales Chart */}
        <SalesChart
          dailyData={salesChartData.daily}
          monthlyData={salesChartData.monthly}
          viewType="daily"
        />

        {/* Recent Activity Row */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <RecentSales sales={recentSales} />
          <RecentStockPurchases purchases={recentPurchases} />
        </div>

        {/* Top Selling Products */}
        <TopSellingProducts products={topSellingProducts} />
      </div>
    </>
  );
}