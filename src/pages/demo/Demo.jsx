import { useRef, useState } from "react";
import Container from "../../common/Container";
import Button from "../../common/button";
import Footer from "../../components/Footer/Footer";
import GPT from "../../assets/images/Demo PSD Images/4.1.png";
import arrt from "../../assets/images/Demo PSD Images/a-up.png";
import rline from "../../assets/images/Demo PSD Images/r-line.png";
import bline from "../../assets/images/Demo PSD Images/b-line.png";
import logo from "../../assets/images/Demo PSD Images/logo.png";
import { Link } from "react-router-dom";

const Demo = () => {
  let Links = [
    { name: "Research", link: "/research" },
    { name: "Company", link: "/company" },
    { name: "Demo", link: "/demo" },
  ];
  let [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <section className="bg-[#d4e7f7] min-h-screen relative overflow-hidden z-0">
      {/* Navbara */}
      <div className="w-full absolute top-0 left-0 z-50 md:bg-none text-black">
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
                className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </div>

              <ul
                className={`md:flex md:items-center md:pb-0 pb-12 w-full absolute top-0 justify-between md:static md:bg-none md:z-auto z-[-1] left-0 md:w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-20" : "top-[-490px]"
                }
                  ${open ? "bg-[#d4e7f7] md:bg-none" : ""}}`}
              >
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="md:ml-8 text-xl md:my-4 my-7 text-black"
                  >
                    <a
                      href={link.link}
                      className={` hover:text-gray-600 duration-500`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <Button
                  className="md:absolute top-6 right-7 border-2 border-blue-400  hover:border-blue-700 rounded-full px-7 py-3 md:text-[24px] text-[16px] text-black"
                  style={{ color: "black" }}
                >
                  <span className="text-black">Login</span>
                </Button>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <Container>
        <section className="flex justify-between items-center h-full w-[90%] mx-auto md:py-[10%] py-[15%]">
          <div className="w-90 mx-auto">
            <h1 className="py-8 md:text-6xl text-[24px] font-semibold text-center md:text-left">
              Demo Title
            </h1>
            <div className="gpt bg-white flex flex-col items-center justify-center px-8 md:py-28 py-20 text-center rounded-3xl">
              <img src={GPT} alt="" />
              <p className="text-3xl font-bold mt-4">
                How can I help you today?
              </p>
            </div>
            <div className="d-fields w-full flex flex-wrap justify-between py-12">
              {/* Card 1 */}
              <div className="card md:w-[48%] w-[100%] mb-8 bg-none border-2 border-[#07b2d9] rounded-3xl p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Suspendessie Potenti
                </h2>
                <p className="text-base">
                  Quisque facilisis ligula augue, sodales facilisis lorem
                </p>
              </div>
              {/* Card 2 */}
              <div className="card md:w-[48%] w-[100%] mb-8 bg-none border-2 border-[#07b2d9] rounded-3xl p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Suspendessie Potenti
                </h2>
                <p className="text-base">
                  Quisque facilisis ligula augue, sodales facilisis lorem
                </p>
              </div>
              {/* Card 3 */}
              <div className="card md:w-[48%] w-[100%] mb-8 bg-none border-2 border-[#07b2d9] rounded-3xl p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Suspendessie Potenti
                </h2>
                <p className="text-base">
                  Quisque facilisis ligula augue, sodales facilisis lorem
                </p>
              </div>
              {/* Card 4 */}
              <div className="card md:w-[48%] w-[100%] mb-8 bg-none border-2 border-[#07b2d9] rounded-3xl p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Suspendessie Potenti
                </h2>
                <p className="text-base">
                  Quisque facilisis ligula augue, sodales facilisis lorem
                </p>
              </div>
              <div className="gpt bg-white flex flex-col px-8 py-7 rounded-3xl w-full mt-5">
                <h1 className="font-semibold md:text-[40px] text-[24px]">
                  Upload File
                </h1>
                <div className="relative border-2 border-dashed border-[#dde5fa] rounded-full w-full py-6 text-center  mt-5">
                  <input type="file" ref={fileInputRef} className="hidden" />
                  <p className="md:text-[24px] md-[16px] flex justify-center items-center md:gap-5 gap-3">
                    <img src={arrt} alt="" />
                    <span>
                      Drag and drop files or
                      <span
                        className="font-semibold text-blue-600 pl-2 cursor-pointer"
                        onClick={handleButtonClick}
                      >
                        Choose File
                      </span>
                    </span>
                  </p>
                </div>
                <div className="flex justify-between w-full pt-3 text-[#999999]">
                  <p className="md:text-[24px] text-[16px]">
                    Files Supported: PDF, DOC{" "}
                  </p>
                  <p className="md:text-[24px] text-[16px]">
                    Maximum Size: 5mb
                  </p>
                </div>
              </div>
              <div className="gpt bg-white flex flex-col px-8 py-7 rounded-3xl w-full mt-16">
                <h1 className="font-semibold md:text-[40px] text-[24px]">
                  Upload Media
                </h1>
                <div
                  className="relative border-2 border-dashed border-[#dde5fa] rounded-full w-full py-6 text-center cursor-pointer mt-5"
                  onClick={handleButtonClick}
                >
                  <input type="file" ref={fileInputRef} className="hidden" />
                  <p className="md:text-[24px] md-[16px] flex justify-center items-center md:gap-5 gap-3">
                    <img src={arrt} alt="" />
                    <span>
                      Drag and drop files or
                      <span className="font-semibold text-blue-600 pl-2">
                        Choose File
                      </span>
                    </span>
                  </p>
                </div>
                <div className="flex justify-between w-full pt-3 text-[#999999]">
                  <p className="md:text-[24px] text-[16px]">
                    Files Supported: JPG, MPG, MP4, MOV
                  </p>
                  <p className="md:text-[24px] text-[16px]">
                    Maximum Size: 20mb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <img
        src={rline}
        alt=""
        className="absolute top-0 right-[20%] h-full z-[-1]"
      />
      <img
        src={bline}
        alt=""
        className="absolute left-[12%] bottom-0 h-full z-[-1]"
      />
      <Footer />
    </section>
  );
};

export default Demo;
