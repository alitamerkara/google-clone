import React, { useState, useEffect } from "react";

const SearchGoogleHook = (input) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getApi = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAR_kTV2DQwNxD4sEzCSXFXMWyUtLG-9Po&cx=e6477c8f850364570&q=${input}`
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
