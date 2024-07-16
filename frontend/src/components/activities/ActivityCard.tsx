import React from 'react';
import "../../styles/ActivityCard.css";

interface ActivityCardProps{
    category:String;
    name:String;
    description:String;
    image:string
}



const ActivityCard: React.FC<ActivityCardProps> = (props) => {
    return (
        <div className="card">
            <img src={"./../../../public/" + props.image}/>
            <div className="overlay"></div>
            <div className="text">{props.category}</div>
            <div className="content">
                <p>{props.name}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}


export default ActivityCard;