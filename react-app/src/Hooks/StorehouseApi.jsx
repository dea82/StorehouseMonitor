import { useEffect, useState } from "react";

const API_VERSION = "/v1";

export default function useStorehouseApi(initialUrl, initialData) {
  const API = process.env.REACT_APP_API_HOST + API_VERSION;
  const [url, setUrl] = useState(API + initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError, setUrl };
}
