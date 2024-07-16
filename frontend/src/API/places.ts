export interface FilterMap {
  [field: string]: string;
}

export interface PlaceData {
  // Until the data needed is required
  name: string;
}

export function getPlaces(filters: FilterMap[]): PlaceData[] {
  // Example return data matching the expected type
  if (filters != null) {
    return [{ name: "Harar" }];
  }

  return [{ name: "Harar" }];
}
