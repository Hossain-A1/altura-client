import React from "react";
import useFetch from "../hooks/useFetch";

const Kids = () => {
  const { data, isLoading, error } = useFetch("/api/products");

  // Check if data is still loading or if there's an error
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Once data is available, log it
  console.log(data);

  // Render your component based on the fetched data
  return <div>Kids</div>;
};

export default Kids;
