import { useState } from "react";
import { GrFormDown } from "react-icons/gr";
import { TbArrowsTransferDown } from "react-icons/tb";

const PickAndDrop = () => {
  const [value, setValue] = useState({
    pickLocation: "",
    pickDate: "02/10/2023",
    pickTime: "20:45",
    dropLocation: "",
    dropDate: "",
    dropTime: "10:55",
  });

  console.log(value);

  const changeHandler = (e) => {
    const name = e.target.value;

    setValue({ ...value, [e.target.name]: name });
  };

  return (
    <div className="w-full flex flex-col  md:flex-row  md:justify-around items-center -translate-y-24 md:translate-y-0 md:mt-9 ">
      <div className="w-full md:w-[40%] h-[128px] bg-[#ffff] rounded-md  px-4 py-[18px]">
        {/* title pick up */}
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-4 rounded-full bg-information flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-primary "></div>
          </div>
          <p className="font-[600] text-txtColor">Pick - Up</p>
        </div>

        {/* information data */}
        <div className="mt-5 flex justify-between">
          <div className=" border-r-[1px] pr-2 flex-1 flex flex-col items-center">
            <p className="text-[17px] font-[700]">Location</p>
            <div className="flex items-center gap-x-1 mt-3">
              <p>Semarng</p>
              <i>
                <GrFormDown />
              </i>
            </div>
          </div>

          <div className=" border-r-[1px] px-2 flex-1 flex flex-col items-center">
            <p>Date</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="date"
                name="pickDate"
                className="w-[80px] text-[12px]"
                value={value.pickDate}
                onChange={changeHandler}
              />

              {/* <i><GrFormDown /></i> */}
            </div>
          </div>

          <div className="  flex-1 flex   pl-2 flex-col items-center">
            <p>Time</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="time"
                name="pickTime"
                className="w-[80px] text-[12px]"
                value={value.pickTime}
                onChange={changeHandler}
              />
              {/* <i><GrFormDown /></i> */}
            </div>
          </div>

        </div>
      </div>

      {/* change data  */}
      <div className="w-16 h-16 rounded-md bg-primary  z-10 text-[#ffffff] text-[32px] flex justify-center items-center ">
        <TbArrowsTransferDown />
      </div>

      <div className="w-full md:w-[40%] h-[128px] bg-[#ffff] rounded-md  px-4 py-[18px] ">
        {/* title Drop off */}
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-4 rounded-full bg-information flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-primary "></div>
          </div>
          <p className="font-[600] text-txtColor">Drop - Off</p>
        </div>

        {/* information data */}
        <div className="mt-5 flex justify-between">
          <div className=" border-r-[1px]  flex-1 pr-2 flex flex-col items-center">
            <p className="text-[17px] font-[700]">Location</p>
            <div className="flex items-center gap-x-1 mt-3">
              <p>Semarng</p>
              <i>
                <GrFormDown />
              </i>
            </div>
          </div>
          <div className=" border-r-[1px]  flex-1 px-2 flex flex-col items-center">
            <p className="text-[17px] font-[700]">Date</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="date"
                name="dropDate"
                className="w-[80px] text-[12px]"
                value={value.dropDate}
                onChange={changeHandler}
              />

              {/* <i><GrFormDown /></i> */}
            </div>
          </div>
          <div className="  flex-1  flex    flex-col pl-2 items-center">
            <p className="text-[17px] font-[700]">Time</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="time"
                name="dropTime"
                className="w-[80px] text-[12px]"
                value={value.dropTime}
                onChange={changeHandler}
              />
              {/* <i><GrFormDown /></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickAndDrop;
