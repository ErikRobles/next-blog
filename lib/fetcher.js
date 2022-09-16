import useSWR from 'swr';
const API_URL = 'http://localhost:3000/';

const response = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${API_URL}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
