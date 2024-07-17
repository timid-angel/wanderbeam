import { Star } from "@mui/icons-material";
import { Chip } from "@mui/material";
import "../styles/Lodging.css";
import LodgingCard from "../components/Lodging/LodgingCard";
import { useState } from "react";
import PaginationComponent from "../components/core/PaginationComponent";
import lodgingInfos from "../data/lodgingData";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import SearchBar from "../components/core/SearchBar";
import Filter from "../components/core/Filter";
import EmptyIndicator from "../components/core/EmptyIndicator";
const LodgingPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [innSelected, setInnSelection] = useState(false);
  const [resortSelected, setResortSelection] = useState(false);
  const [guesthouseSelected, setguesthouseSelection] = useState(false);
  const [hotelSelected, setHotelSelected] = useState(false);
  const [retreatSelected, setRetreatSelection] = useState(false);
  const [apartmentSelected, setApartmentSelection] = useState(false);
  const [lodgeSelected, setLodgeSelection] = useState(false);
  const [current, setCurrent] = useState("");
  const [showFiter, setFilter] = useState(false);
  const [oneStar, setOneStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [fiveStar, setFiveStar] = useState(false);

  let filteredLodge = lodgingInfos.filter(
    (lodge) =>
      (hotelSelected && lodge.category === "Hotel") ||
      (innSelected && lodge.category === "Inn") ||
      (guesthouseSelected && lodge.category === "Guesthouse") ||
      (resortSelected && lodge.category === "Resort") ||
      (lodgeSelected && lodge.category === "Lodge") ||
      (retreatSelected && lodge.category === "Retreat") ||
      (apartmentSelected && lodge.category === "Apartment"),
  );

  if (
    !hotelSelected &&
    !innSelected &&
    !guesthouseSelected &&
    !resortSelected &&
    !lodgeSelected &&
    !retreatSelected &&
    !apartmentSelected
  ) {
    filteredLodge = lodgingInfos;
  }

  if (oneStar || twoStar || threeStar || fourStar || fiveStar) {
    if (oneStar) {
      filteredLodge = filteredLodge.filter(
        (lodge) => lodge.qualityRating === 1,
      );
    } else if (twoStar) {
      filteredLodge = filteredLodge.filter(
        (lodge) => lodge.qualityRating === 2,
      );
    } else if (threeStar) {
      filteredLodge = filteredLodge.filter(
        (lodge) => lodge.qualityRating === 3,
      );
    } else if (fourStar) {
      filteredLodge = filteredLodge.filter(
        (lodge) => lodge.qualityRating === 4,
      );
    } else {
      filteredLodge = filteredLodge.filter(
        (lodge) => lodge.qualityRating === 5,
      );
    }
  }

  filteredLodge = filteredLodge.filter((lodge) =>
    lodge.description.toLowerCase().includes(current.toLowerCase()),
  );
  const currentPageLodge = filteredLodge.slice(
    (currentPage - 1) * 9,
    currentPage * 9,
  );
  const totalPages = Math.ceil(filteredLodge.length / 9);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setCurrent(value);
  };

  const toggleFilter = () => {
    setFilter((prev) => !prev);
    console.log(showFiter);
  };

  const handleChipSelection = (type: string) => {
    if (type === "hotel") {
      setHotelSelected((prev) => !prev);
    } else if (type === "inn") {
      setInnSelection((prev) => !prev);
    } else if (type === "guesthouse") {
      setguesthouseSelection((prev) => !prev);
    } else if (type === "resort") {
      setResortSelection((prev) => !prev);
    } else if (type === "lodge") {
      setLodgeSelection((prev) => !prev);
    } else if (type === "apartment") {
      setApartmentSelection((prev) => !prev);
    } else if (type === "retreat") {
      setRetreatSelection((prev) => !prev);
    }
  };

  const starSelection = (star: number) => {
    if (star == 1) {
      setOneStar((prev) => !prev);
      setTwoStar(false);
      setThreeStar(false);
      setFourStar(false);
      setFiveStar(false);
    } else if (star == 2) {
      setTwoStar((prev) => !prev);
      setOneStar(false);
      setThreeStar(false);
      setFourStar(false);
      setFiveStar(false);
    } else if (star == 3) {
      setThreeStar((prev) => !prev);
      setTwoStar(false);
      setOneStar(false);
      setFourStar(false);
      setFiveStar(false);
    } else if (star == 4) {
      setFourStar((prev) => !prev);
      setTwoStar(false);
      setThreeStar(false);
      setOneStar(false);
      setFiveStar(false);
    } else if (star === 5) {
      setFiveStar((prev) => !prev);
      setTwoStar(false);
      setThreeStar(false);
      setFourStar(false);
      setOneStar(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={true} />
      <div className="lodging-container flex-grow flex flex-col">
        <div className="flex flex-col items-center mb-16">
          <div className="mt-24 max-w-2xl w-full flex justify-center items-center my-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <Filter onClick={toggleFilter} />
        {showFiter && (
          <div className="chips">
            <Chip
              onClick={() => {
                starSelection(1);
              }}
              label={<Star sx={{ color: "gold" }} />}
              variant={oneStar ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                starSelection(2);
              }}
              label={
                <>
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                </>
              }
              variant={twoStar ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                starSelection(3);
              }}
              label={
                <>
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                </>
              }
              variant={threeStar ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                starSelection(4);
              }}
              label={
                <>
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                </>
              }
              variant={fourStar ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                starSelection(5);
              }}
              label={
                <>
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                  <Star sx={{ color: "gold" }} />
                </>
              }
              variant={fiveStar ? "filled" : "outlined"}
            />
          </div>
        )}
        {showFiter && (
          <div className="chips">
            <Chip
              onClick={() => {
                handleChipSelection("hotel");
              }}
              label="Hotel"
              variant={hotelSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                handleChipSelection("inn");
              }}
              label="Inn"
              variant={innSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                handleChipSelection("guesthouse");
              }}
              label="Guesthouse"
              variant={guesthouseSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                handleChipSelection("resort");
              }}
              label="resort"
              variant={resortSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                handleChipSelection("lodge");
              }}
              label="lodge"
              variant={lodgeSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                handleChipSelection("retreat");
              }}
              label="retreat"
              variant={retreatSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => {
                handleChipSelection("apartment");
              }}
              label="apartment"
              variant={apartmentSelected ? "filled" : "outlined"}
            />
          </div>
        )}

        <div className="lodgings flex-grow flex justify-center items-center">
          {filteredLodge.length == 0 && <EmptyIndicator text="No Data" />}
          {currentPageLodge.map((lodging, index) => (
            <LodgingCard
              key={index}
              name={lodging.name}
              image={lodging.image}
              description={lodging.description}
              location={lodging.location}
              budgetPerNight={lodging.budgetPerNight}
              category={lodging.category}
              userRating={lodging.userRating}
              qualityRating={lodging.qualityRating}
            />
          ))}
        </div>
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <button className="detail-button">Choose Your Activities</button>
      </div>

      <Footer bg="" />
    </div>
  );
};

export default LodgingPage;
