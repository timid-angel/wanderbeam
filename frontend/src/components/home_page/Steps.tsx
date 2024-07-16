import mountains from "../../assets/mountain_steps.jpg";
import hotel from "../../assets/hotel.jpg";
import fireworks from "../../assets/fireworks.jpeg";
import StepRow from "./StepRow";

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
  return (
    <div className="flex flex-col py-4">
      <h2 className="text-[52px] text-center text-slate-900 py-2">
        Want to know how you can build your own itinerary?
      </h2>
      <div className="flex flex-col gap-4 py-2">
        {cardContent.map((item, index) => (
          <StepRow
            rowContent={item}
            imagePosition={index % 2 === 1 ? "right" : "left"}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
