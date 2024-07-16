import { Search, FilterAltSharp } from "@mui/icons-material";
import { Chip } from "@mui/material";
import "../styles/Lodging.css";
import LodgingCard from "../components/Lodging/LodgingCard";
import { useEffect, useState } from "react";
import PaginationComponent from "../components/PaginationComponent";
import lodgingInfos from "../data/lodgingData";
const LodgingPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const [innSelected, setInnSelection] = useState(false);
  const [resortSelected, setResortSelection] = useState(false);
  const [guesthouseSelected, setguesthouseSelection] = useState(false);
  const [hotelSelected, setHotelSelected] = useState(false);
  const [retreatSelected, setRetreatSelection] = useState(false);
  const [apartmentSelected, setApartmentSelection] = useState(false);
  const [lodgeSelected, setLodgeSelection] = useState(false);
 

  
  

  var filteredLodge = lodgingInfos.filter(
    (lodge) =>
      (hotelSelected && lodge.category === "Hotel") ||
      (innSelected && lodge.category === "Inn") ||
      (guesthouseSelected && lodge.category === "Guesthouse") ||
      (resortSelected && lodge.category === "Resort") ||
      (lodgeSelected && lodge.category === "Lodge") ||
      (retreatSelected && lodge.category === "Retreat") ||
      (apartmentSelected && lodge.category === "Apartment")
  );

  if (!hotelSelected && !innSelected && !guesthouseSelected && !resortSelected && !lodgeSelected && !retreatSelected && !apartmentSelected){
    filteredLodge = lodgingInfos;
  }

  const currentPageLodge = filteredLodge.slice((currentPage-1)*9,currentPage*9)
  const  totalPages =  Math.ceil(filteredLodge.length/9)

 

 



  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  

  const handleChipSelection = (type: string) => {
    console.log(hotelSelected);
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

  
    return (
      <div className="lodging-page">
        <div className="search">
          <Search />
          <input className="search-input" type="text" />
        </div>
        <div className="filter">
          <FilterAltSharp />
          <p>Filter</p>
        </div>
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

        <div className="lodgings">
          {currentPageLodge.map((lodging) => (
            <LodgingCard
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
      </div>
    );
};

export default LodgingPage;
