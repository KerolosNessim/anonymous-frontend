import Marquee from "react-fast-marquee";
import { MdOutlineSecurity } from "react-icons/md";


const CustomMarquee = () => {
  return (
    <div
      className="bg-primary "
    >
      <div className="overflow-hidden whitespace-nowrap bg-background -skew-y-1 mt-10 ">
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          speed={30}
          className=" overflow-hidden "
        >
          <div className="lg:py-4 uppercase font-[family-name:var(--font-fira)]  py-2 text-white font-semibold  md:text-3xl text-xl flex items-center gap-4">
            <p></p>
            <MdOutlineSecurity size={20} className="text-primary" />
            <span >Anonymous</span>
            <MdOutlineSecurity size={20} className="text-primary" />
            <span >Defender</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default CustomMarquee;
