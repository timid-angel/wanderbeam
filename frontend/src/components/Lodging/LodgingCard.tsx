import hotel from "../../assets/hotel.webp";
import "../../styles/LodgingCard.css";
import { StarRate } from "@mui/icons-material";
const LodgingCard = () => {
  return (
    <div className="lodging-card">
      <img src={hotel} alt="hotel" />
      <div className="lodging-content">
        <h3><span>Name</span>: Continental Hotel</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Ornare sagittis tortor duis
          congue accumsan bibendum in. In placerat et nibh suscipit semper nam
          consequat. Nulla at amet velit ac adipiscing euismod. Aliquet sed id
          vestibulum amet.
        </p>
        <p className="catagory"><span>Budget Per Night</span> : 1000Birr</p>
        <p className="catagory"><span>Catagory</span> : Hotel</p>
        <p className="catagory"><span>Locaton</span> : Beach City</p>
        <h3 className="rate">Ratings</h3>
        <div className="ratings">
          <div>
            <p>Quality Rating:</p>
            <div className="stars">
              <StarRate sx={{ color: 'gold' }}/>
              <StarRate sx={{ color: 'gold' }}/>
              <StarRate sx={{ color: 'gold' }}/>
            </div>
          </div>
          <div>
            <p>Users Rating: </p>{" "}
            <div className="stars">
              <StarRate sx={{ color: 'gold' }}/>
              <StarRate sx={{ color: 'gold' }}/>
            </div>
          </div>
        </div>
        <button className="detail-button">View Detail</button>
      </div>
    </div>
  );
};

export default LodgingCard;
