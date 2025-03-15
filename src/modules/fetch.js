const WEATHER_API_KEY = "EGNB9D9XQ478AQ8M7AM5KHGJG";
const GIF_API_KEY = "TixtHIkhvUddOBfUpMTSgHRcTfjEjwFI";

let getData = async function (location) {
  try {
    let endpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=${WEATHER_API_KEY}&contentType=json`;

    let rawData = await fetch(endpoint, {
      mode: "cors",
    });

    return await rawData.json();
  } catch (error) {
    console.log(error);
  }
};

let getGifUrl = async function (searchTerm) {
  const gifData = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${GIF_API_KEY}&s=${searchTerm} weather`,
    { mode: "cors" }
  );

  const gifDataJson = await gifData.json()

  console.log(gifDataJson);

  return gifDataJson.data.images.original.url;
};

export {getData, getGifUrl};
