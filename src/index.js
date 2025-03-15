import "./styles/styles.css";

import { getData, getGifUrl } from "./modules/fetch.js";
import getRelevantData from "./modules/parse.js";
import lottie from "lottie-web";
import loadingAnimation from "./assets/lottie/loading.json";

const searchBar = document.getElementById("location");
const searchButton = document.getElementById("search-button");
const locationDiv = document.querySelector("div.location");
const temperatureDiv = document.querySelector("div.temperature");
const descriptionDiv = document.querySelector("div.description");
const loadingDiv = document.querySelector("div.loading");
const gif = document.querySelector('div.gif > img');

lottie.loadAnimation({
  container: loadingDiv,
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
});

loadingDiv.classList.add("hidden");

searchButton.addEventListener("click", async function (e) {
  try {
    e.preventDefault();

    loadingDiv.classList.remove("hidden");

    locationDiv.textContent = "";
    temperatureDiv.textContent = "";
    descriptionDiv.textContent = "";
    gif.src = "";
    gif.classList.add('hidden');

    const location = searchBar.value;

    let jsonData = await getData(location);
    let relevantData = getRelevantData(jsonData);

    gif.src = await getGifUrl(relevantData.icon);
    gif.classList.remove('hidden');

    locationDiv.textContent = relevantData.location;
    temperatureDiv.textContent = relevantData.temperature + "°C";
    descriptionDiv.textContent = relevantData.description;
  } catch (error) {
    locationDiv.textContent = "Please enter a valid location!";
  } finally {
    loadingDiv.classList.add("hidden");
  }
});
