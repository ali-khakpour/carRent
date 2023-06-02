import Circels from "../elements/circels";
import ferrari from '../../data/images/ferrari.png'
import RentButton from "../elements/rentButton";


const rentValue = "Rental Car"
const BanerSite = () => {
    return ( 
        <div className="w-full max-w-[375px] h-[232px] bg-information translate-y-[-155px] md:translate-y-0 rounded-md overflow-hidden relative p-3 text-[#ffff]">
            <p className="text-[18px] font-[600]">The Best Platform for Car Rental</p>
            <p className="my-2 text-[17px]">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
           <div className="w-[116px] h-[44px] relative">
            <RentButton value={rentValue} />
            </div> 
           {/* image  */}
            <div className="absolute -bottom-[65px] left-12 medium:left-16 large:left-20  ">
                <img src={ferrari} alt="ferrari" className="w-[196px]" />
            </div>
            <Circels />
        </div>
     );
}
 
export default BanerSite;