import logo from "../../assets/sample-logo-main.png";
import ReactCountryFlag from "react-country-flag";
import Copyright from "./Copyright";

const Footer = (props: { bg: string }) => {
  const defautBg = "[#E3EBFF]";

  return (
    <>
      <div
        className={`mt-32 flex flex-row w-full justify-between items-center bg-${props.bg || defautBg} mt-2 py-2 px-10`}
      >
        <div className="flex gap-2 text-slate-950 text-lg">
          <a href="">About</a>
          <span>|</span>
          <a href="">Team</a>
          <span>|</span>
          <a href="">FAQ's</a>
        </div>

        <div className="opacity-80">
          <img src={logo} alt="WanderBeam Logo" className="w-24" />
        </div>

        <div className="flex flex-col justify-center min-h-[70px]">
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
