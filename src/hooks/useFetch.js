import useSWR from "swr";

const fetcher =async(url, token = "") => {
  const res =await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Something went wrong!");
  return res.json();
};

const useFetch = (endPoint, token = "") => {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_BASE_URL}${endPoint}`, 
    (url) => fetcher(url, token)
  );
  const isLoading = !data && !error;
  return { data, isLoading, error };
};

export default useFetch;
