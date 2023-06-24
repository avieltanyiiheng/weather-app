import fetchAPIData from "./fetchAPIData";

export default function getInputData() {
  const input = document.querySelector(".input");

  const APIdata = fetchAPIData(input.value);
  return APIdata;
}
