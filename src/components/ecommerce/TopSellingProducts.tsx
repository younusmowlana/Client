interface TopProduct {
  productName: string;
  unitsSold: number;
  totalValue: number;
  category: string;
}

interface TopSellingProductsProps {
  products: TopProduct[];
}

export default function TopSellingProducts({ products }: TopSellingProductsProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-6 sm:pt-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg dark:bg-red-900/20">
            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Top Selling Products
          </h3>
        </div>
        <span className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full dark:bg-red-900/20 dark:text-red-400">
          This Month
        </span>
      </div>

      <div className="max-w-full overflow-x-auto px-5 pb-5 sm:px-6 sm:pb-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Rank
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Product Name
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Units Sold
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Total Value
                </span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Category
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center w-8 h-8 font-bold text-white bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
                    {index + 1}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {product.productName}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-900/20 dark:text-blue-400">
                    {product.unitsSold} units
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">
                    Rs. {product.totalValue.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
                    {product.category}
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