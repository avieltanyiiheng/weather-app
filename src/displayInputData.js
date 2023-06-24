import init from "./init";

export default function displayInputData(data) {
  const main = document.querySelector(".main");

  //   Dont remove the fucking input if its invalid
  if (data === undefined) {
    return;
  }

  //   execution code if its fucking valid bro ez mid
  main.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("content");

  const country = document.createElement("h3");
  country.classList.add("text");

  const temp = document.createElement("span");
  temp.classList.add("style");
  temp.textContent = `${data.current.temp_c}`;

  country.innerHTML = `

  <img src =${data.current.condition.icon} />
    <p class="display">
      It is currently <span class="gradient">${temp.textContent}</span> degrees 
      in <span class="gradient">${data.location.country}</span>.
    </p>
    
    <p class = "display">
      The sky is <span class="gradient">${data.current.condition.text}</span>, and it fcking feels
      like <span class = "gradient">${data.current.feelslike_c} degrees </span>.
    </p>
    `;

  const tryNewCountryButton = document.createElement("button");

  tryNewCountryButton.addEventListener("click", init);

  tryNewCountryButton.textContent = "Search for another Country";
  div.append(country);
  main.append(div, tryNewCountryButton);
}
