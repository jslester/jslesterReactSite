import { useState, useEffect } from "react";
const useFetch = (props) => {
  const HTTP_TIMEOUT = 5000;
  const {url, skip} = props;
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if(skip){
      setIsPending(false);
      return;
    }
    const controller = new AbortController();
    fetch(url, {signal:controller.signal})
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if(err.name !== 'AbortError'){
          setIsPending(false);
          
          setError(err.message? err.message : err);
        }
        
      });
      return () => controller.abort();
  }, [url, skip]);
  return { data, isPending, error, setData };
};
export default useFetch;
