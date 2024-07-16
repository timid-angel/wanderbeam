import { PlaceData } from "../../API/places";

function PlacesCard(props: { data: PlaceData }) {
  return <div>{props.data.name}</div>;
}
export default PlacesCard;
