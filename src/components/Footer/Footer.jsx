import { Link } from "react-router-dom";
import logofooterpng from "../../assets/images/Minicenter PSD Images/logo-footer.png";
import Container from "../../common/Container";

function Footer() {
  return (
    <section className="mc-footer bg-white text-black">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between py-12 w-[90%] mx-auto">
          <div className="flex-shrink-0">
            <div className="mc-footer-detail-box">
              <div className="mc-footer-logo mb-6 ">
                <a href="#">
                  <img src={logofooterpng} alt="footer-logo" />
                </a>
              </div>
              <a
                href="#"
                className="mc-btn-1 flex items-center mb-4 w-[40%] text-black hover:text-white font-semibold hover:bg-[#07b2d9] transition-colors duration-300"
              >
                <i className="fas fa-unlock-alt mr-2"></i>Login
              </a>
              <ul className="mc-social-links flex gap-4">
                <li>
                  <a className="hover:bg-[#07b2d9] transition-colors duration-300 group" href="#">
                    <i className="fab fa-facebook-f group-hover:text-white transition-all duration-200"></i>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-[#07b2d9] transition-colors duration-300 group" href="#">
                    <i className="fab fa-twitter group-hover:text-white transition-all duration-200"></i>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-[#07b2d9] transition-colors duration-300 group" href="#">
                    <i className="fab fa-instagram group-hover:text-white transition-all duration-200"></i>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-[#07b2d9] transition-colors duration-300 group" href="#">
                    <i className="fab fa-youtube group-hover:text-white transition-all duration-200"></i>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-[#07b2d9] transition-colors duration-300 group" href="#">
                    <i className="fab fa-linkedin-in group-hover:text-white transition-all duration-200"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between md:w-[40%]">
            <div className="mc-quick-links-box">
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul>
                <li>
                  <Link
                    to="/research"
                    className="hover:underline transition-all ease-in-out duration-500"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company"
                    className="hover:underline transition-all duration-500"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:underline transition-all duration-500"
                  >
                    Resource Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:underline transition-all duration-500"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mc-quick-links-box">
              <h6 className="text-lg font-semibold mb-4">Solutions</h6>
              <ul>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Assess</Link>
                </li>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Collaborate</Link>
                </li>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Create</Link>
                </li>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Train</Link>
                </li>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Optimize</Link>
                </li>
              </ul>
            </div>
            <div className="mc-quick-links-box">
              <h6 className="text-lg font-semibold mb-4">Resources</h6>
              <ul>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">News</Link>
                </li>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Press releases</Link>
                </li>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Videos</Link>
                </li>
                <li className="hover:underline transition-all ease-in-out duration-500">
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="mc-newsletter-box">
              <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
              <p className="mb-4">Get our latest news and updates</p>
              <form action="">
                <input
                  type="email"
                  placeholder="Email address..."
                  className="w-full border border-gray-400 rounded-md px-4 py-2 mb-2"
                />
                <button className="py-3 rounded-full border-2 border-[#07b2d9] font-semibold text-lg w-full hover:text-white hover:bg-[#07b2d9] transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 flex flex-col items-center md:flex-row md:justify-between w-[90%] mx-auto">
          <p className="mb-2">&copy; 2024 MiniCenter. All rights reserved</p>
          <div className="flex items-center gap-2">
            <a href="#" className="text-gray-400 hover:text-black">
              Terms of Use
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-400 hover:text-black">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
