import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Paint Shop Dashboard 🎨
      </Typography>

      <Grid container spacing={3}>
        {/* Daily Sales */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Daily Sales"
            percent={12.5}
            total={187500}
            icon={<img alt="Daily Sales" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Today'],
              series: [145, 168, 192, 156, 210, 234, 198, 187],
            }}
          />
        </Grid>

        {/* Walk-in Customers */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Walk-in Customers"
            percent={8.2}
            total={47}
            color="secondary"
            icon={<img alt="Walk-in Customers" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Today'],
              series: [38, 42, 51, 39, 55, 62, 48, 47],
            }}
          />
        </Grid>

        {/* Items Sold */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Items Sold"
            percent={15.3}
            total={289}
            color="warning"
            icon={<img alt="Items Sold" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Today'],
              series: [234, 267, 298, 251, 312, 345, 276, 289],
            }}
          />
        </Grid>

        {/* Low Stock Alerts */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Low Stock Alerts"
            percent={-5.4}
            total={12}
            color="error"
            icon={<img alt="Low Stock Alerts" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Today'],
              series: [8, 9, 11, 14, 15, 13, 10, 12],
            }}
          />
        </Grid>

        {/* Sales by Paint Category */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentVisits
            title="Sales by Paint Category"
            chart={{
              series: [
                { label: 'Interior Emulsion', value: 4250 },
                { label: 'Exterior Weather Coat', value: 3100 },
                { label: 'Enamel & Wood Finish', value: 2850 },
                { label: 'Primer & Undercoat', value: 1800 },
              ],
            }}
          />
        </Grid>

        {/* Weekly Sales Trend */}
        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsWebsiteVisits
            title="Weekly Sales Trend"
            subheader="(+18%) than last week"
            chart={{
              categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
              series: [
                { name: 'Paint Sales', data: [145, 168, 192, 156, 210, 234, 198, 187, 175] },
                { name: 'Hardware Sales', data: [89, 95, 103, 88, 112, 125, 98, 94, 102] },
              ],
            }}
          />
        </Grid>

        {/* Top Selling Brands Performance */}
        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsConversionRates
            title="Top Selling Brands"
            subheader="(Units sold this month)"
            chart={{
              categories: ['Nippon Paint', 'Dulux', 'Asian Paints', 'Berger', 'Jotun'],
              series: [
                { name: 'Interior', data: [324, 267, 198, 156, 134] },
                { name: 'Exterior', data: [289, 234, 178, 145, 112] },
              ],
            }}
          />
        </Grid>

        {/* Stock Status by Brand */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentSubject
            title="Stock Status by Brand"
            chart={{
              categories: ['Nippon', 'Dulux', 'Asian Paints', 'Berger', 'Jotun', 'Local Brands'],
              series: [
                { name: 'In Stock', data: [85, 72, 68, 55, 48, 90] },
                { name: 'Low Stock', data: [12, 18, 22, 15, 8, 5] },
                { name: 'Out of Stock', data: [3, 10, 10, 30, 44, 5] },
              ],
            }}
          />
        </Grid>

        {/* Uncomment when needed for additional features */}
        {/* <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsNews title="Product Updates" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsOrderTimeline title="Recent Orders" list={_timeline} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsTrafficBySite title="Supplier Activity" list={_traffic} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsTasks title="Pending Tasks" list={_tasks} />
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}