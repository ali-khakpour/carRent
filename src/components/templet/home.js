import BanerSite from "../modules/banerSide";
import PickAndDrop from "../modules/pickAndDrop";
import PopularCar from "./PopularCar";

const Home = () => {
    return ( 
        <div className="px-4 relative flex flex-col items-center">
            <BanerSite />
            <PickAndDrop />
            <PopularCar />
        </div>
     );
}
 
export default Home;