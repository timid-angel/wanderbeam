import React from "react";
import { PlaceData } from "../../API/places";
import PlacesCard from "./PlacesCard";

interface PlacesListProps {
  places: PlaceData[];
}

const PlacesList: React.FC<PlacesListProps> = ({ places }) => {
  return (
    <>
      <div className="flex flex-wrap max-w-[1200px] gap-8">
        {places.map((data) => (
          <PlacesCard data={data} />
        ))}
      </div>
    </>
  );
};

export default PlacesList;
