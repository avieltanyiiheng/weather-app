import searchForWeatherButtonFunctionality from "./searchForWeatherButton";
import getInputData from "./getInputData";
import fetchAPIData from "./fetchAPIData";

export default function init() {
  const main = document.querySelector(".main");

  main.innerHTML = "";

  const inputField = document.createElement("input");
  inputField.classList.add("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("placeholder", "Input Country...");

  const executeButton = document.createElement("button");
  executeButton.classList.add("button");
  executeButton.textContent = "Search for Weather Details";

  main.append(inputField, executeButton);

  main.classList.add("search");

  searchForWeatherButtonFunctionality();
}
