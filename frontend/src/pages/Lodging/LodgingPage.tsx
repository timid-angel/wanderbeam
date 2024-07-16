import { Search, FilterAltSharp } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { PageviewTwoTone } from "@mui/icons-material";
import "./Lodging.css";
import LodgingCard from "../../components/Lodging/LodgingCard";
import { useState } from "react";
import PaginationComponent from "../../components/PaginatinComponent";
const LodgingPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
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
        <LodgingCard/>
        <LodgingCard/>
        <LodgingCard/>
        <LodgingCard/>
        <LodgingCard/>
        <LodgingCard/>
        <LodgingCard/>
        <LodgingCard/>
        <LodgingCard/>
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
