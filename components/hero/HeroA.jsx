import { CiDiscount1 } from "react-icons/ci";
import Image from "next/image";
import robot from "@/public/robot.png";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div
        className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <CiDiscount1 className="w-[32px] h-[32px]" />
          <p
            className={`font-normal text-[rgba(255,255,255,0.7)] text-[18px] leading-[30.8px] ml-2`}
          >
            <span className="text-white">{"<Number>"}%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100.8px] leading-[75px]">
            Insert <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Your Title</span>{" "}
          </h1>
          <div className="sm:flex hidden md:mr-4 mr-0">
            {/* <CallToAction /> */}
          </div>
        </div>

        <h1 className="font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[100.8px] leading-[75px] w-full">
          Heeerreeee.
        </h1>
        <p
          className={`font-normal text-[rgba(255,255,255,0.7)] text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          assumenda, illo quasi ad veritatis aperiam tenetur et minus rerum,
          magni explicabo optio quo nesciunt
        </p>
      </div>

      <div
        className={`flex-1 flex justify-center items-center lg:my-0 my-10 relative`}
      >
        <Image src={robot} alt="billing" className="w-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`sm:hidden flex justify-center items-center`}>
        {/* <CallToAction /> */}
      </div>
    </section>
  );
};

export default Hero;
