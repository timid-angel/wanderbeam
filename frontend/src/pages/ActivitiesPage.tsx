import { Button, Chip } from "@mui/material";
import { useState } from "react";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import SearchBar from "../components/core/SearchBar";
import ActivityCard from "../components/activities/ActivityCard";
import PaginationComponent from "../components/core/PaginationComponent";
import Filter from "../components/core/Filter";
import "../styles/ActivitiesPage.css";
import { useNavigate } from "react-router-dom";
const activitiesData = [
  {
    name: "Swimming at the Beach",
    category: "Swimming",
    description: "July 23 - July 28",
    image: "activities/activity10.jpg",
  },
  {
    name: "Live Concert",
    category: "Concerts",
    description: "July 24 - July 29",
    image: "activities/activity1.jpg",
  },
  {
    name: "Mountain Hiking",
    category: "Hiking",
    description: "July 25 - July 30",
    image: "activities/activity5.jpg",
  },
  {
    name: "Camping in the Woods",
    category: "Camping",
    description: "July 26 - July 31",
    image: "activities/activity3.jpg",
  },
  {
    name: "Live Concert",
    category: "Concerts",
    description: "July 27 - August 1",
    image: "activities/activity4.jpg",
  },
  {
    name: "Museum Visit",
    category: "Visit",
    description: "July 28 - August 2",
    image: "activities/activity8.jpg",
  },
  {
    name: "Mountain Hiking",
    category: "Hiking",
    description: "July 29 - August 3",
    image: "activities/activit.jpg",
  },
  {
    name: "Swimming at the Beach",
    category: "Swimming",
    description: "July 30 - August 4",
    image: "activities/activity10.jpg",
  },
  {
    name: "Live Concert",
    category: "Concerts",
    description: "July 31 - August 5",
    image: "activities/activity1.jpg",
  },
  {
    name: "Mountain Hiking",
    category: "Hiking",
    description: "August 1 - August 6",
    image: "activities/activity5.jpg",
  },
  {
    name: "Camping in the Woods",
    category: "Camping",
    description: "August 2 - August 7",
    image: "activities/activity3.jpg",
  },
  {
    name: "Live Concert",
    category: "Concerts",
    description: "August 3 - August 8",
    image: "activities/activity4.jpg",
  },
  {
    name: "Museum Visit",
    category: "Visit",
    description: "August 4 - August 9",
    image: "activities/activity8.jpg",
  },
  {
    name: "Mountain Hiking",
    category: "Hiking",
    description: "August 5 - August 10",
    image: "activities/activit.jpg",
  },
];

const ActivitiesPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [current, setCurrent] = useState("");
  const [showFilter, setFilter] = useState(false);

  const [swimmingSelected, setSwimmingSelected] = useState(false);
  const [hikingSelected, setHikingSelected] = useState(false);
  const [campingSelected, setCampingSelected] = useState(false);
  const [concertsSelected, setConcertsSelected] = useState(false);
  const [visitSelected, setVisitSelected] = useState(false);
  let filteredActivities = activitiesData.filter(
    (activity) =>
      (swimmingSelected && activity.category === "Swimming") ||
      (hikingSelected && activity.category === "Hiking") ||
      (campingSelected && activity.category === "Camping") ||
      (concertsSelected && activity.category === "Concerts") ||
      (visitSelected && activity.category === "Visit"),
  );

  if (
    !swimmingSelected &&
    !hikingSelected &&
    !campingSelected &&
    !concertsSelected &&
    !visitSelected
  ) {
    filteredActivities = activitiesData;
  }

  filteredActivities = filteredActivities.filter((activity) =>
    activity.description.toLowerCase().includes(current.toLowerCase()),
  );

  const currentPageActivities = filteredActivities.slice(
    (currentPage - 1) * 9,
    currentPage * 9,
  );

  const totalPages = Math.ceil(filteredActivities.length / 9);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setCurrent(value);
  };

  const toggleFilter = () => {
    setFilter((prev) => !prev);
  };

  const handleChipSelection = (type: string) => {
    if (type === "swimming") {
      setSwimmingSelected((prev) => !prev);
    } else if (type === "hiking") {
      setHikingSelected((prev) => !prev);
    } else if (type === "camping") {
      setCampingSelected((prev) => !prev);
    } else if (type === "concerts") {
      setConcertsSelected((prev) => !prev);
    } else if (type === "visit") {
      setVisitSelected((prev) => !prev);
    }
  };

  return (
    <>
      <Header isAuthenticated={true} />

      <div className="activities-container">
        <div className="flex flex-col items-center mb-16">
          <div className="mt-24 max-w-2xl w-full flex justify-center items-center my-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <Filter onClick={toggleFilter} />

        {showFilter && (
          <div className="chips">
            <Chip
              onClick={() => handleChipSelection("swimming")}
              label="Swimming"
              variant={swimmingSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => handleChipSelection("hiking")}
              label="Hiking"
              variant={hikingSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => handleChipSelection("camping")}
              label="Camping"
              variant={campingSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => handleChipSelection("concerts")}
              label="Concerts"
              variant={concertsSelected ? "filled" : "outlined"}
            />
            <Chip
              onClick={() => handleChipSelection("visit")}
              label="Visit"
              variant={visitSelected ? "filled" : "outlined"}
            />
          </div>
        )}

        <div className="activities">
          {currentPageActivities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>

        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginRight: "60px",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/summary");
            }}
          >
            Summary
          </Button>
        </div>
      </div>

      <Footer bg="" />
    </>
  );
};

export default ActivitiesPage;
