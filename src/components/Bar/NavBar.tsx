import { Link } from "react-router-dom";

import HomeIcon from "../../assets/icons/home.svg?react";
import AddBoxIcon from "../../assets/icons/add-box.svg?react";
import MoreHorizIcon from "../../assets/icons/more-horiz.svg?react";

const NavBar = () => {
  return (
    <nav className="bg-white fixed bottom-0 w-full shadow-nav">
      <div className="flex justify-around px-2 pt-4 pb-8">
        <Link to="/" className="flex flex-col items-center">
          <HomeIcon className="w-8 h-8 mb-2" />
          <span className="text-xs text-black-84">홈</span>
        </Link>
        <Link to="/group/post" className="flex flex-col items-center">
          <AddBoxIcon className="w-8 h-8 mb-2" />
          <span className="text-xs text-black-84">만들기</span>
        </Link>
        <Link to="/more" className="flex flex-col items-center">
          <MoreHorizIcon className="w-8 h-8 mb-2" />
          <span className="text-xs text-black-84">더보기</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
