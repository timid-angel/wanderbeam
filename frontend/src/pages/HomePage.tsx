import Header from "../components/home_page/Header";
import ImageSection from "../components/home_page/ImageSection";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="max-h-full">
        <div className="absolute w-full">
          <Header />
        </div>
        <ImageSection />
      </div>
    </div>
  );
};

export default HomePage;
