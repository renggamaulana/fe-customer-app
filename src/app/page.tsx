// app/page.tsx atau app/Home.tsx
"use client";

import { useState } from 'react';
import { useCustomers, useCustomerSummaries } from '@/hooks/useCustomers';
import CustomerTable from '@/components/CustomerTable';
import SummaryChart from '@/components/SummaryChart';
import Pagination from '@/components/Pagination';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { customers, totalPages, loading: loadingCustomers, error: errorCustomers } = useCustomers(currentPage);
  const { genderSummary, locationSummary, loading: loadingSummaries, error: errorSummaries } = useCustomerSummaries();

  return (
    <main className="min-h-screen bg-gray-50 p-6 space-y-8">
      <h1 className="text-2xl font-bold">Customer Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {loadingSummaries ? (
          <p>Loading charts...</p>
        ) : errorSummaries ? (
          <p className="text-red-600">{errorSummaries}</p>
        ) : (
          <>
            <SummaryChart data={genderSummary} title="Gender Distribution" />
            <SummaryChart data={locationSummary} title="Location Type Distribution" />
          </>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Customer List</h2>

        {loadingCustomers ? (
          <p>Loading customers...</p>
        ) : errorCustomers ? (
          <p className="text-red-600">{errorCustomers}</p>
        ) : customers.length === 0 ? (
          <p>No customer data available.</p>
        ) : (
          <>
            <CustomerTable customers={customers} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
