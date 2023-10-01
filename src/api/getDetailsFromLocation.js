export const getDetailsFromLocation = (locations) => {
  let locationDetails = [];
  locations.map((location) => {
    locationDetails.push({
      title: location.detailsV2?.names?.name,
      duration: `${Math.floor(Math.random() * (20 - 2 + 1)) + 2} Days`,
      distance: `${Math.floor(Math.random() * (1000 - 151 + 1)) + 151} KM`,
      weather: `${Math.floor(Math.random() * (40 - 10 + 1)) + 10} C`,
      price: Math.floor(Math.random() * (3000 - 500 + 1)) + 500,
      shortDescription:
        "Live the experience of your life on this wonderful journey.",
      longDescription:
        "This location is full of places to visit. Don't miss this chance to live the most unique moments in this amazing location. Join us and discover the wonderful landscapes.",
      image:
        location.image?.photo?.photoSizes[
          location.image?.photo?.photoSizes.length - 2
        ].url,
    });
  });
  return locationDetails;
};
