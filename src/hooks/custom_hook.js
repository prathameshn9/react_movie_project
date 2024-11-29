import { useEffect, useState, useMemo } from "react";

export const CustomHook = (api, query = "") => {
  const [data, setData] = useState([]);

  // Memoize the options object to avoid unnecessary re-creations
  const options = useMemo(() => ({
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDQ0YTc3MTVmNTdhZWIwMDM0YjU3Zjg3ZTQwNmZiOCIsIm5iZiI6MTczMjc4NzEzNS42NTIwNzc3LCJzdWIiOiI2NzQ4Mzg5YjFkMGI1YjNmYjgzM2Y0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0FPQg_q3wfCysbSx8kxAFafgyGr4J5sSkLVJPT9pZkc",
    },
  }), []); // Empty dependency array means 'options' will only be created once

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/${api}?query=${query}`;
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Check The Api");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [api, query, options]); // 'options' is now memoized and doesn't change unnecessarily

  return { data };
};
