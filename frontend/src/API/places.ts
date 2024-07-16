import boat from "../assets/boat+mountain.jpg";

export interface FilterMap {
  [field: string]: string;
}

export interface PlaceData {
  // Until the data needed is required
  location: string;
  image: string;
  hasHiking: boolean;
  hasSkiing: boolean;
  hasFestival: boolean;
  hasMuseum: boolean;
  hasZoo: boolean;
}

export function getPlaces(filters: FilterMap[] | null = []): PlaceData[] {
  // Example return data matching the expected type
  if (filters != null) {
    return [
      {
        location: "Harar",
        image: boat,
        hasHiking: true,
        hasSkiing: true,
        hasMuseum: true,
        hasFestival: true,
        hasZoo: true,
      },
    ];
  }

  return [
    {
      location: "Harar",
      image: boat,
      hasHiking: true,
      hasSkiing: true,
      hasMuseum: true,
      hasFestival: true,
      hasZoo: true,
    },
  ];
}
