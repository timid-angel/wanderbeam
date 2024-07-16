import { Search, FilterAltSharp } from "@mui/icons-material";
import { Chip } from "@mui/material";
import "../styles/Lodging.css";
import LodgingCard from "../components/Lodging/LodgingCard";
import { useState } from "react";
import PaginationComponent from "../components/PaginationComponent";
import lodgingInfos from "../data/lodgingData";
const LodgingPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
        <Chip label="catagories" variant="outlined" />
        <Chip label="catagories" variant="outlined" />
        <Chip label="catagories" variant="outlined" />
        <Chip label="catagories" variant="outlined" />
        <Chip label="catagories" variant="outlined" />
      </div>

      <div className="lodgings">
        {lodgingInfos.map((lodging) => (
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
