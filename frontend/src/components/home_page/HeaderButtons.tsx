import Button from "@mui/material/Button";

const HeaderButtons = () => {
  return (
    <div className="flex justify-center items-center px-2 gap-3">
      <Button variant="text" className="bg-blue-600">
        Login
      </Button>
      <Button variant="contained">Signup</Button>
      <Button variant="outlined">EN</Button>
    </div>
  );
};

export default HeaderButtons;
