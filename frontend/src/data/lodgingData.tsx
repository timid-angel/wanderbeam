import continental from "../assets/continent.jpg";
import sunrise from "../assets/sun.jpg";
import oceanBreeze from "../assets/ocean.jpg";
import cityCentral from "../assets/city.jpg";
import countryLodge from "../assets/country.jpg";
import lakeVIew from "../assets/lake.jpg";
import skyline from "../assets/sky-line.jpg";
import forstRetreat from "../assets/forest-retreat.jpg";
import desertOasis from "../assets/desert-oasis.webp";

interface LodgingInfo {
  name: string;
  description: string;
  budgetPerNight: string;
  category: string;
  location: string;
  qualityRating: number;
  userRating: number;
  image: string;
}

const lodgingInfos: Array<LodgingInfo> = [
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
  {
    name: "Seaside Hotel",
    image: desertOasis,
    budgetPerNight: "1200 Birr",
    category: "Hotel",
    location: "Seaside Town",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Enjoy ocean views and comfortable rooms at Seaside Hotel. Located in Seaside Town, perfect for a beachside getaway.",
  },
  {
    name: "Mountain Escape Lodge",
    budgetPerNight: "850 Birr",
    image: forstRetreat,
    category: "Lodge",
    location: "Mountain Base",
    qualityRating: 3,
    userRating: 3,
    description:
      "Mountain Escape Lodge offers a peaceful retreat at the base of the mountains. Ideal for nature lovers and hikers.",
  },
  {
    name: "Urban Boutique Hotel",
    budgetPerNight: "1400 Birr",
    image: skyline,
    category: "Boutique Hotel",
    location: "City Center",
    qualityRating: 4,
    userRating: 4,
    description:
      "Urban Boutique Hotel provides stylish accommodations in the heart of City Center. Perfect for business and leisure travelers.",
  },
  {
    name: "Rustic Countryside Inn",
    image: lakeVIew,
    budgetPerNight: "700 Birr",
    category: "Inn",
    location: "Countryside",
    qualityRating: 3,
    userRating: 2.5,
    description:
      "Stay at Rustic Countryside Inn for a cozy experience in the countryside. Enjoy rustic charm and home-cooked meals.",
  },
  {
    name: "Lakeside Resort",
    image: countryLodge,
    budgetPerNight: "1600 Birr",
    category: "Resort",
    location: "Lakeside",
    qualityRating: 5,
    userRating: 4.5,
    description:
      "Lakeside Resort offers luxury accommodations with stunning lake views. Enjoy a spa, gourmet dining, and water activities.",
  },
  {
    name: "Downtown Business Hotel",
    image: cityCentral,
    budgetPerNight: "1100 Birr",
    category: "Hotel",
    location: "Downtown",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Downtown Business Hotel provides modern rooms and amenities for business travelers. Located conveniently in Downtown.",
  },
  {
    name: "Beachfront Bungalows",
    budgetPerNight: "1300 Birr",
    image: oceanBreeze,
    category: "Bungalow",
    location: "Beach",
    qualityRating: 4,
    userRating: 4,
    description:
      "Beachfront Bungalows offer private and cozy accommodations right on the beach. Perfect for a relaxing seaside vacation.",
  },
  {
    name: "City View Apartments",
    image: sunrise,
    budgetPerNight: "1250 Birr",
    category: "Apartment",
    location: "City Center",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "City View Apartments provide fully furnished apartments with stunning city views. Ideal for long stays in the city.",
  },
  {
    name: "Forest Cabin Retreat",
    image: continental,
    budgetPerNight: "950 Birr",
    category: "Cabin",
    location: "Forest",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Forest Cabin Retreat offers serene cabins nestled in the forest. Perfect for a peaceful and nature-filled escape.",
  },
  {
    name: "Desert Mirage Hotel",
    image: oceanBreeze,
    budgetPerNight: "1150 Birr",
    category: "Hotel",
    location: "Desert",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Desert Mirage Hotel provides comfortable accommodations in the desert. Enjoy unique desert views and activities.",
  },
  {
    name: "Highland Bed & Breakfast",
    image: cityCentral,
    budgetPerNight: "800 Birr",
    category: "Bed & Breakfast",
    location: "Highlands",
    qualityRating: 3,
    userRating: 3,
    description:
      "Highland Bed & Breakfast offers cozy rooms and delicious breakfast in the Highlands. Perfect for a quiet retreat.",
  },
  {
    name: "Seaview Guesthouse",
    image: countryLodge,
    budgetPerNight: "600 Birr",
    category: "Guesthouse",
    location: "Seaside Town",
    qualityRating: 3,
    userRating: 2.5,
    description:
      "Seaview Guesthouse offers affordable rooms with ocean views. Ideal for budget travelers looking for a seaside stay.",
  },
  {
    name: "Metropolitan Hotel",
    image: skyline,
    budgetPerNight: "1500 Birr",
    category: "Hotel",
    location: "City Center",
    qualityRating: 4,
    userRating: 4,
    description:
      "Metropolitan Hotel provides luxury accommodations in City Center. Perfect for both business and leisure travelers.",
  },
  {
    name: "Countryside Cottages",
    image: forstRetreat,
    budgetPerNight: "700 Birr",
    category: "Cottage",
    location: "Countryside",
    qualityRating: 3,
    userRating: 2.5,
    description:
      "Countryside Cottages offer charming accommodations in the countryside. Ideal for a peaceful and relaxing getaway.",
  },
  {
    name: "Beach Paradise Resort",
    budgetPerNight: "1600 Birr",
    image: lakeVIew,
    category: "Resort",
    location: "Beach",
    qualityRating: 5,
    userRating: 4.5,
    description:
      "Beach Paradise Resort offers luxurious beachfront accommodations. Enjoy a spa, gourmet dining, and various beach activities.",
  },
  {
    name: "Urban Loft Apartments",
    budgetPerNight: "1300 Birr",
    image: continental,
    category: "Apartment",
    location: "City Center",
    qualityRating: 4,
    userRating: 4,
    description:
      "Urban Loft Apartments provide stylish and modern lofts in City Center. Perfect for extended stays in the city.",
  },
  {
    name: "Mountain Ridge Lodge",
    image: sunrise,
    budgetPerNight: "850 Birr",
    category: "Lodge",
    location: "Mountain Ridge",
    qualityRating: 3,
    userRating: 3,
    description:
      "Mountain Ridge Lodge offers comfortable rooms with stunning mountain views. Ideal for hikers and nature enthusiasts.",
  },
  {
    name: "Lakeside Cabins",
    image: desertOasis,
    budgetPerNight: "950 Birr",
    category: "Cabin",
    location: "Lakeside",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Lakeside Cabins provide cozy and peaceful accommodations by the lake. Perfect for a relaxing and nature-filled stay.",
  },
  {
    name: "City Plaza Hotel",
    image: countryLodge,
    budgetPerNight: "1400 Birr",
    category: "Hotel",
    location: "Downtown",
    qualityRating: 4,
    userRating: 4,
    description:
      "City Plaza Hotel offers luxury rooms and top-notch amenities in Downtown. Ideal for both business and leisure travelers.",
  },
  {
    name: "Forest Lodge",
    image: forstRetreat,
    budgetPerNight: "900 Birr",
    category: "Lodge",
    location: "Forest",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Forest Lodge provides serene and comfortable accommodations in the forest. Perfect for a peaceful nature retreat.",
  },
  {
    name: "Desert Haven Hotel",
    budgetPerNight: "1150 Birr",
    image: lakeVIew,
    category: "Hotel",
    location: "Desert",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Desert Haven Hotel offers unique and comfortable stays in the desert. Enjoy desert views and activities.",
  },
  {
    name: "Highland Lodge",
    budgetPerNight: "800 Birr",
    image: desertOasis,
    category: "Lodge",
    location: "Highlands",
    qualityRating: 3,
    userRating: 3,
    description:
      "Highland Lodge offers cozy accommodations and stunning views in the Highlands. Perfect for a quiet and relaxing getaway.",
  },
  {
    name: "Seaside Inn",
    image: continental,
    budgetPerNight: "600 Birr",
    category: "Inn",
    location: "Seaside Town",
    qualityRating: 3,
    userRating: 2.5,
    description:
      "Seaside Inn provides affordable and comfortable rooms by the sea. Ideal for budget travelers looking for a seaside stay.",
  },
  {
    name: "Metropolitan Apartments",
    budgetPerNight: "1250 Birr",
    image: cityCentral,
    category: "Apartment",
    location: "City Center",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Metropolitan Apartments offer fully furnished apartments in City Center. Perfect for long stays and business travelers.",
  },
  {
    name: "Country Bed & Breakfast",
    image: skyline,
    budgetPerNight: "700 Birr",
    category: "Bed & Breakfast",
    location: "Countryside",
    qualityRating: 3,
    userRating: 2.5,
    description:
      "Country Bed & Breakfast offers charming rooms and delicious breakfast in the countryside. Ideal for a peaceful retreat.",
  },
  {
    name: "Beachcomber Resort",
    image: oceanBreeze,
    budgetPerNight: "1600 Birr",
    category: "Resort",
    location: "Beach",
    qualityRating: 5,
    userRating: 4.5,
    description:
      "Beachcomber Resort provides luxurious beachfront accommodations with a spa, gourmet dining, and beach activities.",
  },
  {
    name: "City Central Apartments",
    image: sunrise,
    budgetPerNight: "1300 Birr",
    category: "Apartment",
    location: "City Center",
    qualityRating: 4,
    userRating: 4,
    description:
      "City Central Apartments offer stylish and modern apartments in the heart of the city. Ideal for extended stays.",
  },
  {
    name: "Mountain Lodge",
    image: cityCentral,
    budgetPerNight: "850 Birr",
    category: "Lodge",
    location: "Mountain Base",
    qualityRating: 3,
    userRating: 3,
    description:
      "Mountain Lodge provides comfortable accommodations at the base of the mountains. Perfect for nature lovers and hikers.",
  },
  {
    name: "Lakeside Inn",
    image: desertOasis,
    budgetPerNight: "950 Birr",
    category: "Inn",
    location: "Lakeside",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Lakeside Inn offers cozy and peaceful rooms by the lake. Ideal for a relaxing and nature-filled stay.",
  },
  {
    name: "Urban Retreat Hotel",
    image: sunrise,
    budgetPerNight: "1500 Birr",
    category: "Hotel",
    location: "City Center",
    qualityRating: 4,
    userRating: 4,
    description:
      "Urban Retreat Hotel offers luxury accommodations and top-notch amenities in City Center. Perfect for business and leisure travelers.",
  },
  {
    name: "Forest Cabin",
    image: continental,
    budgetPerNight: "900 Birr",
    category: "Cabin",
    location: "Forest",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Forest Cabin provides serene and comfortable stays in the forest. Ideal for a peaceful and nature-filled retreat.",
  },
  {
    name: "Desert Oasis Hotel",
    image: oceanBreeze,
    budgetPerNight: "1150 Birr",
    category: "Hotel",
    location: "Desert",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Desert Oasis Hotel offers unique and comfortable stays in the desert. Enjoy desert views and activities.",
  },
  {
    name: "Highland Retreat",
    image: desertOasis,
    budgetPerNight: "800 Birr",
    category: "Retreat",
    location: "Highlands",
    qualityRating: 4,
    userRating: 3,
    description:
      "Highland Retreat offers cozy accommodations and stunning views in the Highlands. Perfect for a quiet and relaxing getaway.",
  },
  {
    name: "Seaside Lodge",
    image: countryLodge,
    budgetPerNight: "600 Birr",
    category: "Lodge",
    location: "Seaside Town",
    qualityRating: 3,
    userRating: 2.5,
    description:
      "Seaside Lodge provides affordable and comfortable rooms by the sea. Ideal for budget travelers looking for a seaside stay.",
  },
  {
    name: "Metropolitan Suites",
    image: skyline,
    budgetPerNight: "1250 Birr",
    category: "Suite",
    location: "City Center",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Metropolitan Suites offer luxury suites with modern amenities in City Center. Perfect for long stays and business travelers.",
  },
  {
    name: "Country Inn",
    image: lakeVIew,
    budgetPerNight: "700 Birr",
    category: "Inn",
    location: "Countryside",
    qualityRating: 3,
    userRating: 2.5,
    description:
      "Country Inn provides charming rooms and delicious meals in the countryside. Ideal for a peaceful and relaxing retreat.",
  },
  {
    name: "Beachfront Villa",
    image: desertOasis,
    budgetPerNight: "1600 Birr",
    category: "Villa",
    location: "Beach",
    qualityRating: 5,
    userRating: 4.5,
    description:
      "Beachfront Villa offers luxurious accommodations with direct beach access. Enjoy a private pool, gourmet dining, and stunning views.",
  },
  {
    name: "City Loft Apartments",
    image: skyline,
    budgetPerNight: "1300 Birr",
    category: "Apartment",
    location: "City Center",
    qualityRating: 2,
    userRating: 4,
    description:
      "City Loft Apartments provide stylish and modern lofts in the heart of the city. Ideal for extended stays.",
  },
  {
    name: "Mountain Peak Lodge",
    image: forstRetreat,
    budgetPerNight: "850 Birr",
    category: "Lodge",
    location: "Mountain Peak",
    qualityRating: 1,
    userRating: 3,
    description:
      "Mountain Peak Lodge offers comfortable accommodations with stunning mountain views. Perfect for nature enthusiasts.",
  },
  {
    name: "Lakeside Cottage",
    image: sunrise,
    budgetPerNight: "950 Birr",
    category: "Cottage",
    location: "Lakeside",
    qualityRating: 2,
    userRating: 3.5,
    description:
      "Lakeside Cottage provides cozy and peaceful accommodations by the lake. Ideal for a relaxing and nature-filled stay.",
  },
  {
    name: "Snowy Peaks Lodge",
    image: countryLodge,
    budgetPerNight: "1000 Birr",
    category: "Lodge",
    location: "Snowy Mountains",
    qualityRating: 4,
    userRating: 3.5,
    description:
      "Snowy Peaks Lodge offers comfortable rooms with stunning views of the snowy mountains. Perfect for winter sports enthusiasts.",
  },
  {
    name: "Sunny Beach Hotel",
    image: oceanBreeze,
    budgetPerNight: "1500 Birr",
    category: "Hotel",
    location: "Sunny Beach",
    qualityRating: 4,
    userRating: 4,
    description:
      "Sunny Beach Hotel provides luxurious accommodations right on the beach. Enjoy the sun, sea, and a range of beach activities.",
  },
  {
    name: "Urban Garden Apartments",
    image: lakeVIew,
    budgetPerNight: "1100 Birr",
    category: "Apartment",
    location: "City Center",
    qualityRating: 4,
    userRating: 3,
    description:
      "Urban Garden Apartments offer stylish and modern accommodations with a touch of nature in the heart of the city.",
  },
  {
    name: "Historic Manor Inn",
    image: continental,
    budgetPerNight: "900 Birr",
    category: "Inn",
    location: "Historic District",
    qualityRating: 3,
    userRating: 3,
    description:
      "Historic Manor Inn offers charming and historic accommodations in the heart of the historic district. Perfect for history enthusiasts.",
  },
  {
    name: "Island Getaway Resort",
    image: cityCentral,
    budgetPerNight: "1700 Birr",
    category: "Resort",
    location: "Island",
    qualityRating: 5,
    userRating: 4,
    description:
      "Island Getaway Resort offers luxurious and private accommodations on a beautiful island. Enjoy stunning views, a spa, and gourmet dining.",
  },
];

export default lodgingInfos;
