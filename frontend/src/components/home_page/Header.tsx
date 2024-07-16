import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex px-4 py-2 w-full justify-between">
      <Logo />
      <HeaderButtons />
    </div>
  );
};

export default Header;
