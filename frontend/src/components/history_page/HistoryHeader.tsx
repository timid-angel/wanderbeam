import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HistoryHeader = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div
        className="flex justify-start items-center gap-4 px-4 py-2 cursor-pointer"
        onClick={goToHome}
      >
        <FaArrowLeft className="text-slate-600" size={26} />
        <p className="text-[26px] font-semibold text-slate-600">Back to Home</p>
      </div>
    </div>
  );
};

export default HistoryHeader;
