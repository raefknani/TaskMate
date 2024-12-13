import TaskIMG from "../assets/icons/taskIMG.png";
import "../Css/ResponsiveNavBar.css";
function Navbar() {
  return (
    <div className="bg-[#EAEAEA] h-[65px] flex items-center">
      <ul className="flex items-center space-x-4 ml-[23px] w-full justify-between">
        <li className="flex items-center space-x-2">
          <img src={TaskIMG} alt="none" className="h-[35px] mr-[20px]" />
          <p className="text-[20px]">TaskMate</p>
        </li>
        <li className="ml-auto">
          <div className="h-[45px] w-[45px] rounded-[30px] bg-[#CFCFCF] UserPic mr-[10px]"></div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
