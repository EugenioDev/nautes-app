import {useState, useEffect} from "react";

export const useFetch = (url,method='GET') => {
  const [data, setData] = useState(null)
  //const [option, setOption] = useState(null)

  useEffect(() => {
    const fetchData = async (fetchOptions) => {
      const req = await fetch(url,{...fetchOptions});
      const resp = await req.json();
      setData(resp)
    }
    if(method === 'GET'){
      fetchData();
    }
  }, [url,method]);
  return {data,setData}
}