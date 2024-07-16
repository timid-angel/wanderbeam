import { useEffect, useState } from "react";
import { getPlaces, PlaceData } from "../API/places";
import "../styles/output.css";
import SearchBar from "../components/core/SearchBar";
import Pagination from "../components/core/PaginationComponent";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import PlacesList from "../components/Places/PlacesList";

const PlacesPages = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const fetchedPlaces = await getPlaces();
        setPlaces(fetchedPlaces);
      } catch (error) {
        console.log("Error fetching places:", error);
      }
    };
    fetchPlaces();
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handlePageChange = (newPage: number) => {
    // Implement your pagination logic here
    console.log(newPage);
    console.log(searchTerm);
  };

  return (
    <main className="flex flex-col items-center gap-24">
      <Header />
      <div className="mt-24 max-w-2xl w-full flex justify-center items-center my-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      {places.length > 0 ? <PlacesList places={places} /> : <h1>No Items!</h1>}
      <Pagination
        totalPages={places.length}
        currentPage={0}
        onPageChange={handlePageChange}
      />
      <Footer bg="gray-100" />
    </main>
  );
};

export default PlacesPages;
