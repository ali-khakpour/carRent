import {RiSearch2Line} from 'react-icons/ri'


const Search = () => {
    return ( 
        <div className="flex items-center  pl-2 w-[77%] h-12 border-[1px] border-[#C3D4E966]  rounded-md relative overflow-hidden ">
           <span className='text-[24px]'><RiSearch2Line /></span>
            <input type='text' placeholder='Search something here' className="h-full border-none outline-none pl-2 text-[17px]"  />
        </div>
     );
}
 
export default Search;