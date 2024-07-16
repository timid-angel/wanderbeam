import { styled } from "@mui/material";
import Button from "@mui/material/Button";

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
      <Button variant="outlined">EN</Button>
    </div>
  );
};

export default HeaderButtons;
