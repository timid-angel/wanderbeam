import { StepContent } from "./Steps";

interface Props {
  imagePosition: "left" | "right";
  rowContent: StepContent;
}

const StepRow = ({ imagePosition, rowContent }: Props) => {
  return (
    <div
      className={`py-3 flex ${
        imagePosition === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-full flex items-center justify-center">
        <img
          src={rowContent.image}
          alt={rowContent.title}
          className="w-[670px] h-[376px] rounded-lg shadow-xl"
        />
      </div>
      <div className="px-8 w-full flex flex-col items-center justify-center">
        <h3 className="text-[45px] tracking-tight font-light">
          {rowContent.title}
        </h3>
        <p className="text-[1.55rem] text-center font-light">
          {rowContent.content}
        </p>
      </div>
    </div>
  );
};

export default StepRow;
