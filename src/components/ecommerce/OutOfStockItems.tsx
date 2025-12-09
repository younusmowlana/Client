interface OutOfStockItem {
  productName: string;
  sku: string;
  volume: string;
}

interface OutOfStockItemsProps {
  items: OutOfStockItem[];
}

export default function OutOfStockItems({ items }: OutOfStockItemsProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-6 sm:pt-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg dark:bg-red-900/20">
            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Out of Stock Products
          </h3>
        </div>
        <span className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full dark:bg-red-900/20 dark:text-red-400">
          {items.length} Items
        </span>
      </div>

      <div className="max-w-full overflow-x-auto px-5 pb-5 sm:px-6 sm:pb-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Product Name
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  SKU
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Volume
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Status
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
              >
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {item.productName}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.sku}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.volume}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-red-700 bg-red-100 rounded-lg dark:bg-red-900/20 dark:text-red-400">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Needs Restock Immediately
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