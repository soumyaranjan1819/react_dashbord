export interface PagesItems {
  id: string;
  label: string;
  icon: string;
  subItems: string[];
}

export interface CustomerData {
  count: number;
  percentageChange: string;
}

export interface StatsDataItem {
  id: number;
  title: string;
  value: string;
  growth: string;
  backgroundColor: string;
}

export interface ProjectionsVsActualsItems {
  month: string;
  value: number;
}

export interface RevenueGraphDataItems {
  month: string;
  currentWeek: number;
  previousWeek: number;
}

export interface RevenueByLocationItem {
  location: string;
  revenue: number;
}

export interface TopSellingProductsItems {
  name: string;
  price: number;
  quantity: number;
  amount: number;
}

export interface TotalSalesItems {
  type: string;
  amount: number;
  percentage: number;
}
