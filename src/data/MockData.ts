// Mock Data for Paint Shop Dashboard

export const summaryData = {
  todaySales: 45320,
  monthSales: 1245890,
  stockValue: 3845000,
  lowStockCount: 12,
  outOfStockCount: 5,
  totalProducts: 287,
  pendingPayments: 125000,
  todayBills: 23,
};

export const lowStockItems = [
  {
    productName: "Asian Paints Apcolite Premium Emulsion",
    sku: "AP-EM-001",
    quantityAvailable: 3,
    reorderLevel: 10,
    lastPurchased: "2024-11-15",
    status: "critical" as const,
  },
  {
    productName: "Nippon Weatherbond Advanced",
    sku: "NP-WB-045",
    quantityAvailable: 5,
    reorderLevel: 15,
    lastPurchased: "2024-11-20",
    status: "critical" as const,
  },
  {
    productName: "Dulux Velvet Touch",
    sku: "DX-VT-123",
    quantityAvailable: 8,
    reorderLevel: 12,
    lastPurchased: "2024-11-25",
    status: "warning" as const,
  },
  {
    productName: "JAT Wall Putty 40kg",
    sku: "JAT-WP-040",
    quantityAvailable: 6,
    reorderLevel: 20,
    lastPurchased: "2024-11-18",
    status: "critical" as const,
  },
  {
    productName: "Multilac Synthetic Enamel",
    sku: "ML-SE-078",
    quantityAvailable: 9,
    reorderLevel: 15,
    lastPurchased: "2024-11-22",
    status: "warning" as const,
  },
];

export const outOfStockItems = [
  {
    productName: "Asian Paints Tractor Emulsion White",
    sku: "AP-TE-W20",
    volume: "20L",
  },
  {
    productName: "Nippon Matex Emulsion",
    sku: "NP-ME-004",
    volume: "4L",
  },
  {
    productName: "Berger Silk Luxury Emulsion",
    sku: "BG-SL-010",
    volume: "10L",
  },
  {
    productName: "Dulux Weathershield Max",
    sku: "DX-WM-020",
    volume: "20L",
  },
  {
    productName: "Kansai Nerolac Excel Total",
    sku: "KN-ET-004",
    volume: "4L",
  },
];

export const recentSales = [
  {
    invoiceNo: "INV-2024-1045",
    customerName: "Rajesh Kumar",
    totalAmount: 8500,
    paymentType: "card" as const,
    time: "2:45 PM",
    cashier: "Anil",
  },
  {
    invoiceNo: "INV-2024-1044",
    customerName: "Priya Sharma",
    totalAmount: 15200,
    paymentType: "cash" as const,
    time: "2:30 PM",
    cashier: "Sunil",
  },
  {
    invoiceNo: "INV-2024-1043",
    customerName: "Mohammed Aslam",
    totalAmount: 6750,
    paymentType: "card" as const,
    time: "1:55 PM",
    cashier: "Anil",
  },
  {
    invoiceNo: "INV-2024-1042",
    customerName: "Deepak Patel",
    totalAmount: 22400,
    paymentType: "cash" as const,
    time: "1:20 PM",
    cashier: "Ravi",
  },
  {
    invoiceNo: "INV-2024-1041",
    customerName: "Anita Desai",
    totalAmount: 9800,
    paymentType: "card" as const,
    time: "12:45 PM",
    cashier: "Sunil",
  },
  {
    invoiceNo: "INV-2024-1040",
    customerName: "Vijay Singh",
    totalAmount: 18500,
    paymentType: "cash" as const,
    time: "11:30 AM",
    cashier: "Anil",
  },
  {
    invoiceNo: "INV-2024-1039",
    customerName: "Lakshmi Iyer",
    totalAmount: 5600,
    paymentType: "card" as const,
    time: "11:00 AM",
    cashier: "Ravi",
  },
  {
    invoiceNo: "INV-2024-1038",
    customerName: "Ramesh Gupta",
    totalAmount: 12300,
    paymentType: "cash" as const,
    time: "10:15 AM",
    cashier: "Sunil",
  },
  {
    invoiceNo: "INV-2024-1037",
    customerName: "Sunita Kapoor",
    totalAmount: 7800,
    paymentType: "card" as const,
    time: "9:45 AM",
    cashier: "Anil",
  },
  {
    invoiceNo: "INV-2024-1036",
    customerName: "Karan Mehta",
    totalAmount: 16900,
    paymentType: "cash" as const,
    time: "9:10 AM",
    cashier: "Ravi",
  },
];

