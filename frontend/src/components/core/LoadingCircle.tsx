import { ring } from "ldrs";
ring.register();

const LoadingCircle = () => {
  return (
    <div className="flex justify-center items-center flex-grow h-max">
      <l-ring
        size="40"
        stroke="5"
        bg-opacity="0"
        speed="2"
        color="blue"
      ></l-ring>
    </div>
  );
};

export default LoadingCircle;
