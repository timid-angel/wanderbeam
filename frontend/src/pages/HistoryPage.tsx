import Copyright from "../components/core/Copyright";
import Footer from "../components/core/Footer";
import HistoryHeader from "../components/history_page/HistoryHeader";
import SummaryCard from "../components/history_page/SummaryCard";

const HistoryPage = () => {
  return (
    <div className="flex flex-col justify-between min-w-full">
      <div className="w-full">
        <HistoryHeader />
      </div>

      <Copyright />
    </div>
  );
};

export default HistoryPage;
