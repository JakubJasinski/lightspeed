import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useQulifications = (year) => {
  const { data, error } = useSWR(
    `https://ergast.com/api/f1/${year}/qualifying`,
    fetcher
  );
  return {
    qualification: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useQulifications;
