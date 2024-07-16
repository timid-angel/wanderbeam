import boat from "../assets/boat+mountain.jpg";

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

// Helper function to generate a single PlaceData object
const generatePlaceData = (index: number): PlaceData => {
  return {
    location: `Location ${index}`,
    image: boat,
    hasHiking: Math.random() > 0.1,
    hasSkiing: Math.random() > 0.5,
    hasMuseum: Math.random() > 0.2,
    hasFestival: Math.random() > 0.5,
    hasZoo: Math.random() > 0.3,
  };
};

export const getPlaces = async (
  filters: FilterMap[] | null = [],
): PlaceData[] => {
  const demoData: PlaceData[] = [];
  for (let i = 0; i < 100; i++) {
    demoData.push(generatePlaceData(i + 1));
  }

  return demoData;
};
