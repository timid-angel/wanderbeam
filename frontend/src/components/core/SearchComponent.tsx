import React, { useState, ChangeEvent } from "react";
import { Search } from "@mui/icons-material";

interface Props {
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<Props> = (props) => {
  const [current, setCurrent] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCurrent(event.target.value);
    props.onSearch(event.target.value);
  }

  return (
    <div className="search">
      <Search />
      <input
        value={current}
        onChange={handleChange}
        className="search-input"
        type="text"
      />
    </div>
  );
};

export default SearchComponent;
