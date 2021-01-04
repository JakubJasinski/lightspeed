//export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default async function fetcher(...args) {
  const response = await fetch(...args);
  const responseJson = await response.json();
  return responseJson;
}
