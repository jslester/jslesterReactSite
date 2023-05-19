import  { useState, useEffect } from 'react';
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://jslester.com/food/server")
            .then(res => {
                return res.json()
            }) 
            .then((result) => { 
                setData(result);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                setIsPending(true);
                setError(err.message);
            })
            
    }, [url]);
    return { data, isPending, error, setData };
    
}
export default useFetch;