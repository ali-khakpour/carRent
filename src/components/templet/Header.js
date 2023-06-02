import avatar from "../../data/images/ferrari.png";
import { NavLink } from "react-router-dom";
import Search from "../modules/search";
import { BsSliders } from "react-icons/bs";

const Header = () => {
  return (
    <header className=" bg-[#ffffff] w-full h-[288px] md:h-20 flex justify-center md:items-center mb-16   ">
      <section className="w-full  max-w-[1250px] px-4 py-8 md:py-0 ">
        {/*  section for top header */}
        <div className="flex justify-between">
          
          <div className="flex  items-center gap-x-8 w-[78%]">
            <p className=" text-primary font-[700] text-[24px]">MORENT</p>
            <div className="hidden md:flex w-full relative ">
              <Search />
            </div>
          </div>
          <div className="w-7 h-7 rounded-full border-[1px]  flex justify-center items-center">
            <img src={avatar} alt="avatar" className="w-full h-full" />
          </div>
        </div>

        {/* section for search and filter of header */}
        <div className="flex justify-between mt-8 text-[#596780] md:hidden">
          <Search />

          <div className="w-12 h-12 rounded-md flex justify-center items-center border-[1px] border-[#C3D4E966]">
            <BsSliders />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
