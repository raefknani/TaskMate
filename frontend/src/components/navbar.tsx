import TaskIMG from "../assets/icons/taskIMG.png";
function Navbar() {
  return (
    <div className="bg-[#EAEAEA] h-[86px] flex items-center">
      <ul className="flex items-center space-x-4 ml-[23px]">
        <li>
          <i className="bi bi-list text-[40px]"></i>
        </li>
        <li>
          <p className="ml-[25px] text-[25px]">TaskMate</p>
        </li>
        <li>
          <img src={TaskIMG} alt="none" className="h-[40px]" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
