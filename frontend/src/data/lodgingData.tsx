import continental from "../assets/continental.webp";
import sunrise from "../assets/sunrise.webp";
import oceanBreeze from "../assets/ocean-breeze.jpg";
import cityCentral from "../assets/city-central.jpg";
import countryLodge from "../assets/country-lodge.jpg";
import lakeVIew from "../assets/lake-view.jpg";
import skyline from "../assets/skyline.jpg";
import forstRetreat from "../assets/forest.jpg";
import desertOasis from "../assets/desert.jpg";

const lodgingInfos = [
  {
    name: "Continental Hotel",
    image: continental,
    budgetPerNight: "1000 Birr",
    category: "Hotel",
    location: "Beach City",
    qualityRating: 3,
    userRating: 2,
    description:
      "Located in Beach City, the Continental Hotel offers comfortable accommodations close to the beach. The hotel features well-appointed rooms and a restaurant serving local cuisine.",
  },
  {
    name: "Sunrise Inn",
    image: sunrise,
    budgetPerNight: "800 Birr",
    category: "Inn",
    location: "Mountain View",
    qualityRating: 4,
    userRating: 3,
    description:
      "Situated in Mountain View, Sunrise Inn offers cozy rooms with stunning mountain views. Enjoy complimentary breakfast and friendly service.",
  },
  {
    name: "Ocean Breeze Resort",
    image: oceanBreeze,
    budgetPerNight: "1500 Birr",
    category: "Resort",
    location: "Coastal Town",
    qualityRating: 5,
    userRating: 4,
    description:
      "Ocean Breeze Resort provides luxury accommodations in Coastal Town. Guests can enjoy beachfront access, a spa, and gourmet dining.",
  },
  {
    name: "City Central Hotel",
    image: cityCentral,
    budgetPerNight: "1200 Birr",
    category: "Hotel",
    location: "Downtown",
    qualityRating: 4,
    userRating: 4,
    description:
      "Located in the heart of Downtown, City Central Hotel offers modern rooms and amenities. Perfect for business travelers with conference facilities.",
  },
  {
    name: "Country Lodge",
    image: countryLodge,
    budgetPerNight: "700 Birr",
    category: "Lodge",
    location: "Countryside",
    qualityRating: 3,
    userRating: 3,
    description:
      "Experience tranquility at Country Lodge in the Countryside. The lodge features rustic cabins, outdoor activities, and home-cooked meals.",
  },
  {
    name: "Lakeview Guesthouse",
    image: lakeVIew,
    budgetPerNight: "600 Birr",
    category: "Guesthouse",
    location: "Lakeside",
    qualityRating: 3,
    userRating: 3,
    description:
      "Lakeview Guesthouse offers simple and affordable rooms by the lake. Ideal for budget travelers looking to explore the natural surroundings.",
  },
  {
    name: "Skyline Apartments",
    image: skyline,
    budgetPerNight: "1300 Birr",
    category: "Apartment",
    location: "City Center",
    qualityRating: 4,
    userRating: 4,
    description:
      "Skyline Apartments provide fully furnished apartments in City Center. Enjoy the convenience of a kitchen, living area, and local attractions.",
  },
  {
    name: "Forest Retreat",
    image: forstRetreat,
    budgetPerNight: "900 Birr",
    category: "Retreat",
    location: "Forest",
    qualityRating: 4,
    userRating: 3,
    description:
      "Nestled in the Forest, Forest Retreat offers peaceful cabins and nature trails. Perfect for those looking to disconnect and enjoy the outdoors.",
  },
  {
    name: "Desert Oasis",
    image: desertOasis,
    budgetPerNight: "1100 Birr",
    category: "Resort",
    location: "Desert",
    qualityRating: 4,
    userRating: 4,
    description:
      "Desert Oasis provides a unique stay in the Desert. Guests can enjoy luxurious tents, a swimming pool, and guided desert tours.",
  },
];

export default lodgingInfos;
