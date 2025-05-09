import { Customer } from "@/types/Customer";

type Props = {
  customers: Customer[];
};

const CustomerTable: React.FC<Props> = ({ customers }) => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gradient-to-r from-blue-50 to-blue-100">
          <tr>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 uppercase tracking-wider">Name</th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 uppercase tracking-wider">Age</th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 uppercase tracking-wider">Email</th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 uppercase tracking-wider">Location</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {customers.map((cust, i) => (
            <tr
              key={i}
              className={`transition-all duration-200 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50`}
            >
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">{cust.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">{cust.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">{cust.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap text-blue-700 underline hover:text-blue-500 cursor-pointer">
                {cust.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full capitalize">
                  {cust.locationType}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
