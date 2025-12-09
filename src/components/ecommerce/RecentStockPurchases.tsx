interface StockPurchase {
  supplier: string;
  invoiceNo: string;
  totalAmount: number;
  date: string;
  addedBy: string;
}

interface RecentStockPurchasesProps {
  purchases: StockPurchase[];
}

export default function RecentStockPurchases({ purchases }: RecentStockPurchasesProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-6 sm:pt-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg dark:bg-purple-900/20">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Stock Purchases
          </h3>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Last 10 Invoices
        </span>
      </div>

      <div className="max-w-full overflow-x-auto px-5 pb-5 sm:px-6 sm:pb-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Supplier
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Invoice No
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Total Amount
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Date
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Added By
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg dark:bg-purple-900/20">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {purchase.supplier}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {purchase.invoiceNo}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/90">
                    Rs. {purchase.totalAmount.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {purchase.date}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
                    {purchase.addedBy}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}