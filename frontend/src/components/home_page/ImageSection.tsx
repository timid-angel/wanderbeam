import moutains from "../../assets/mountains.jpg";

const ImageSection = () => {
  return (
    <div className="max-h-screen w-full">
      <img
        src={moutains}
        alt="Mountain landscape"
        className="object-fill w-full max-h-screen"
      />
      <div className="absolute flex flex-col bottom-20 left-20  items-center">
        <p className="text-[64px] italic font-semibold text-slate-50">
          Plan your travels
        </p>
        <div className="rounded-full px-8 py-3 bg-[#0057FF] text-[20px] hover:bg-[#0044ff] font-semibold text-slate-50 w-fit">
          Build Itinerary
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
