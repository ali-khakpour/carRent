import { BsHeart } from "react-icons/bs";
import { useCar } from "../../provider/carProvider";
import RentButton from "../elements/rentButton";

const CarCart = () => {
  //   const [cart, setCart] = useState([]);

  const car = useCar();

  //   useEffect(() => {
  //     const sportCar = car.filter((p) => (p.model === p.Sport));
  //     setCart(sportCar);
  //   }, []);
  return (
    <div className="flex flex-nowrap">
      {car.map((car) => (
        <div
          key={car.id}
          className="bg-[#ffff] flex flex-col p-4 mr-4 mt-5 min-w-[240px] h-[286px] rounded-md "
        >
          {/* section for name and model */}
          <div className="flex justify-between items-center min-w-full ">
            <span>
              <p className="text-txtColor font-[600]">{car.name}</p>
              <p className="text-secondary font-[500]">{car.model}</p>
            </span>
            <i className="text-secondary">
              <BsHeart />
            </i>
          </div>

          <img src={car.image} alt="car.title" />

          {/* section for price and rental button */}
          <div className="flex  justify-between items-center">
            <div className="flex">
              <p className="font-[700]">${car.price}.00/</p>
              <p className="text-secondary ml-2">day</p>
            </div>
            <div className="w-[100px] h-[36px] relative">
              <RentButton value="Rental Now" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCart;
