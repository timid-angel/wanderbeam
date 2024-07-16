import { FaArrowLeft } from "react-icons/fa";

const HistoryHeader = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-2 px-4 py-2">
        <FaArrowLeft className="text-slate-600" size={24} />
        <p className="text-[28px] font-semibold text-slate-600">Back to Home</p>
      </div>
    </div>
  );
};

export default HistoryHeader;
