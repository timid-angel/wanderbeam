import React from 'react';
import "/../styles/ActivityCard.css";

interface ActivityCardProps{
    catagory:String;
    name:String;
    span:String;
}



const ActivityCard: React.FC<ActivityCardProps> = (props) => {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/300x400" alt="Activity Image" />
            <div className="overlay"></div>
            <div className="text">Visiting a Place</div>
            <div className="content">
                <p>Name: Historical Museum</p>
                <p>Time Frame: July 20 - July 23</p>
            </div>
        </div>
    );
}


export default ActivityCard;