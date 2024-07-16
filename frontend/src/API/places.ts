import boat from "../assets/boat+mountain.jpg";
import mountain from "../assets/river+mountain.jpg";
import city from "../assets/city.jpg";

export interface FilterMap {
  [field: string]: string;
}

export interface PlaceData {
  location: string;
  image: string;
  hasHiking: boolean;
  hasSkiing: boolean;
  hasFestival: boolean;
  hasMuseum: boolean;
  hasZoo: boolean;
}
const images = [boat, mountain, city];

// Helper function to generate a single PlaceData object
const generatePlaceData = (index: number): PlaceData => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return {
    location: `Location ${index}`,
    image: randomImage,
    hasHiking: Math.random() > 0.1,
    hasSkiing: Math.random() > 0.5,
    hasMuseum: Math.random() > 0.2,
    hasFestival: Math.random() > 0.5,
    hasZoo: Math.random() > 0.3,
  };
};

export const getPlaces = async (
  filters: FilterMap | null = {},
  searchTerm: string = "",
): Promise<PlaceData[]> => {
  const demoData: PlaceData[] = [];
  for (let i = 0; i < 100; i++) {
    demoData.push(generatePlaceData(i + 1));
  }
  console.log(searchTerm);
  // Apply filters
  const filteredData = demoData.filter((place) => {
    for (const key in filters) {
      if (
        key === "location" &&
        !place.location.toLowerCase().includes(filters[key].toLowerCase())
      ) {
        return false;
      }
      if (key === "hasHiking" && filters[key] === "true" && !place.hasHiking) {
        return false;
      }
      if (key === "hasSkiing" && filters[key] === "true" && !place.hasSkiing) {
        return false;
      }
      if (
        key === "hasFestival" &&
        filters[key] === "true" &&
        !place.hasFestival
      ) {
        return false;
      }
      if (key === "hasMuseum" && filters[key] === "true" && !place.hasMuseum) {
        return false;
      }
      if (key === "hasZoo" && filters[key] === "true" && !place.hasZoo) {
        return false;
      }
    }
    return searchTerm === ""
      ? true
      : place.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return filteredData;
};
