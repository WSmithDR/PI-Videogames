import { useState, useEffect } from "react";
import axios from "axios";

const useData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url)
      .then(({ data }) => {
        const names = data.map((item) => item.name);
        setData(names);
      });
  }, [url]);

  return data;
};

export default useData;
