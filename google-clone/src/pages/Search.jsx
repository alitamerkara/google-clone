import React from "react";
import { newContext } from "../Context";
import SearchGoogleHook from "../SearchGoogleHook";

const Search = () => {
  const { input } = newContext();
  const { data } = SearchGoogleHook(input);
  console.log(data);
  return <div>This is the Search Page {input}</div>;
};

export default Search;
