import { useRef, useState, useCallback } from "react";
import Container from "../../common/Container";
import Button from "../../common/button";
import Footer from "../../components/Footer/Footer";
import GPT from "../../assets/images/Demo PSD Images/4.1.png";
import arrt from "../../assets/images/Demo PSD Images/a-up.png";
import rline from "../../assets/images/Demo PSD Images/r-line.png";
import bline from "../../assets/images/Demo PSD Images/b-line.png";
import logo from "../../assets/images/Demo PSD Images/logo.png";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import SuspendissePotentiButtons from "../../common/SuspendissePotentiButtons";
import ScrollToTopOnMount from "../../common/ScrollToTopOnMount";

const Demo = () => {
  let Links = [
    { name: "Research", link: "/research" },
    { name: "Company", link: "/company" },
    { name: "Demo", link: "/demo" },
  ];
  let [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onDrop2 = useCallback((acceptedFiles) => {
    setSelectedFile2(acceptedFiles[0]);
    console.log("Files dropped in upload media section:", acceptedFiles);
  }, []);
  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    isDragActive: isDragActive2,
  } = useDropzone({ onDrop: onDrop2 });

  return (
    <section className="bg-[#d4e7f7] min-h-screen relative overflow-hidden z-0">
      <ScrollToTopOnMount />
      {/* Navbar */}
      <div className="w-full absolute top-0 left-0 z-50 lg:bg-none text-black">
        <Container className="relative items-center">
          <div className="lg:flex items-center justify-between bg-none py-4 px-5">
            <div className="menu flex gap-5">
              <div
                className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
              >
                <Link to="/">
                  <img src={logo} alt="Logo" className="w-[200px] lg:w-full" />
                </Link>
              </div>

              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </div>

              <ul
                className={`lg:flex lg:items-center lg:pb-0 lg:pt-2 pb-12 w-full absolute top-0 justify-evenly lg:static  lg:z-auto z-[-1] left-0 lg:w-full lg:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-20" : "top-[-490px]"
                }
                  ${open ? "bg-[#d4e7f7] md:bg-none" : ""}}`}
              >
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="lg:ml-8 text-xl lg:my-4 my-7 text-black"
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
                  className="lg:absolute top-6 right-7 border-2 border-blue-400  hover:border-blue-700 rounded-full px-7 py-3 lg:text-[24px] text-[16px] text-black"
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
            <div className="gpt bg-white flex flex-col items-center justify-center px-8 md:py-20 py-20 text-center rounded-3xl">
              <img src={GPT} alt="" />
              <p className="text-3xl font-bold mt-4">
                How can I help you today?
              </p>
              <textarea
                className="mt-4 p-4 w-full max-w-md rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500"
                name=""
                id=""
                cols="30"
                rows="2"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <SuspendissePotentiButtons />
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
                <div
                  {...getRootProps()}
                  className={`relative border-2 border-dashed border-[#dde5fa] rounded-full w-full py-6 text-center  mt-5 ${
                    isDragActive ? "bg-blue-100" : ""
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    {...getInputProps()}
                    className="hidden"
                  />
                  <p className="md:text-[24px] md-[16px] flex justify-center items-center md:gap-5 gap-3">
                    <img src={arrt} alt="" />
                    <span>
                      {isDragActive ? (
                        <span className="font-semibold text-blue-600 cursor-pointer">
                          Drop the file here
                        </span>
                      ) : (
                        <>
                          Drag and drop files or{" "}
                          <span
                            className="font-semibold text-blue-600 pl-2 cursor-pointer"
                            onClick={handleButtonClick}
                          >
                            Choose File
                          </span>
                        </>
                      )}
                    </span>
                  </p>
                  {selectedFile && (
                    <p className="pt-3 text-[#999999]">
                      Selected File: {selectedFile.name}
                    </p>
                  )}
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
                  {...getRootProps2()}
                  className={`relative border-2 border-dashed border-[#dde5fa] rounded-full w-full py-6 text-center  mt-5 ${
                    isDragActive2 ? "bg-blue-100" : ""
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    {...getInputProps2()}
                    className="hidden"
                  />
                  <p className="md:text-[24px] md-[16px] flex justify-center items-center md:gap-5 gap-3">
                    <img src={arrt} alt="" />
                    <span>
                      {isDragActive2 ? (
                        <span className="font-semibold text-blue-600 cursor-pointer">
                          Drop the file here
                        </span>
                      ) : (
                        <>
                          Drag and drop files or{" "}
                          <span
                            className="font-semibold text-blue-600 pl-2 cursor-pointer"
                            onClick={handleButtonClick}
                          >
                            Choose File
                          </span>
                        </>
                      )}
                    </span>
                  </p>
                  {selectedFile2 && (
                    <p className="pt-3 text-[#999999]">
                      Selected File: {selectedFile2.name}
                    </p>
                  )}
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
