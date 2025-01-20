import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {UserType} from '../components/User/types';
import {API} from '../constants/api';
import {ResponseType} from './types';

const PER_PAGE = 12;

export const useGetUsers = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response: ResponseType = await axios.get(API, {
        params: {per_page: PER_PAGE},
      });
      setData(response.data.data);
    } catch (err) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {data, loading, isError};
};
