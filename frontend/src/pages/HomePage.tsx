import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import ImageSection from "../components/home_page/ImageSection";
import Steps from "../components/home_page/Steps";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="max-h-full relative">
        <div className="absolute w-full">
          <Header />
        </div>
        <ImageSection />
      </div>
      <Steps />
      <Footer />
    </div>
  );
};

export default HomePage;
