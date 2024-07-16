import { FormControl, MenuItem, Select, styled } from "@mui/material";
import Button from "@mui/material/Button";
import ReactCountryFlag from "react-country-flag";

const StyledButton = styled(Button)(`
  font-weight: bold;
  color: #0041BE;
  font-size: 16px;
`);

const HeaderButtons = () => {
  return (
    <div className="flex justify-center items-center px-2 gap-3">
      <StyledButton variant="text" className="">
        History
      </StyledButton>
      <StyledButton variant="text" className="">
        Login
      </StyledButton>
      <Button variant="contained">Signup</Button>
      <div className="h-fit">
        <FormControl sx={{ m: 1 }} size="small">
          <Select
            inputProps={{ "aria-label": "Without label" }}
            defaultValue="en"
          >
            <MenuItem value="en">
              <div className="flex justify-center items-center gap-2">
                <p className="text-blue-800">EN</p>
                <ReactCountryFlag countryCode="GB" />
              </div>
            </MenuItem>
            <MenuItem value="am">
              <div className="flex justify-center items-center gap-2">
                <p className="text-blue-800">AM</p>
                <ReactCountryFlag countryCode="ET" />
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default HeaderButtons;
