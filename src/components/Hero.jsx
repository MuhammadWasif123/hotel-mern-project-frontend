import heroImage from "../assets/hero-main.png";
import TravelerSvg from "../assets/traveler.svg";
import TreasureSvg from "../assets/treasure.png";
import LocationSvg from "../assets/location.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-0 md:flex-row md:max-w-[1180px] md:mx-auto mt-[50px] overflow-x-clip">
      <div className="w-full md:w-1/2 flex flex-col px-8 md:px-20 gap-[38px]">
        <h2 className="capitalize text-[var(--color-nav-items)] font-extrabold text-3xl font-serif">
          Forget Busy Work, Start Next Vacation
        </h2>

        <div className="w-full max-w-[275px]">
          <p className="text-[var(--light-gray)] font-serif font-extralight text-[14px] text-justify">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
        </div>
        <div className="flex justify-start ml-0 md:ml-8">
          <a
            href="#"
            className="capitalize bg-[var(--main-theme-color)] text-white font-medium font-serif px-4 py-[6px] rounded-lg text-base"
          >
            show More
          </a>
        </div>
        <div className="flex justify-start gap-[55px]">
          <div>
            <img src={TravelerSvg} alt="Traveler" className="mb-3 w-[29px]" />
            <p className="font-serif text-[var(--light-gray)] font-light">
              <span className="text-[var(--color-nav-items)] font-semibold font-serif">
                2500
              </span>{" "}
              Users
            </p>
          </div>
          <div>
            <img src={TreasureSvg} alt="Traveler" className="mb-3 w-[29px]" />
            <p className="font-serif text-[var(--light-gray)] font-light">
              <span className="text-[var(--color-nav-items)] font-semibold font-serif">
                200
              </span>{" "}
              treasure
            </p>
          </div>
          <div>
            <img src={LocationSvg} alt="Traveler" className="mb-3 w-[29px]" />
            <p className="font-serif text-[var(--light-gray)] font-light">
              <span className="text-[var(--color-nav-items)] font-semibold font-serif">
                100
              </span>{" "}
              cities
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-8 md:px-0 md:w-1/2">
        <div className="max-w-[432px]">
          <img src={heroImage} alt="Hero" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
