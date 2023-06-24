import fetchAPIData from "./fetchAPIData";
import displayInputData from "./displayInputData";
import getInputData from "./getInputData";

export default function searchForWeatherButtonFunctionality() {
  const button = document.querySelector(".button");

  button.addEventListener("click", async () => {
    const APIdata = await getInputData();
    console.log(APIdata);
    displayInputData(APIdata);

    // displayInputData();
  });
}
