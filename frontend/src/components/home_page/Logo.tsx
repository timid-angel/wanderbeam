import logo from "../../assets/sample-logo-main.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <img src={logo} alt="WanderBeam Logo" className="w-[84px]" />
      <p className="text-[36px] font-semibold">WanderBeam</p>
    </div>
  );
};

export default Logo;
