import { Chip } from "@mui/material";

interface ChipProps {
  selection: () => void;
  name: string;
  selected: boolean;
}
const LodgingChips = ({ selection, name, selected }: ChipProps) => {
  return (
    <div>
      <Chip
        onClick={() => {
          selection()
        }}
        label={name}
        variant={selected ? "filled" : "outlined"}
      />
    </div>
  );
};

export default LodgingChips;
