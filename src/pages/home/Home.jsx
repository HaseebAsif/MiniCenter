import "./miniCenterStyle.css";
import treetranparentpng from "../../assets/images/Minicenter PSD Images/tree-tranparent.png";
import glowimgpng from "../../assets/images/Minicenter PSD Images/glow-img.png";
import glow2png from "../../assets/images/Minicenter PSD Images/glow-2.png";
import glow3png from "../../assets/images/Minicenter PSD Images/glow-3.png";
import glow4png from "../../assets/images/Minicenter PSD Images/glow-4.png";
import glow5png from "../../assets/images/Minicenter PSD Images/glow-5.png";
import glow6png from "../../assets/images/Minicenter PSD Images/glow-6.png";
import sol1png from "../../assets/images/Minicenter PSD Images/sol1.png";
import sol2png from "../../assets/images/Minicenter PSD Images/sol2.png";
import sol3png from "../../assets/images/Minicenter PSD Images/sol3.png";
import sol4png from "../../assets/images/Minicenter PSD Images/sol4.png";
import sol5png from "../../assets/images/Minicenter PSD Images/sol5.png";
import operationalpng from "../../assets/images/Minicenter PSD Images/operational.png";
import strategicpng from "../../assets/images/Minicenter PSD Images/strategic.png";
import circlepng from "../../assets/images/Minicenter PSD Images/circle.png";
import laptop from "../../assets/images/Minicenter PSD Images/laptop.png";
import logoipsum241png from "../../assets/images/Minicenter PSD Images/logoipsum-241.png";
import logoipsum289png from "../../assets/images/Minicenter PSD Images/logoipsum-289.png";
import logoipsum323png from "../../assets/images/Minicenter PSD Images/logoipsum-323.png";
import logoipsum331png from "../../assets/images/Minicenter PSD Images/logoipsum-331.png";
import logoipsum332png from "../../assets/images/Minicenter PSD Images/logoipsum-332.png";
import logoipsum214png from "../../assets/images/Minicenter PSD Images/logoipsum-214.png";
import graph from "../../assets/images/Minicenter PSD Images/graph.jpg";
import Nav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Nav />
      <section className="mc-hero-section">
        <div className="container">
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
                <a href="#" className="mc-btn-2 py-4">
                  Contact Us
                </a>
                <a href="#" className="mc-btn-1 py-4">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img-box">
                <img
                  className="img-fluid"
                  src={treetranparentpng}
                  alt="tree-tranparent"
                />
              </div>
            </div>
          </div>
        </div>
        <img className="vector-1" src={glowimgpng} alt="glow-img" />
        <img className="vector-2" src={glow2png} alt="glow-img" />
      </section>

      <section className="mc-solutions-section">
        <div className="container">
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
            <div className="col-md-6 col-lg-4">
              <div className="mc-solution-box">
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
            <div className="col-md-6 col-lg-4">
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

      <section className="mc-customer-impact-section">
        <div className="container">
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
                    <div className="icon-box">
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
                <img className="img-fluid" src={circlepng} alt="circle" />
                <img className="vector" src={glow5png} alt="glow-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mc-advanced-section pb-[40%] md:pb-[10%]">
        <div className="container">
          <div className="row align-content-center">
            <div className="col-lg-6">
              <div className="advanced-img-box">
                <img className="img-fluid main-img" src={laptop} alt="laptop" />
                <img className="vector" src={glow6png} alt="glow-img" />
              </div>
            </div>
            <div className="col-lg-6">
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
                <Link to="/demo" className="mc-btn-1">
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mc-partners-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mc-partners-content ">
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
      </section>

      <section className="mc-case-study-section py-[5%] relative overflow-hidden">
        <div className="absolute top-[30%] left-0 ml-[-5%] h-[50%] w-[10%] bg-gray-400 opacity-50 rounded-full z-1 shadow-right"></div>
        <div className="absolute top-[30%] right-[-5%] w-[10%] h-[50%] bg-gray-400 opacity-50 rounded-full z-1 shadow-left"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mc-header-content">
                <h3 className="md:text-[60px] text-[36px] font-extrabold">
                  Case Studies
                </h3>
              </div>
              <div className="case-study-wrapper">
                <Slider {...settings}>
                  <div className="item">
                    <div className="case-study-box">
                      <div className="graph-box">
                        <img className="img-fluid" src={graph} alt="graph" />
                      </div>
                      <div className="study-meta-box">
                        <h4>NASA Shadow Shield Genetic Algorithm</h4>
                        <p>
                          Steven conducted research into optimizing NASA&apos;s
                          Shadow Shield, utilizing C++ to develop his Genetic
                          Algorithm which increased efficiency of determining
                          the optimal dimensions and weight of the shield.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="case-study-box">
                      <div className="graph-box">
                        <img src={graph} alt="graph" />
                      </div>
                      <div className="study-meta-box">
                        <h4 className="text-black">
                          NASA Shadow Shield Genetic Algorithm
                        </h4>
                        <p>
                          Steven conducted research into optimizing NASA&apos;s
                          Shadow Shield, utilizing C++ to develop his Genetic
                          Algorithm which increased efficiency of determining
                          the optimal dimensions and weight of the shield.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="case-study-box">
                      <div className="graph-box">
                        <img src={graph} alt="graph" />
                      </div>
                      <div className="study-meta-box">
                        <h4>NASA Shadow Shield Genetic Algorithm</h4>
                        <p>
                          Steven conducted research into optimizing NASA&apos;s
                          Shadow Shield, utilizing C++ to develop his Genetic
                          Algorithm which increased efficiency of determining
                          the optimal dimensions and weight of the shield.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mc-join-us-section">
        <div className="container">
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
                <a href="#" className="mc-btn-2">
                  Contact Us
                </a>
                <a href="#" className="mc-btn-1">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
