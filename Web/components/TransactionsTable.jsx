import React from "react";

const transactions = []; // Replace with your transaction data

function TransactionsTable() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:flex sm:flex-row">
              <th className="px-6 py-3 whitespace-nowrap sm:w-1/4">
                Transaction Date
              </th>
              <th className="px-6 py-3 whitespace-nowrap sm:w-1/4">
                Transaction ID
              </th>
              <th className="px-6 py-3 whitespace-nowrap sm:w-1/4">
                Device ID
              </th>
              <th className="px-6 py-3 whitespace-nowrap sm:w-1/6">
                Amount
              </th>
              <th className="px-6 py-3 whitespace-nowrap sm:w-1/6">
                Fee
              </th>
              <th className="px-6 py-3 whitespace-nowrap sm:w-1/6">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr key={transaction.id} className="text-left text-sm text-gray-900 sm:flex sm:flex-row">
                  <td className="px-6 py-4 whitespace-nowrap sm:w-1/4">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap sm:w-1/4">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap sm:w-1/4">
                    {transaction.deviceId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap sm:w-1/6">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap sm:w-1/6">
                    {transaction.fee}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap sm:w-1/6">
                    {transaction.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  No Transactions made yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsTable;
