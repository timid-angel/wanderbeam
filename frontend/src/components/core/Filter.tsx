import { FilterAltSharp } from "@mui/icons-material";
interface Props {
    onClick: () => void;
  }
  
const Filter = (props: Props) => {

    const toggleFilter = ()=>{
        console.log("filter")
        props.onClick()
    }

    
  return (
    <div onClick={toggleFilter} className="filter">
      <FilterAltSharp />
      <p>Filter</p>
    </div>
  );
};

export default Filter