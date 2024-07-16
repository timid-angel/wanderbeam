import { useEffect, useState } from "react";
import { getPlaces, PlaceData } from "../API/places";
import "../styles/output.css";
import SearchBar from "../components/core/SearchBar";
import Pagination from "../components/core/PaginationComponent";
import PlacesCard from "../components/Places/PlacesCard";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";

const PlacesPages = () => {
  const [places, setPlaces] = useState<PlaceData[] | null>(null);

  useEffect(() => {
    let fetchedPlaces = null;
    try {
      fetchedPlaces = getPlaces();
    } catch {
      console.log("error");
    }
    setPlaces(fetchedPlaces);
  }, []);

  function HandleSearch(searchTerm: string): void {
    if (!searchTerm) {
      throw new Error("Function not implemented.");
    }
  }

  return (
    <main className={"flex flex-col items-center"}>
      <Header></Header>
      <div
        className={
          " max-w-2xl w-full w-xl flex justify-center items-center my-4"
        }
      >
        <SearchBar onSearch={HandleSearch}></SearchBar>
      </div>
      {places && <PlacesCard data={places[0]}></PlacesCard>}
      {!places && <h1>No Items!</h1>}
      <Pagination
        totalPages={places ? places.length : 0}
        currentPage={0}
        onPageChange={() => {}}
      ></Pagination>
      <Footer bg="gray-100"></Footer>
    </main>
  );
};

export default PlacesPages;
