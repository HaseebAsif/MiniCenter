import Container from "../../common/Container";
import Nav from "../../components/Navbar/Navbar";
import graph from "../../assets/images/Research PSD Images/graph.png";
import sec2 from "../../assets/images/Research PSD Images/r-sec-2.png";
import sec3 from "../../assets/images/Research PSD Images/r-sec-3.png";
import sec4 from "../../assets/images/Research PSD Images/r-sec-4.png";
import sec5 from "../../assets/images/Research PSD Images/r-sec-5.png";
import bline from "../../assets/images/Research PSD Images/b-line.png";
import rline from "../../assets/images/Research PSD Images/r-line.png";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Research = () => {
  return (
    <section className="research-page relative overflow-hidden z-0">
      <section className="bg-[#0a2159] min-h-screen">
        <Container>
          <Nav />
          <section className="r-sec-1 h-full md:pt-[10%] pt-[25%] text-white relative z-[2]">
            <h1 className="md:text-[60px] text-[30px] font-semibold text-center">
              Research
            </h1>
            <p className="text-center md:text-[24px] text-[16px] font-normal md:pt-5 pt-2">
              Duis ac turpis finibus, dignissim ligula et, tempus metus. Morbi
              leo libero, mattis nec vulputate et, rutrum at odio. Sed maximus
              placerat nibh vitae ornare. Aliquam nec quam lacus. Sed non
              malesuada justo. Curabitur porta eget leo vitae varius. Quisque
              dictum, mi ut aliquam porta, dui enim eleif end ante, sit amet
              convallis metus ligula quis purus.
            </p>
            <div className="img-sec-1 md:flex md:py-[5%] py-[3%]  items-center md:px-[2%]">
              <div className="image md:w-[50%] w-[90%] mx-auto">
                <img src={graph} alt="" />
              </div>
              <div className="r-sec-1-text md:text-left text-center md:w-[50%] w-[90%] mx-auto relative z-[2]">
                <h2 className="md:text-[36px] text-[24px] pt-3 md:pt-0 font-semibold">
                  NASA Shadow Sheild Genetic Algorithm
                </h2>
                <p className="md:text-[24px] text-[16px] md:py-8 py-4 leading-[1.5]">
                  Steven conducted research into optimizing NASA&apos;s Shadow
                  Shield, utilizing C++ to develop his Genetic Algorithm which
                  increased efficiency of determining the optimal dimensions and
                  weight of the shield. Shield performance through simulation of
                  radiation collision was output onto a readable graph by
                  Steven&apos;s work. The algorithm produced results in a
                  fraction of the time it would have taken humans.
                </p>
              </div>
            </div>
            <div className="img-sec-1 md:flex md:py-16 py-2 items-center flex-row-reverse md:gap-32 md:px-[2%]">
              <div className="image md:w-[50%] w-[90%] mx-auto">
                <img src={sec2} alt="" />
              </div>
              <div className="r-sec-1-text md:text-left text-center md:w-[50%] w-[90%] mx-auto">
                <h2 className="md:text-[36px] text-[24px] pt-4 md:pt-0 font-semibold">
                  Clemson University Facial Recognition System
                </h2>
                <p className="md:text-[24px] text-[16px] md:py-8 py-4 leading-[1.5]">
                  Arvind assisted in the training and optimization of a You Only
                  Look Once (YOLO) real-time image detection neural network as
                  part of a research project in Clemson University&apos;s
                  Department of Mechanical Engineering. This involved using the
                  YOLO neural network to analyze athletes faces at different
                  stages of exercise intensity, associate with it a level of
                  fatigue, and provide feedback. He also created and tested
                  polynomial-time convex optimization algorithms for YOLO with
                  the Fast R-CNN method to decrease background mistakes and
                  increase accuracy in embedded computer vision systems. This
                  has given Arvind proficiency in the model training process,
                  allowing him to adapt real-time image detection for various
                  objectives.
                </p>
              </div>
            </div>
          </section>
        </Container>
      </section>
      <section className="bg-[#eaeefa] min-h-screen">
        <Container>
          <section className="r-sec-2 pt-20 text-black relative z-[2] md:px-[2%]">
            <h1 className="md:text-[60px] text-[36px] font-semibold text-center">
              Our Upcoming Projects
            </h1>
            <p className="text-center md:text-[24px] text-[16px] font-normal pt-5">
              A Perfect Mix To Deliver World_Class Ai Solutions
            </p>
            <div className="img-sec-1 md:flex md:py-16 py-8 items-center md:gap-32 md:px-[2%]">
              <div className="image md:w-[50%] w-[90%] mx-auto">
                <img src={sec3} alt="" />
              </div>
              <div className="r-sec-1-text md:text-left text-center md:w-[50%] w-[90%] mx-auto">
                <h2 className="md:text-[40px] text-[24px] font-semibold">
                  Quisque facilisis ligula augue
                </h2>
                <p className="md:text-[24px] text-[16px] md:py-8 py-4 leading-[1.5]">
                  Nam pharetra libero vel posuere ornare. Nunc consectetur velit
                  lac us, porta dignissim quam accumsan quis. <br />
                  Nullam dictum, lorem et convallis pulvinar, ante ligula
                  rhoncus nisi, vel ultricies massa felis at nisi. Nam sagittis
                  sodales rutrum. Ut non urna blandit, ornare massa vel,
                  facilisis elit. Suspendisse a enim in nisi bibendum auctor a
                  ac elit. Vivamus ut feugiat enim. Cras lacinia ligula est, ac
                  pretium ex porta sed. Mauris fermentum bibendum augue, et
                  condimentum mi tincidunt vitae.
                </p>
              </div>
            </div>
            <div className="img-sec-1 md:flex md:flex-row-reverse md:py-16 py-2 items-center md:gap-32 md:px-[2%]">
              <div className="image md:w-[50%] w-[90%] mx-auto">
                <img src={sec4} alt="" />
              </div>
              <div className="r-sec-1-text md:text-left text-center md:w-[50%] w-[90%] mx-auto">
                <h2 className="md:text-[40px] text-[24px] font-semibold">
                  Quisque facilisis ligula augue
                </h2>
                <p className="md:text-[24px] text-[16px] md:py-8 py-4 leading-[1.5]">
                  Nam pharetra libero vel posuere ornare. Nunc consectetur velit
                  lac us, porta dignissim quam accumsan quis. <br />
                  Nullam dictum, lorem et convallis pulvinar, ante ligula
                  rhoncus nisi, vel ultricies massa felis at nisi. Nam sagittis
                  sodales rutrum. Ut non urna blandit, ornare massa vel,
                  facilisis elit. Suspendisse a enim in nisi bibendum auctor a
                  ac elit. Vivamus ut feugiat enim. Cras lacinia ligula est, ac
                  pretium ex porta sed. Mauris fermentum bibendum augue, et
                  condimentum mi tincidunt vitae.
                </p>
              </div>
            </div>
            <div className="img-sec-1 md:flex md:py-16 py-2 items-center md:gap-32 md:px-[2%]">
              <div className="image md:w-[50%] w-[90%] mx-auto">
                <img src={sec5} alt="" />
              </div>
              <div className="r-sec-1-text md:text-left text-center md:w-[50%] w-[90%] mx-auto">
                <h2 className="md:text-[40px] text-[24px] font-semibold">
                  Quisque facilisis ligula augue
                </h2>
                <p className="md:text-[24px] text-[16px] md:py-8 py-4 leading-[1.5]">
                  Nam pharetra libero vel posuere ornare. Nunc consectetur velit
                  lac us, porta dignissim quam accumsan quis. <br />
                  Nullam dictum, lorem et convallis pulvinar, ante ligula
                  rhoncus nisi, vel ultricies massa felis at nisi. Nam sagittis
                  sodales rutrum. Ut non urna blandit, ornare massa vel,
                  facilisis elit. Suspendisse a enim in nisi bibendum auctor a
                  ac elit. Vivamus ut feugiat enim. Cras lacinia ligula est, ac
                  pretium ex porta sed. Mauris fermentum bibendum augue, et
                  condimentum mi tincidunt vitae.
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-10">
              <button className="rounded-full md:px-3 px-2 md:py-4 py-2 border-2 border-[#14b6db] hover:border-blue-800 md:w-[200px] w-[150px] duration-500 font-medium md:text-[24px] text-20px ">
                <Link to="/demo">See Demo</Link>
              </button>
            </div>
          </section>
        </Container>
      </section>
      <img src={rline} alt="" className="absolute top-0 right-0 h-full z-[0]" />
      <img
        src={bline}
        alt=""
        className="absolute left-[12%] bottom-0 h-full z-[0]"
      />
      <Footer />
    </section>
  );
};

export default Research;
