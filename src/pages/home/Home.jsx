import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import circlepng from "../../assets/images/Minicenter PSD Images/circle.png";
import glow2png from "../../assets/images/Minicenter PSD Images/glow-2.png";
import glow3png from "../../assets/images/Minicenter PSD Images/glow-3.png";
import glow4png from "../../assets/images/Minicenter PSD Images/glow-4.png";
import glow5png from "../../assets/images/Minicenter PSD Images/glow-5.png";
import glow6png from "../../assets/images/Minicenter PSD Images/glow-6.png";
import glowimgpng from "../../assets/images/Minicenter PSD Images/glow-img.png";
import graph from "../../assets/images/Minicenter PSD Images/graph.jpg";
import laptop from "../../assets/images/Minicenter PSD Images/laptop.png";
import logoipsum214png from "../../assets/images/Minicenter PSD Images/logoipsum-214.png";
import logoipsum241png from "../../assets/images/Minicenter PSD Images/logoipsum-241.png";
import logoipsum289png from "../../assets/images/Minicenter PSD Images/logoipsum-289.png";
import logoipsum323png from "../../assets/images/Minicenter PSD Images/logoipsum-323.png";
import logoipsum331png from "../../assets/images/Minicenter PSD Images/logoipsum-331.png";
import logoipsum332png from "../../assets/images/Minicenter PSD Images/logoipsum-332.png";
import operationalpng from "../../assets/images/Minicenter PSD Images/operational.png";
import rdot from "../../assets/images/Minicenter PSD Images/red-dot.png";
import rline from "../../assets/images/Minicenter PSD Images/red-line-1-1.png";
import rline3 from "../../assets/images/Minicenter PSD Images/redline 3.png";
import sol1png from "../../assets/images/Minicenter PSD Images/sol1.png";
import sol2png from "../../assets/images/Minicenter PSD Images/sol2.png";
import sol3png from "../../assets/images/Minicenter PSD Images/sol3.png";
import sol4png from "../../assets/images/Minicenter PSD Images/sol4.png";
import sol5png from "../../assets/images/Minicenter PSD Images/sol5.png";
import strategicpng from "../../assets/images/Minicenter PSD Images/strategic.png";
import treetranparentpng from "../../assets/images/Minicenter PSD Images/tree-tranparent.png";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Navbar";
import "./miniCenterStyle.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const swiperRef = useRef(null);

  const prevCard = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const nextCard = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Responsive slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Nav />
      <section className="mc-hero-section">
        <div className="container px-2 lg:px-8">
          <div className="row align-content-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h2 className="md:text-[70px] text-[24px] md:leading-[80px]">
                  Empowering Industries through AI compliance Solutions
                </h2>
                <p className="md:text-[24px] text-[16px]">
                  Innovation Today, Relevance Tomorrow Precision Solutions,
                  Tailored to YOU
                </p>
                <a
                  href="#"
                  className="mc-btn-2 py-4 cursor-pointer hover:bg-transparent transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="mc-btn-1 py-4 cursor-pointer hover:bg-[#07b2d9] transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 relative">
              <div className="hero-img-box">
                <img
                  className="img-fluid"
                  src={treetranparentpng}
                  alt="tree-tranparent"
                />
                <img className="red-dot" src={rdot} alt="dot" />

                <img
                  className="red-line-1 big-line z-[3] xl:!h-[3425px] !opacity-70"
                  src={rline}
                  alt="red-line"
                />
                <img
                  className="absolute hidden xl:flex xl:top-[360%] 2xl:top-[315%] !opacity-70 right-[33%] z-[3] w-[1000px] xl:!h-[1500px] 2xl:!h-[1700px]"
                  src={rline3}
                  alt="red-line"
                />
              </div>
            </div>
          </div>
        </div>
        <img className="vector-1" src={glowimgpng} alt="glow-img" />
        <img className="vector-2" src={glow2png} alt="glow-img" />
      </section>

      <section className="mc-solutions-section">
        <div className="container px-2 lg:px-8">
          <div className="row justify-content-center">
            <div className="col-lg-12 py-5">
              <div className="mc-header-content">
                <h3 className="md:text-[60px] text-[36px] font-extrabold">
                  Tailored Solutions
                </h3>
                <p className="text-[24px]">
                  The Perfect Mix To Deliver World-Class Ai Solutions
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 !z-[10]">
              <div className="mc-solution-box ">
                <img src={sol1png} alt="mission-img" />
                <h6>Assess</h6>
                <p>Identify compliance needs, challenges and goals</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mc-solution-box">
                <img src={sol2png} alt="mission-img" />
                <h6>Collaborate</h6>
                <p>Integrate and analyze existing data for insights</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mc-solution-box">
                <img src={sol3png} alt="mission-img" />
                <h6>Create</h6>
                <p>Choose or develop tailored algorithms</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 !z-[10]">
              <div className="mc-solution-box">
                <img src={sol4png} alt="mission-img" />
                <h6>Train</h6>
                <p>Iteratively fine-tune and refine the solution</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mc-solution-box">
                <img src={sol5png} alt="mission-img" />
                <h6>Optimize</h6>
                <p>Continuously optimize for evolving requirements</p>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-1" src={glow3png} alt="glow-img" />
        <img className="vector-2" src={glow4png} alt="glow-img" />
      </section>

      <section className="mc-customer-impact-section relative">
        <div className="container px-2 lg:px-8">
          <div className="row items-center">
            <div className="col-lg-6">
              <div className="customer-impact-content items-center">
                <h3 className="md:text-[60px] text-[36px] font-bold">
                  Customer Impact
                </h3>
                <p className="md:text-[24px] text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <ul className="customer-impact-list">
                  <li>
                    <div className="icon-box">
                      <img src={operationalpng} alt="operational" />
                    </div>
                    <div className="meta-box">
                      <h6 className="text-[24px] font-semibold">
                        Operational Excellence
                      </h6>
                      <ul>
                        <li>Experience smarter, streamlined processes</li>
                        <li>
                          Enchanced accuracy, with reduced errors and elevated
                          data quality
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="icon-box ">
                      <img src={strategicpng} alt="strategic" />
                    </div>
                    <div className="meta-box">
                      <h6>Strategic Advantages</h6>
                      <ul>
                        <li>Proactive compliance Measures</li>
                        <li>Optimized Resource Allocation</li>
                        <li>Adoptability to Industry Changes</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-img-box">
                <img
                  className="red-dot lg:!left-[130px] lg:!-top-12 2xl:!left-32 2xl:!top-4"
                  src={rdot}
                  alt="red-dot"
                />

                <img className="img-fluid " src={circlepng} alt="circle" />
                <img className="vector" src={glow5png} alt="glow-img" />
                <img
                  className="red-dot xl:!left-90px] 2xl:!left-[100px] xl:!top-[97%] 2xl:!top-[91%]"
                  src={rdot}
                  alt="red-dot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mc-advanced-section pb-[40%] md:pb-[10%] relative z-[2] bg-none">
        <div className="container px-2 lg:px-8">
          <div className="row align-content-center">
            <div className="col-lg-6">
              <div className="advanced-img-box">
                <img
                  className="red-dot absolute xl:!left-[67%] xl:!top-[7%] 2xl:!left-[70%] 2xl:!-top-[3%] "
                  src={rdot}
                  alt="red-dot"
                />
                <img className="img-fluid main-img" src={laptop} alt="laptop" />
                <img className="vector" src={glow6png} alt="glow-img" />
              </div>
            </div>
            <div className="col-lg-6 relative">
              <img
                className="absolute xl:!left-[190px] xl:!top-[347px] 2xl:!left-[210px] 2xl:!top-[330px] z-[2]"
                src={rdot}
                alt="red-dot"
              />
              <div className="advanced-content-box">
                <h3 className="md:text-[60px] text-[24px]">
                  Advanced AI-Solutions
                </h3>
                <p className="text-[24px]">
                  Experience the power of the cloud and the future of compliance
                  through MiniCenter&apos;s demos.
                </p>
                <p className="text-[24px]">Accessible on our website</p>
                <ul>
                  <li>anywhere</li>
                  <li>anytime</li>
                </ul>
                <Link
                  to="/demo"
                  className="mc-btn-1 hover:bg-[#07b2d9] transition-colors duration-300"
                >
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mc-partners-section relative z-[4]">
        <div className="container px-2 lg:px-8">
          <div className="row">
            `
            <div className="col-lg-12">
              <div className="mc-partners-content   ">
                <h4>Trusted by Global Leaders</h4>
                <div className="row align-content-center">
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="partner-img-box">
                      <img src={logoipsum241png} alt="logo" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="partner-img-box">
                      <img src={logoipsum289png} alt="logo" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="partner-img-box">
                      <img src={logoipsum323png} alt="logo" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="partner-img-box">
                      <img src={logoipsum331png} alt="logo" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="partner-img-box">
                      <img src={logoipsum332png} alt="logo" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="partner-img-box">
                      <img src={logoipsum214png} alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute"></div>
      </section>

      <section className="mc-case-study-section py-[5%] relative overflow-hidden">
        <div className="absolute top-[30%] left-[-5%] h-[50%] w-[10%] bg-gray-400 opacity-50 rounded-full z-50">
          <div
            onClick={prevCard}
            className="flex absolute left-[55%] bottom-[42%] bg-white rounded-full p-3 !z-50 cursor-pointer"
          >
            <GrPrevious />
          </div>
        </div>
        <div className="absolute top-[30%] right-[-5%] w-[10%] h-[50%] bg-gray-400 opacity-50 rounded-full z-50">
          <div
            onClick={nextCard}
            className="flex !z-50 absolute right-[55%] bottom-[42%] bg-white rounded-full p-3 cursor-pointer"
          >
            <GrNext />
          </div>
        </div>

        <div className="container !z-[2]">
          <div className="row z-10">
            <div className="col-lg-12">
              <div className="mc-header-content !z-[10] ">
                <h3 className="md:text-[60px] text-[36px] font-extrabold">
                  Case Studies
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="z-10"
          spaceBetween={1}
          slidesPerView={1}
          mousewheel={{ releaseOnEdges: true }}
          direction="horizontal"
          ref={swiperRef}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          loop={true}
        >
          <SwiperSlide>
            <div className="item !flex items-center justify-center">
              <div className="case-study-box">
                <div className="graph-box">
                  <img className="img-fluid" src={graph} alt="graph" />
                </div>
                <div className="study-meta-box">
                  <h4>NASA Shadow Shield Genetic Algorithm</h4>
                  <p>
                    Steven conducted research into optimizing NASA&apos;s Shadow
                    Shield, utilizing C++ to develop his Genetic Algorithm which
                    increased efficiency of determining the optimal dimensions
                    and weight of the shield.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item !flex items-center justify-center">
              <div className="case-study-box">
                <div className="graph-box">
                  <img src={graph} alt="graph" />
                </div>
                <div className="study-meta-box">
                  <h4>NASA Shadow Shield Genetic Algorithm</h4>
                  <p>
                    Steven conducted research into optimizing NASA&apos;s Shadow
                    Shield, utilizing C++ to develop his Genetic Algorithm which
                    increased efficiency of determining the optimal dimensions
                    and weight of the shield.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item !flex items-center justify-center">
              <div className="case-study-box">
                <div className="graph-box">
                  <img className="img-fluid" src={graph} alt="graph" />
                </div>
                <div className="study-meta-box">
                  <h4>NASA Shadow Shield Genetic Algorithm</h4>
                  <p>
                    Steven conducted research into optimizing NASA&apos;s Shadow
                    Shield, utilizing C++ to develop his Genetic Algorithm which
                    increased efficiency of determining the optimal dimensions
                    and weight of the shield.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item !flex items-center justify-center">
              <div className="case-study-box">
                <div className="graph-box">
                  <img src={graph} alt="graph" />
                </div>
                <div className="study-meta-box">
                  <h4>NASA Shadow Shield Genetic Algorithm</h4>
                  <p>
                    Steven conducted research into optimizing NASA&apos;s Shadow
                    Shield, utilizing C++ to develop his Genetic Algorithm which
                    increased efficiency of determining the optimal dimensions
                    and weight of the shield.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item !flex items-center justify-center">
              <div className="case-study-box">
                <div className="graph-box">
                  <img src={graph} alt="graph" />
                </div>
                <div className="study-meta-box">
                  <h4>NASA Shadow Shield Genetic Algorithm</h4>
                  <p>
                    Steven conducted research into optimizing NASA&apos;s Shadow
                    Shield, utilizing C++ to develop his Genetic Algorithm which
                    increased efficiency of determining the optimal dimensions
                    and weight of the shield.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="mc-join-us-section relative">
        <div className="container px-2 lg:px-8">
          <div className="row">
            <div className="col-lg-12">
              <div className="join-us-content-box">
                <h2 className="md:text-[80px] text-[24px] font-extrabold ">
                  Join us in shaping the future of compliance solutions.
                </h2>
                <p className="md:text-[24px] text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <a
                  href="#"
                  className="mc-btn-2 hover:bg-transparent hover:text-black transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="mc-btn-1 hover:bg-[#07b2d9] transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <img className="mini-line" src={miniline} alt="line" /> */}
    </>
  );
}

export default Home;
