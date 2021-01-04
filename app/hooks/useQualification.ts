import useSWR from "swr";
import fetcher from "../fetcher";

const useQulifications = (year) => {
  //http://ergast.com/api/f1/2008/5/qualifying
  const fetchUrl = `https://ergast.com/api/f1/${year}/5/qualifying.html`;

  const { data, error } = useSWR(fetchUrl, fetcher);
  return {
    qualification: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useQulifications;
