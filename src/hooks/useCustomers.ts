// hooks/useCustomers.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useCustomers = (currentPage: number, limit: number = 20) => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/customers?page=${currentPage}&limit=${limit}`)
      .then((res) => {
        setCustomers(res.data.data);
        setTotalPages(res.data.totalPages);
        setError(null);
      })
      .catch((err) => {
        setError('Failed to fetch customers');
        setCustomers([]);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  return { customers, totalPages, loading, error };
};

export const useCustomerSummaries = () => {
  const [genderSummary, setGenderSummary] = useState<any[]>([]);
  const [locationSummary, setLocationSummary] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [genderRes, locationRes] = await Promise.all([
          axios.get('http://localhost:3000/api/customers/gender'),
          axios.get('http://localhost:3000/api/customers/location'),
        ]);
        setGenderSummary(genderRes.data);
        setLocationSummary(locationRes.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch summaries');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { genderSummary, locationSummary, loading, error };
};
