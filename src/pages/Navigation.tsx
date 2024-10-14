import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HiveIcon from "@mui/icons-material/Hive";

const Navigation = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <HiveIcon style={{ fill: "orange" }} />
          </span>
          Bee Soft
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black"
        >
          <MenuIcon />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 " : "top-[-490px]"
          } transition-top transition-opacity`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.path}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button>Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
