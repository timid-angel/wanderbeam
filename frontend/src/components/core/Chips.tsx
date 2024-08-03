import { Star } from "@mui/icons-material";
import { Chip } from "@mui/material";
import React from "react";

interface ChipProps {
  selection: () => void;
  star: boolean;
  amount: number;
}
const Chips = ({ selection, star, amount }: ChipProps) => {
  return (
    <div>
      <Chip
        onClick={() => {
          selection();
        }}
        label={Array.from({ length: amount }).map((_, index) => (
          <Star key={index} sx={{ color: "gold" }} />
        ))}
        variant={star ? "filled" : "outlined"}
      />
      
    
    </div>
  );
};

export default Chips;
