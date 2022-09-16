import useSWR from 'swr';
const API_URL = '/';

const response = (...args) => fetch(...args).then((res) => res.json());

export default function useFetcher(endpoint) {
  const { data, error } = useSWR(`${API_URL}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
