import mountains from "../../assets/mountain_steps.jpg";
import hotel from "../../assets/hotel.jpg";
import fireworks from "../../assets/fireworks.jpeg";
import StepRow from "./StepRow";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export type StepContent = {
  title: string;
  content: string;
  image: string;
};

const cardContent: StepContent[] = [
  {
    title: "Choose your destination",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus tortor in dolor lacinia, in cursus sem sollicitudin. Ut massa dui, fermentum a maximus non.",
    image: mountains,
  },
  {
    title: "Choose where you'll stay",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus tortor in dolor lacinia, in cursus sem sollicitudin. Ut massa dui, fermentum a maximus non.",
    image: hotel,
  },
  {
    title: "Choose what you'll do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus tortor in dolor lacinia, in cursus sem sollicitudin. Ut massa dui, fermentum a maximus non.",
    image: fireworks,
  },
];

const Steps = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col py-4">
      <h2 className="text-[52px] text-center text-slate-900 py-2">
        Want to know how you can build your own itinerary?
      </h2>
      <div className="flex flex-col gap-4 py-2 px-5">
        {cardContent.map((item, index) => (
          <StepRow
            rowContent={item}
            imagePosition={index % 2 === 1 ? "right" : "left"}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center py-5">
        <p className="text-4xl text-slate-900">And that's it!</p>
        <div
          onClick={() => {
            navigate("/places");
          }}
          className="relative cursor-pointer"
        >
          <p className="text-2xl font-semibold text-[#0057FF]">
            Start planning your next trip now!
          </p>
          <div className="absolute top-0 right-[-5%]">
            <FaExternalLinkAlt color="#0057FF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
