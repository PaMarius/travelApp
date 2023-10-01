import axios from "axios";

export const getTravelData = async (locationName) => {
  const dataObjectKeyName = "Typeahead_autocomplete";
  const dataLocationKeyName = "Typeahead_LocationItem";
  const filterName = "__typename";
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
      {
        params: {
          query: locationName,
          lang: "en_US",
          units: "km",
        },

        headers: {
          "X-RapidAPI-Key":
            "7eb2a73fb5msh4f225a1fcbcbff8p12edbdjsn22a4a6a64e80",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    const locationsList = data[dataObjectKeyName].results.filter(
      (data) => data[filterName] === dataLocationKeyName
    );
    return locationsList;
  } catch (err) {
    return null;
  }
};
