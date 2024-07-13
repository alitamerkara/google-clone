import React, { useState, useEffect } from "react";

const SearchGoogleHook = (input) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getApi = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ACCESS_KEY}=${input}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    getApi();
  }, [input]);
  return { data };
};

export default SearchGoogleHook;
