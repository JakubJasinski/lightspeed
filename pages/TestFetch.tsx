import useQulifications from "../app/hooks/useQualification";

export default function TestFunction() {
  const { qualification, isLoading, isError } = useQulifications(2008);

  console.log("--> qualification", qualification, isLoading, isError);

  return <h1>testFetch</h1>;
}
