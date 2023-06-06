import { useState } from "react";
import { useCar } from "../../provider/carProvider";

const SidbarCategory = ({selectHandler}) => {
    const [select , setSelect] = useState({type:"", price:"", person:""})
    console.log(select);

  const car = useCar();


  const sport = car.map((p) => p.model === "Sport").length;
  const suv = car.filter((p) => p.model === "SUV").length;
  const sedan = car.filter((p) => p.model === "Sedan").length;
  const hachback = car.filter((p) => p.model === "Hachback").length;
  const cope = car.filter((p) => p.model === "Coupe").length;
  const MPV = car.filter((p) => p.model === "MPV").length;

  const modelCar = [
    { length: sport, model: "Sport", id: 1 },
    { length: suv, model: "SUV", id: 2 },
    { length: cope, model: "cope", id: 3 },
    { length: sedan, model: "Sedan", id: 4 },
    { length: hachback, model: "Hachback", id: 5 },
    { length: MPV, model: "MPV", id: 6 },
  ];

  //
  const user2 = car.map((p) => p.user === "2people").length;
  const user4 = car.filter((p) => p.user === "4people").length;
  const user6 = car.filter((p) => p.user === "6people").length;
  const user8 = car.filter((p) => p.user >= "8people").length;

  const peopelCar = [
    { user: "2 person", id: 1, length: user2 },
    { user: "4 person", id: 2, length: user4 },
    { user: "6 person", id: 3, length: user6 },
    { user: "8 or More ", id: 4, length: user8 },
  ];

//   const changeHandler = (e, id)=>{
//     const name = e.target.name;
    
//     setSelect({...select, [name] : e.target.value})
//     // selectHandler(select)
//   }

  return (
    <div className="w-full min-h-[100%] md:max-w-[370px] bg-[#ffff] p-8 ">
      {/* type section */}
      <div className="">
        <p className="text-[12px] text-secondary mb-7  ">T Y P E</p>
        <div className="flex flex-col gap-y-5">
          {modelCar.map((car) => (
            <div
              key={car.id}
              className="flex flex-row-reverse justify-end gap-x-2  text-[18px] font-[600] text-secondary "
            >
              <span className=" text-secondary"> ({car.length})</span>
              <label htmlFor={car.model} className=" cursor-pointer">
                {car.model}
              </label>
              <input
                type="checkbox"
                id={car.model}
                className=" cursor-pointer"
                // name={car.model}
                // value={select.type}
                // onChange={(e)=>changeHandler(e,car.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* capacity secton */}
      <div className="mt-14">
        <p className="text-[12px] text-secondary mb-7  ">C A P A C I T Y</p>
        <div className="flex flex-col gap-y-5">
          {peopelCar.map((car) => (
            <div
              key={car.id}
              className="flex flex-row-reverse justify-end gap-x-2  text-[18px] font-[600] text-secondary "
            >
              <span className=" text-secondary"> ({car.length})</span>
              <label htmlFor={car.user} className=" cursor-pointer leading-8">
                {car.user}
              </label>
              <input
                type="checkbox"
                id={car.user}
                className=" cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* price section */}

      <div className="mt-14">
        <p className="text-[12px] text-secondary mb-7  ">P R I C E</p>
      </div>
    </div>
  );
};

export default SidbarCategory;
