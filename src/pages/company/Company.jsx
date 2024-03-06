import Nav from "../../components/Navbar/Navbar";
import c1png from "../../assets/images/Company PSD Images/c1.png";
import c2png from "../../assets/images/Company PSD Images/c2.png";
import c3png from "../../assets/images/Company PSD Images/c3.png";
import c4png from "../../assets/images/Company PSD Images/c4.png";
import csec2png from "../../assets/images/Company PSD Images/c-sec-2.png";
import h1png from "../../assets/images/Company PSD Images/h1.png";
import h2png from "../../assets/images/Company PSD Images/h2.png";
import h3png from "../../assets/images/Company PSD Images/h3.png";
import h4png from "../../assets/images/Company PSD Images/h4.png";
import glowimgpng from "../../assets/images/Minicenter PSD Images/glow-img.png";
import glow2png from "../../assets/images/Minicenter PSD Images/glow-2.png";
import glow3png from "../../assets/images/Minicenter PSD Images/glow-3.png";
import logoipsum241png from "../../assets/images/Minicenter PSD Images/logoipsum-241.png";
import logoipsum289png from "../../assets/images/Minicenter PSD Images/logoipsum-289.png";
import logoipsum323png from "../../assets/images/Minicenter PSD Images/logoipsum-323.png";
import logoipsum331png from "../../assets/images/Minicenter PSD Images/logoipsum-331.png";
import logoipsum332png from "../../assets/images/Minicenter PSD Images/logoipsum-332.png";
import logoipsum214png from "../../assets/images/Minicenter PSD Images/logoipsum-214.png";
import rline from "../../assets/images/Company PSD Images/rnew.png";
import bline from "../../assets/images/Company PSD Images/bnew.png";
import Container from "../../common/Container";
import Footer from "../../components/Footer/Footer";

function Company() {
  return (
    <>
      <section className="overflow-hidden relative z-0">
        <Nav />
        <section className="mc-mission-section bg-none md:pt-[10%] pt-[20%] pb-[5%] relative z-10">
          <div className="container mx-auto px-4">
            <h1 className="text-[60px] text-white text-center">Our Mission</h1>
            <p className="text-center text-[24px] py-5 text-white">
              MiniCenter pioneers advanced AI solutions to address the complex
              industrial compliance landscape
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 py-10">
              <div className="w-full md:w-1/4">
                <div className="mc-mission-box">
                  <img src={c1png} alt="mission-img" className="w-full" />
                  <h6 className="text-lg mt-2">
                    Precision Solutions, Tailored to You
                  </h6>
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <div className="mc-mission-box">
                  <img src={c2png} alt="mission-img" className="w-full" />
                  <h6 className="text-lg mt-2">
                    Proactively Navigate compliance landscape
                  </h6>
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <div className="mc-mission-box">
                  <img src={c3png} alt="mission-img" className="w-full" />
                  <h6 className="text-lg mt-2">
                    Revolutionize Efficiency Elevate Opetations
                  </h6>
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <div className="mc-mission-box">
                  <img src={c4png} alt="mission-img" className="w-full" />
                  <h6 className="text-lg mt-2">
                    Innovation Today, Relevance Tomorrow
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <img className="vector-1" src={glowimgpng} alt="glow-img" />
          <img className="vector-2" src={glow2png} alt="glow-img" />
        </section>
        <section className="mc-mini-center-section pt-10 md:pb-30 md:pb-[10%] pb-[45%] items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-[10%]">
              <div className="w-full md:w-2/3">
                <div className="text-white">
                  <h2 className="md:text-[70px] text-[36px] font-semibold mb-8">
                    MiniCenter
                  </h2>
                  <p className="md:text-[24px] text-[16px] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="md:text-[24px] text-[16px] mb-4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <h6 className="md:text-[24px] text-[16px]">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system.
                  </h6>
                </div>
              </div>
              <div className="md:w-1/3 hidden md:block">
                <div className="mini-center-img-box">
                  <img src={csec2png} alt="minicenter" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <img className="vector-1 absolute" src={glow3png} alt="glow-img" />
        </section>
        <section className="mc-partners-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mc-partners-content ">
                  <h4 className="md:text-[50px] text-[24px] font-extrabold">
                    Our Partners
                  </h4>
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

        <section className="pt-[2%] bg-[#eaeefa]">
          <div className="mx-auto px-4">
            <Container>
              <div className="flex flex-col md:flex-row justify-center">
                <div className="w-full">
                  <div className="mc-header-content mb-8">
                    <h3 className="text-3xl font-semibold">Our Team</h3>
                    <p className="text-lg">
                      The Perfect Mix To Deliver World-class Ai Solutions
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="mc-team-card">
                      <div className="team-member-img-box">
                        <a href="#">
                          <img
                            src={h1png}
                            alt="team-member"
                            className="w-full"
                          />
                        </a>
                      </div>
                      <div className="team-member-content">
                        <a href="#">
                          <h4 className="text-lg font-semibold">
                            Arvind Mahadevan
                          </h4>
                        </a>
                        <span>CFO, CMO, Product VP</span>
                      </div>
                    </div>
                    <div className="mc-team-card">
                      <div className="team-member-img-box">
                        <a href="#">
                          <img
                            src={h2png}
                            alt="team-member"
                            className="w-full"
                          />
                        </a>
                      </div>
                      <div className="team-member-content">
                        <a href="#">
                          <h4 className="text-lg font-semibold">
                            Steven Masley
                          </h4>
                        </a>
                        <span>CIO, CCO</span>
                      </div>
                    </div>
                    <div className="mc-team-card">
                      <div className="team-member-img-box">
                        <a href="#">
                          <img
                            src={h3png}
                            alt="team-member"
                            className="w-full"
                          />
                        </a>
                      </div>
                      <div className="team-member-content">
                        <a href="#">
                          <h4 className="text-lg font-semibold">
                            Samuel Clark
                          </h4>
                        </a>
                        <span>CTO</span>
                      </div>
                    </div>
                    <div className="mc-team-card">
                      <div className="team-member-img-box">
                        <a href="#">
                          <img
                            src={h4png}
                            alt="team-member"
                            className="w-full"
                          />
                        </a>
                      </div>
                      <div className="team-member-content">
                        <a href="#">
                          <h4 className="text-lg font-semibold">
                            Chritopher Oster
                          </h4>
                        </a>
                        <span>CINO, VP Marketing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className="mc-expectation-section bg-[#eaeefa] py-10">
          <Container>
            <div className="mx-auto px-4 w-full">
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full">
                  <div className="mc-expectation-content text-center">
                    <h3 className="md:text-[60px] text-[36px] font-semibold mb-4">
                      Elevate your expectations with MiniCenter
                    </h3>
                    <p className="md:text-[24px] text-[16px] mb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur
                    </p>
                    <a href="#" className="mc-btn-1 text-[24px]">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <img
          src={rline}
          width={100}
          height={100}
          alt=""
          className="absolute top-0 bottom-0 z-[0] right-[0%] h-full w-full"
        />
        <img
          src={bline}
          alt=""
          className="absolute left-[5%] bottom-0 h-full z-[0]"
          style={{ height: "100%" }}
        />
      </section>
      <Footer />
    </>
  );
}

export default Company;
