import { useState } from "react";
import Button from "../../common/button";
import logo from "../../assets/images/logo_03.png";
import Container from "../../common/Container";
import { Link } from "react-router-dom";

const Nav = ({ className }) => {
  let Links = [
    { name: "Research", link: "/research" },
    { name: "Company", link: "/company" },
    { name: "Demo", link: "/demo" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full absolute top-0 left-0 z-50 md:bg-none ${className}`}
    >
      <Container className="relative items-center">
        <div className="md:flex items-center justify-between bg-none py-4">
          <div className="menu flex gap-5">
            <div
              className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
            >
              <Link to="/">
                <img src={logo} alt="Logo" className="w-[200px] md:w-full" />
              </Link>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
            >
              <ion-icon
                name={open ? "close" : "menu"}
                className="text-white"
              ></ion-icon>
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 w-full absolute top-0 justify-between md:static  md:z-auto z-[-1] left-0 md:w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              } ${open ? "bg-[#092058] md:bg-none" : ""}}`}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-4 my-7">
                  <Link
                    to={link.link}
                    className={`text-white hover:text-gray-400 duration-500`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Button className="md:absolute top-6 right-7 border-2 border-blue-400 hover:border-blue-700 rounded-full px-7 py-3 md:text-[24px] text-[16px]">
                Login
              </Button>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
