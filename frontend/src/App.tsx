import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HistoryPage from "./pages/HistoryPage";
import LodgingPage from "./pages/Lodging/LodgingPage";

const App = () => {
  return (
    <div>
      <Header/>
      <LodgingPage />
      <Footer/>
    </div>
  );
};

export default App;
