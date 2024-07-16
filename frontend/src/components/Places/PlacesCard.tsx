import { PlaceData } from "../../API/places";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import DownhillSkiingOutlinedIcon from "@mui/icons-material/DownhillSkiingOutlined";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import MuseumOutlinedIcon from "@mui/icons-material/MuseumOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

const Hiking = (
  <div className="px-2 py-1 flex rounded-xl gap-2   border-[1px] border-cyan-500">
    <HikingOutlinedIcon className="text-cyan-500"></HikingOutlinedIcon>
    <h3 className="tracking-wider font-normal">Hiking</h3>
  </div>
);

const Skiing = (
  <div className="px-2 py-1 flex rounded-xl gap-2   border-[1px] border-cyan-500">
    <DownhillSkiingOutlinedIcon className="text-cyan-500"></DownhillSkiingOutlinedIcon>
    <h3 className="tracking-wider font-normal">Skiing</h3>
  </div>
);

const Festival = (
  <div className="px-2 py-1 flex rounded-xl gap-2   border-[1px] border-cyan-500">
    <FestivalOutlinedIcon className="text-cyan-500"></FestivalOutlinedIcon>
    <h3 className="tracking-wider font-normal">Festival</h3>
  </div>
);

const Museum = (
  <div className="px-2 py-1 flex rounded-xl gap-2   border-[1px] border-cyan-500">
    <MuseumOutlinedIcon className="text-cyan-500"></MuseumOutlinedIcon>
    <h3 className="tracking-wider font-normal">Museum</h3>
  </div>
);

const Zoo = (
  <div className="px-2 py-1 flex rounded-xl gap-2   border-[1px] border-cyan-500">
    <PetsOutlinedIcon className="text-cyan-500"></PetsOutlinedIcon>
    <h3 className="tracking-wider font-normal">Zoo</h3>
  </div>
);

const PlacesCard = (props: { data: PlaceData }) => {
  return (
    <section className="rounded-xl relative flex max-w-xl">
      <img
        src={props.data.image}
        alt={`${props.data.location} view`}
        className="w-full rounded-xl"
      />
      <div className="w-full p-4  min-h-48 absolute z-10 bottom-0">
        <div className="p-2 w-full min-h-48 h-full bg-white rounded-xl">
          <div className="mb-8 flex justify-center items-center ">
            <LocationOnOutlinedIcon
              className={"text-cyan-500"}
            ></LocationOnOutlinedIcon>
            <h2 className="text-center text-2xl uppercase tracking-wider ">
              {props.data.location}
            </h2>
          </div>
          <div className={"flex px-8 gap-6 flex-wrap justify-center"}>
            {props.data.hasHiking && <div>{Hiking}</div>}
            {props.data.hasSkiing && <div>{Skiing}</div>}

            {props.data.hasMuseum && <div>{Museum}</div>}
            {props.data.hasFestival && <div>{Festival}</div>}
            {props.data.hasZoo && <div>{Zoo}</div>}
            <div>{Zoo}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlacesCard;
