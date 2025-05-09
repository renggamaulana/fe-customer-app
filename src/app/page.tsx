"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerTable from '../components/CustomerTable';
import SummaryChart from '../components/SummaryChart';
import Pagination from '@/components/Pagination';

import Image from 'next/image';
import noData from "images/no-data.png"

const Home = () => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genderSummary, setGenderSummary] = useState<any[]>([]);
  const [locationSummary, setLocationSummary] = useState<any[]>([]);
  const [error, setError] = useState(false);

  const limit = 20;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customerRes, genderRes, locationRes] = await Promise.all([
          axios.get(`${baseUrl}/customers?page=${currentPage}&limit=${limit}`),
          axios.get(`${baseUrl}/customers/gender`),
          axios.get(`${baseUrl}/customers/location`),
        ]);

        setCustomers(customerRes.data.data);
        setTotalPages(customerRes.data.totalPages);
        setGenderSummary(genderRes.data);
        setLocationSummary(locationRes.data);
        setError(false);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(true);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 space-y-8 backdrop-blur-sm">
      <h1 className="text-3xl font-bold text-center text-blue-800 drop-shadow-md">
        Customer Dashboard
      </h1>

      {error ? (
        <div className="flex flex-col items-center justify-center gap-4 text-center mt-12">
          <Image
            src="/images/no-data.png"
            alt="Error"
            width={150}
            height={150}
          />
          <p className="text-xl text-red-500 font-semibold">
            Oops! Failed to load data. Please check your connection or try again later.
          </p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <SummaryChart data={genderSummary} title="Gender Distribution" />
            <SummaryChart data={locationSummary} title="Location Distribution" />
          </div>

          <div className="glass-card p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer List</h2>
            <CustomerTable customers={customers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
