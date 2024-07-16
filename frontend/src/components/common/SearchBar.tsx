import React, { useState } from "react";
import "../../styles/output.css";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        classes: {
          root: "py-0 text-4xl rounded-xl", // Adjust padding and font size
          notchedOutline: "border-gray-300", // Outline color
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleSearch}
              className="text-blue-500 hover:text-blue-700"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
