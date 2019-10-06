import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosGet = initialUrl => {
  const [data, setData] = useState('');
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (err) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useAxiosGet;
