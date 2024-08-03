import { useParams } from "react-router-dom";
import lodgingInfos from "../data/lodgingData";
import Header from "../components/core/Header";
import "../styles/LodgingDetails.css";
import wifi from "../assets/wifi.png";
import parking from "../assets/360_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg";
import pool from "../assets/376673.png";
import food from "../assets/4825292.png";
import gym from "../assets/4471883.png";
import { StarRate } from "@mui/icons-material";
import Footer from "../components/core/Footer";

const LodgingDetails: React.FC = () => {
  const params = useParams<string>();
  const name = params.name;
  console.log(name);
  const lodge = lodgingInfos.find((lodge) => lodge.name === name);

  if (!lodge) {
    return <div>Lodge not found</div>;
  }

  return (
    <>
      <div className="absolute w-full">
        <Header isAuthenticated={true} />
      </div>
      <div className="max-h-screen w-full">
        <img
          src={lodge.image}
          alt={lodge.name}
          className="object-fill w-full max-h-screen"
        />
        <div className="absolute flex flex-col bottom-20 left-20 items-center">
          <p className="text-[40px] italic font-semibold text-slate-50 text-black detail-title">
            {lodge.name}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", margin:"100px 20px"}}>
        <div className="about">
          <h2>About {lodge.name}</h2>
          <p>
            Nestled in the vibrant locale of {lodge.location}, the {lodge.name}
            offers a convenient and comfortable stay for travelers looking for a
            blend of modern amenities and beachside relaxation. The{" "}
            {lodge.category} is ideally situated close to the beach, making it a
            perfect choice for guests who want to enjoy the sun, sand, and sea.
            The {lodge.category} provides well-appointed rooms that cater to
            both business and leisure travelers, with essential amenities to
            ensure a pleasant stay. Guests can enjoy a variety of facilities,
            including a modest but delightful restaurant serving local and
            international cuisine. The hotel staff is friendly and dedicated to
            making your stay as comfortable as possible. Whether you're in Beach
            City for a quick business trip or a relaxed beach getaway, the{" "}
            {lodge.name} provides an affordable and convenient base for your
            stay.
          </p>
          <p>
            <span>Budget Per Day</span> : {lodge.budgetPerNight}
          </p>
          <p>
            <span>Category : {lodge.category}</span>
          </p>
          <div className="about-rating">
            <p>
              <span>Quality Rating:</span>
            </p>
            <div>
              {Array.from({ length: lodge.qualityRating }, (_, i) => (
                <StarRate key={i} sx={{ color: "gold" }} />
              ))}
            </div>
          </div>

          <div className="about-rating">
            <p>
              <span>Users Rating:</span>
            </p>
            <div>
              {Array.from({ length: lodge.qualityRating }, (_, i) => (
                <StarRate key={i} sx={{ color: "gold" }} />
              ))}
            </div>
          </div>

          <p>
            <span>Contact: </span>(123) 456-7890, email@example.com
          </p>
          <span>Website : </span>
          <a href={`Website: www.${lodge.category}.com`}>
            www.continentalhotel.com
          </a>
          <p>
            <span>Location</span> : {lodge.location}
          </p>
        </div>

        <div className="amenties">
          <h2>Amenties</h2>
          <div className="each">
            <div>
              <img src={wifi} alt="wifi" />
              <p>Free Wifi</p>
            </div>
            <div>
              <img src={gym} alt="gym" />
              <p>Gym</p>
            </div>
            <div>
              <img src={pool} alt="pool" />
              <p>Pool</p>
            </div>
            <div>
              <img src={food} alt="food" />
              <p>Breakfast</p>
            </div>
            <div>
              <img src={parking} alt="park" />
              <p>Parking</p>
            </div>
          </div>
        </div>
      </div>
      <Footer bg="" />
    </>
  );
};

export default LodgingDetails;
