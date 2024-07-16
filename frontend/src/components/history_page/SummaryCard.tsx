import { HistoryData } from "../../API/history";
import {
  FaLocationDot,
  FaCalendarDays,
  FaPersonSkating,
  FaStar,
} from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { MdAttractions } from "react-icons/md";
import { formatDate } from "../../utils/formatDate";
import { Chip } from "@mui/material";

const getIconFromCategory = (iconCategory: string) => {
  const color = "#31849E";
  switch (iconCategory) {
    case "outdoor":
      return <FaPersonSkating color={color} />;

    case "culture":
      return <FaStar color={color} />;

    case "music":
      return <IoMusicalNotes color={color} />;

    default:
      return <MdAttractions color={color} />;
  }
};

const SummaryCard = (data: HistoryData) => {
  const { location, date, activities, hotel, picture } = data;

  return (
    <div className="mx-auto w-[390px] h-[496px] rounded-2xl overflow-hidden relative bg-red-300 flex flex-col justify-end items-center ease-in-out scale-[1] transition duration-500 hover:scale-[1.02] hover:transition-all hover:ease-in-out hover:duration-300">
      <div className="w-[370px] h-[188px] bg-slate-100 opacity-95 z-10 rounded-3xl mb-3 flex flex-col items-center">
        <div className="flex justify-center gap-2 items-center pt-1">
          <FaLocationDot color={"#31849E"} size={20} />
          <p className="text-2xl">{location}</p>
        </div>
        <p className="text-lg font-semibold text-slate-700">{hotel}</p>
        <div className="px-2 py-1 text-[#31849E] rounded-xl shadow-sm flex gap-2 bg-slate-50 items-center">
          <FaCalendarDays />
          <p>{formatDate(date)}</p>
        </div>
        <div className="flex flex-wrap gap-2 px-5 pt-3 items-center justify-center">
          {activities.map((item, index) => (
            <Chip
              key={index}
              icon={getIconFromCategory(item.iconCategory)}
              label={item.name}
              variant="outlined"
            />
          ))}
        </div>
      </div>
      <img
        src={picture}
        alt={location}
        className="absolute object-fit w-full h-full"
      />
    </div>
  );
};

export default SummaryCard;
