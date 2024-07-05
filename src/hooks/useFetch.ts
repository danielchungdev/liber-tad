import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface FetchState<T> {
  data: T | null;
  error: AxiosError | null;
  loading: boolean;
}

const useFetch = <T = unknown>(initialOptions?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (url: string, options: AxiosRequestConfig = {}) => {
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await axios(url, { ...initialOptions, ...options });
      setData(response.data);
      setError(null);
      return response.data
    } catch (error) {
      setError(error as AxiosError);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [initialOptions]);

  return { data, error, loading, fetchData };
};

export default useFetch;