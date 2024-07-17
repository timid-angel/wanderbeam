import HeaderButtons from "./HeaderButtons";
import Logo from "../home_page/Logo";

interface HeaderProps {
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  return (
    <div className="flex px-4 py-2 w-full justify-between">
      <Logo />
      <HeaderButtons isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default Header;
