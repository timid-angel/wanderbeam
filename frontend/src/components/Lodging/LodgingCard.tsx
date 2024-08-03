import React from 'react';
import '../../styles/LodgingCard.css';
import { StarRate } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface LodgingCardProps {
  name: string;
  description: string;
  budgetPerNight: string;
  category: string;
  location: string;
  qualityRating: number;
  userRating: number;
  image: any
}

const LodgingCard = (props: LodgingCardProps) => {
  return (
    <Link to={`/lodging/${props.name}`}><div className="lodging-card">
      <img src={props.image} alt="hotel" />
      <div className="lodging-content">
        <h3>
          <span>Name</span>: {props.name}
        </h3>
        <p className="description">{props.description}</p>
        <p className="category">
          <span>Budget Per Night</span>: {props.budgetPerNight}
        </p>
        <p className="category">
          <span>Category</span>: {props.category}
        </p>
        <p className="category">
          <span>Location</span>: {props.location}
        </p>
        <h3 className="rate">Ratings</h3>
        <div className="ratings">
          <div>
            <p>Quality Rating:</p>
            <div className="stars">
              {Array.from({ length: props.qualityRating }, (_, i) => (
                <StarRate key={i} sx={{ color: 'gold' }} />
              ))}
            </div>
          </div>
          <div>
            <p>Users Rating:</p>
            <div className="stars">
              {Array.from({ length: props.userRating }, (_, i) => (
                <StarRate key={i} sx={{ color: 'gold' }} />
              ))}
            </div>
          </div>
        </div>
        <Link to={`/lodging/${props.name}`}><button className="detail-button">View Detail</button></Link>
      </div>
    </div>
    </Link>
  );
};

export default LodgingCard;