export const recentPurchases = [
  {
    supplier: "Asian Paints Ltd",
    invoiceNo: "ASP-2024-8945",
    totalAmount: 285000,
    date: "2024-12-05",
    addedBy: "Manager",
  },
  {
    supplier: "Nippon Paint India",
    invoiceNo: "NPI-2024-5623",
    totalAmount: 195000,
    date: "2024-12-03",
    addedBy: "Admin",
  },
  {
    supplier: "Berger Paints",
    invoiceNo: "BGP-2024-3421",
    totalAmount: 156000,
    date: "2024-12-02",
    addedBy: "Manager",
  },
  {
    supplier: "JAT Holdings",
    invoiceNo: "JAT-2024-7890",
    totalAmount: 89000,
    date: "2024-11-30",
    addedBy: "Admin",
  },
  {
    supplier: "Dulux Paints",
    invoiceNo: "DLX-2024-4567",
    totalAmount: 225000,
    date: "2024-11-28",
    addedBy: "Manager",
  },
  {
    supplier: "Multilac Pvt Ltd",
    invoiceNo: "MUL-2024-9012",
    totalAmount: 178000,
    date: "2024-11-27",
    addedBy: "Admin",
  },
  {
    supplier: "Kansai Nerolac",
    invoiceNo: "KNL-2024-6543",
    totalAmount: 245000,
    date: "2024-11-25",
    addedBy: "Manager",
  },
  {
    supplier: "Asian Paints Ltd",
    invoiceNo: "ASP-2024-8876",
    totalAmount: 310000,
    date: "2024-11-22",
    addedBy: "Admin",
  },
  {
    supplier: "Nippon Paint India",
    invoiceNo: "NPI-2024-5598",
    totalAmount: 168000,
    date: "2024-11-20",
    addedBy: "Manager",
  },
  {
    supplier: "JAT Holdings",
    invoiceNo: "JAT-2024-7821",
    totalAmount: 95000,
    date: "2024-11-18",
    addedBy: "Admin",
  },
];

export const topSellingProducts = [
  {
    productName: "Asian Paints Tractor Emulsion",
    unitsSold: 145,
    totalValue: 435000,
    category: "Emulsion",
  },
  {
    productName: "Nippon Weatherbond",
    unitsSold: 128,
    totalValue: 384000,
    category: "Exterior",
  },
  {
    productName: "JAT Wall Putty 40kg",
    unitsSold: 210,
    totalValue: 168000,
    category: "Wall Filler",
  },
  {
    productName: "Multilac Synthetic Enamel",
    unitsSold: 95,
    totalValue: 285000,
    category: "Enamel",
  },
  {
    productName: "Dulux Velvet Touch",
    unitsSold: 87,
    totalValue: 348000,
    category: "Premium",
  },
  {
    productName: "Berger Silk Luxury",
    unitsSold: 76,
    totalValue: 304000,
    category: "Emulsion",
  },
  {
    productName: "Kansai Nerolac Excel",
    unitsSold: 68,
    totalValue: 204000,
    category: "Interior",
  },
];


export const salesChartData = {
  daily: [28000, 32000, 25000, 38000, 42000, 35000, 45000],
  monthly: [185000, 245000, 198000, 312000, 268000, 295000],
};
