import CarCart from "../modules/carCart";

const PopularCar = () => {
    return ( 
        <div className="w-full overflow-hidden -translate-y-16 md:translate-y-10 mb-10">
            <div className="flex justify-between">
                <p className="text-secondary text-[13px] font-[600]">Popular Car</p>
                <p className="text-primary   text-[13px] font-[600] ">View All</p>
            </div>
           <CarCart />

        </div>
     );
}
 
export default PopularCar;