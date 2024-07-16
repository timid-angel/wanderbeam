import emptyImg from "../../assets/empty.png";

interface Props {
  text: string;
}

const EmptyIndicator = ({ text }: Props) => {
  return (
    <div className="h-max flex-grow flex flex-col justify-center items-center">
      <img src={emptyImg} alt="Empty Indicator" className="w-[248px]" />
      <p className="italic text-lg text-slate-600">{text}</p>
    </div>
  );
};

export default EmptyIndicator;
