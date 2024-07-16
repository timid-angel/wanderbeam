import { Facebook, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import logo from "../../assets/sample-logo-main.png";
import ReactCountryFlag from "react-country-flag";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-between items-center bg-[#E3EBFF] mt-2 py-2 px-10">
        <div className="flex gap-2 text-slate-950 text-lg">
          <a href="">About</a>
          <span>|</span>
          <a href="">Team</a>
          <span>|</span>
          <a href="">FAQ's</a>
        </div>

        <div className="opacity-80">
          <img src={logo} alt="WanderBeam Logo" className="w-[120px]" />
        </div>

        <div className="flex flex-col justify-between min-h-[70px]">
          <div className="flex justify-end gap-2 opacity-75">
            <a href="">
              <LinkedIn />
            </a>
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <p>Based in Addis Ababa, Ethiopia</p>
            <ReactCountryFlag countryCode="et" />
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
