import React from "react";
import { PlaceData } from "../../API/places";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import DownhillSkiingOutlinedIcon from "@mui/icons-material/DownhillSkiingOutlined";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import MuseumOutlinedIcon from "@mui/icons-material/MuseumOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import { SvgIconComponent } from "@mui/icons-material";

interface ActivityBadgeProps {
  Icon: SvgIconComponent;
  label: string;
}

const ActivityBadge: React.FC<ActivityBadgeProps> = ({ Icon, label }) => {
  return (
    <div className="px-2 py-1 flex rounded-xl gap-2 border-[1px] border-cyan-500">
      <Icon className="text-cyan-500" />
      <h3 className="tracking-wider font-normal">{label}</h3>
    </div>
  );
};

const PlacesCard = (props: { data: PlaceData }) => {
  const { data } = props;

  return (
    <section className="rounded-xl relative flex max-w-[32rem]">
      <img
        src={data.image}
        alt={`${data.location} view`}
        className="w-full rounded-xl"
      />
      <div className="w-full p-4 min-h-48 absolute z-10 bottom-0">
        <div className="p-2 w-full min-h-48 h-full bg-white rounded-xl">
          <div className="mb-8 flex justify-center items-center">
            <LocationOnOutlinedIcon className="text-cyan-500" />
            <h2 className="text-center text-2xl uppercase tracking-wider">
              {data.location}
            </h2>
          </div>
          <div className="flex px-8 gap-6 flex-wrap justify-center">
            {data.hasHiking && (
              <ActivityBadge Icon={HikingOutlinedIcon} label="Hiking" />
            )}
            {data.hasSkiing && (
              <ActivityBadge Icon={DownhillSkiingOutlinedIcon} label="Skiing" />
            )}
            {data.hasMuseum && (
              <ActivityBadge Icon={MuseumOutlinedIcon} label="Museum" />
            )}
            {data.hasFestival && (
              <ActivityBadge Icon={FestivalOutlinedIcon} label="Festival" />
            )}
            {data.hasZoo && (
              <ActivityBadge Icon={PetsOutlinedIcon} label="Zoo" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesCard;
