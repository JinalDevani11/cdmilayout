import './App.css';
import { BsEnvelope, BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { FaCertificate, FaFacebookF, FaTwitter, FaLinkedin, FaPlay, FaStar, FaStarHalfAlt, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { TbBrandYoutube } from "react-icons/tb";
import logo from './image/creative.svg';
import slider from './image/1.webp';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import course1 from "./image/Android.webp";
import course2 from "./image/Graphic_Design.webp";
import course3 from "./image/institute.webp";
import course4 from "./image/traininginstitute.webp";
import course5 from "./image/Lumion.webp";
import course6 from "./image/unity.webp";
import about from "./image/about-us.webp";
import count from "./image/Capture1.PNG";
import cot from "./image/cot.PNG";
import view from "./image/Capture.PNG";
import userinfo from "./image/user.jpg";
import ftlogo from "./image/creative-logo-white.svg";



function App() {
  return (
    <section className="body">
      {/* ==========top header start============= */}
      <div className="bgcolor">
        <div className="container">
          <div className="main">
            <div className="info">
              <ul>
                <li><span><BsEnvelope></BsEnvelope></span>info@gmail.com</li>
                <li><span><FaCertificate></FaCertificate></span>verify Certificate</li>
              </ul>
            </div>
            <div className="question">
              <ul>
                <li>have any question? +91 90333 16003</li>
              </ul>
            </div>
            <div className="socialicon">
              <ul>
                <li><a href="#" target="_blank"> <FaFacebookF /></a></li>
                <li><a href="#" target="_blank"><FaTwitter /></a></li>
                <li><a href="#" target="_blank"><TfiGoogle /></a></li>
                <li><a href="#" target="_blank"><FaLinkedin /></a></li>
                <li><a href="#" target="_blank" ><ImInstagram /></a></li>
                <li><a href="#" target="_blank"><TbBrandYoutube /></a></li>
                <li><a href="#" target="_blank"><BsWhatsapp /></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      {/* ===============top hedaer end=========== */}

      {/* ===============logo header start============= */}
      <div className="logobgcolor">
        <div className="container">
          <div className="menunav">

            <div className="logo">
              <img src={logo}></img>
            </div>
            <div className="main_menu">
              <ul>
                <li><a href="#" className="activepg">home</a></li>
                <li><a href="#"> courses<font><IoIosArrowDown /></font></a></li>
                <li><a href="#">activities<font><IoIosArrowDown /></font></a>
                  <ul className="submenu">
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Events</a></li>
                  </ul>
                </li>
                <li><a href="#">blog</a></li>
                <li><a href="#">know us<font><IoIosArrowDown /></font></a>
                  <ul className="submenu">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Sucess Stories</a></li>
                    <li><a href="#">Placement partners</a></li>
                  </ul>
                </li>
                <li><a href="#">Get in touch</a></li>
                <li><a href="#">student zone<font><IoIosArrowDown /></font></a>
                  <ul className="submenu">
                    <li><a href="#">Student Login</a></li>
                    <li><a href="#">Showcase</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ===============logo header end============== */}

      {/* =====================banner section start=============== */}
      <div className="banner">
        <img src={slider}></img>
      </div>
      {/* =====================banner section end=============== */}


      {/* ================gallery section start============== */}
      <div className="container">
        <div className="gallery">
          <div className="infos">
            <div className="fonts">
              <div className="one">
                <div className="line"></div>
                <font>creative courses</font>
              </div>
              <p>offerred courses</p>
            </div>
          </div>
          <div className="allcourse">
            <div className="singleitem">
              <div className="img">
                <img src={course1}></img>
              </div>
              <p>Development courses</p>
              <div className="btnarea">
                <ul className="btns">
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStarHalfAlt /></li>
                </ul>
                <div className='btn1'>
                  <a href='#'> know more</a>
                </div>
              </div>
            </div>
            <div className="singleitem">
              <div className="img">
                <img src={course2}></img>
              </div>
              <p>Design courses</p>
              <div className="btnarea">
                <ul className="btns">
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStarHalfAlt /></li>
                </ul>
                <div className='btn1'>
                  <a href='#'> know more</a>
                </div>
              </div>
            </div>
            <div className="singleitem">
              <div className="img">
                <img src={course3}></img>
              </div>
              <p>Prograaming iT</p>
              <div className="btnarea">
                <ul className="btns">
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStarHalfAlt /></li>
                </ul>
                <div className='btn1'>
                  <a href='#'> know more</a>
                </div>
              </div>
            </div>

            <div className="singleitem">
              <div className="img">
                <img src={course4}></img>
              </div>
              <p>Trendy Courses</p>
              <div className="btnarea">
                <ul className="btns">
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStarHalfAlt /></li>
                </ul>
                <div className='btn1'>
                  <a href='#'> know more</a>
                </div>
              </div>
            </div>

            <div className="singleitem">
              <div className="img">
                <img src={course5}></img>
              </div>
              <p>Civil-Mech.Engineering</p>
              <div className="btnarea">
                <ul className="btns">
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStarHalfAlt /></li>
                </ul>
                <div className='btn1'>
                  <a href='#'> know more</a>
                </div>
              </div>
            </div>
            <div className="singleitem">
              <div className="img">
                <img src={course6}></img>
              </div>
              <p>Business Development</p>
              <div className="btnarea">
                <ul className="btns">
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStarHalfAlt /></li>
                </ul>
                <div className='btn1'>
                  <a href='#'> know more</a>
                </div>
              </div>

            </div>
            <div className="viewbtn">
              <span>View All Courses<BsArrowRight></BsArrowRight></span>
            </div>
          </div>
        </div>

      </div>
      {/* ================gallery section end============== */}


      {/* ==================about us section start================= */}
      <div className="about">
        <div className='aboutinfo'>
          <div className="about_shape">
            <div className="two">
              <div className="line"></div>
              <font>about us</font>
            </div>
            <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
            <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively..</p>
            <div className="aboutbtn">
              <span>Enroll Now..!  <BsArrowRight></BsArrowRight></span>
            </div>
          </div>
        </div>
        <div className='aboutimg'>
          <img src={about}></img>
          <div className="aboutimg_layer">
            <span><FaPlay></FaPlay></span>
          </div>
        </div>
      </div>

      {/* ==================about us section end================= */}

      {/* ==============coutdown section start===================== */}
      <div className="coutdown">
        <img src={count}></img>
      </div>
      {/* ==============coutdown section end===================== */}


      {/* ==================student secton start============= */}
      <div className="container">
        <div className="testimonial">
          <div className="review">
            <div className="view">
              <div className="line"></div>
              <font>HAPPY STUDENTS</font>
            </div>
            <h1>ALUMNI SPEAK</h1>
            <div id="cot">
              <img src={cot}></img>
              <div id="arrow">
                <p className='icon'><IoIosArrowBack /></p>
                <p className='icon'><IoIosArrowForward /></p>
              </div>
            </div>
            <text className="text">
              Good institute and excellent presentation skills and if any doubts regarding topics they will clear immediately.
            </text>
            <div className="usere_info">
              <div className="users">
                <img src={userinfo} class="views"></img>
              </div>
              <div className="user_name">
                <span>Ishita Chopra</span>
                <font>froented developer</font>
                <i> @ samp technology</i>
              </div>
            </div>
          </div>
          <div className="viewimg">
            <img src={view}></img>
          </div>
        </div>
      </div>
      {/* ==================student secton end============= */}

      {/* =================why choose creative section start============= */}
      <div className="choosebgcolor">
        <div className="container">
          <div className="chose">
            <div className="creative">
              <div className="cre-info">
                <div className="line"></div>
                <font>READ OUR DIFFERENCE</font>
              </div>
              <p>WHY CHOOSE CREATIVE</p>
              <div className="allitem">
                <div className="item">
                  <div className="single">
                    <img src={require("./image/1.PNG")}></img>
                  </div>
                  <h6 className="ch_text">Industry Experts As Trainers</h6>
                  <span className="ch-info">Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</span>
                </div>

                <div className="item">
                  <div className="single1">
                    <img src={require("./image/2.PNG")}></img>
                  </div>
                  <h6 className="ch_text">Latest Curriculum</h6>
                  <span className="ch-info">We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time..</span>
                </div>

                <div className="item">
                  <div className="single2">
                    <img src={require("./image/3.PNG")}></img>
                  </div>
                  <h6 className="ch_text">Latest Technology</h6>
                  <span className="ch-info">We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</span>
                </div>

                <div className="item">
                  <div className="single3">
                    <img src={require("./image/4.PNG")}></img>
                  </div>
                  <h6 className="ch_text">Interview Assistance</h6>
                  <span className="ch-info">At the end of each training,our training instructor will go through the possible technical questions you may be asked.</span>
                </div>

                <div className="item">
                  <div className="single4">
                    <img src={require("./image/5.PNG")}></img>
                  </div>
                  <h6 className="ch_text">Free Upgradation</h6>
                  <span className="ch-info">We will be provided free upgradation for any newer version of the course you have.</span>
                </div>

                <div className="item">
                  <div className="single5">
                    <img src={require("./image/6.PNG")}></img>
                  </div>
                  <h6 className="ch_text">Lifetime Support</h6>
                  <span className="ch-info">We will provide you lifetime support on all the courses you learned from us.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =================why choose creative section end============= */}

      {/* ================student palcement section start================= */}
      <div className="container">
        <div className="companies">
          <div className="cre-info">
            <div className="line"></div>
            <font>STUDENT PLACEMENT</font>
          </div>
          <p>OUR RECRUITMENT PARTNERS</p>
          <div className="container">
            <div className="com-logo">
              <div className="com_infos">
                <div className="com-name">
                  <div className="com-img">
                    <img src={require("./image/diversity.png")}></img>
                  </div>
                  <div className="com-img">
                    <img src={require("./image/iTechCloud-Solution.png")}></img>
                  </div>
                  <div className="com-img">
                    <img src={require("./image/INFINITE-DEVELOPERS.png")}></img>
                  </div>
                  <div className="com-img">
                    <img src={require("./image/Lemolite-Technologies-LLP.png")}></img>
                  </div>
                  <div className="com-img">
                    <img src={require("./image/wokontech.png")}></img>
                  </div>
                  <div className="com-img">
                    <img src={require("./image/Uptechies.png")}></img>
                  </div>
                  <div className="com-img">
                    <img src={require("./image/VIRANI-INFOTECH.png")}></img>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="Demanded">
            <div className="all_btns">
              <h4>Our Demanded Course -</h4>
              <div className="our_btn">
                <div className="de_courses">
                  <a href="#">Multimedia training institute</a>
                </div>
                <div className="de_courses">
                  <a href="#">Web design training institute in katargam</a>
                </div>
                <div className="de_courses">
                  <a href="#">Creo parametrics training institute in varachha</a>
                </div>
                <div className="de_courses">
                  <a href="#">codeigniter training institute in katargam</a>
                </div>
                <div className="de_courses">
                  <a href="#">Programming language course</a>
                </div>
                <div className="de_courses">
                  <a href="#">Laravel training institute in surat</a>
                </div>
                <div className="de_courses">
                  <a href="#">codeigniter training course</a>
                </div>
                <div className="de_courses">
                  <a href="#">Civil engineering training institute in Mota Varachha</a>
                </div>
                <div className="de_courses">
                  <a href="#">Android training course</a>
                </div>
                <div className="de_courses">
                  <a href="#">Adobe illustrator design</a>
                </div>
                <div className="de_courses">
                  <a href="#">PHP Project Training in Surat</a>
                </div>
                <div className="de_courses">
                  <a href="#">PHP training course</a>
                </div>
                <div className="de_courses">
                  <a href="#">Best C programming language training institute</a>
                </div>
                <div className="de_courses">
                  <a href="#">Android app development company</a>
                </div>
                <div className="de_courses">
                  <a href="#">flutter training course</a>
                </div>
                <div className="de_courses">
                  <a href="#">C++ programming language course</a>
                </div>

              </div>
              <div className="show_more">
                <a href="#">show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================student palcement section end================= */}

      {/* ==================footer section start=========================== */}
      <div className="ft-bgcolor">
        <div className="container">
          <div className="footer">
            <div className="footer-info">
              <div className="footer_logo">
                <img src={ftlogo}></img>
                <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                <ul class="follow">FOLLOW US ON</ul>
                <div class="footer_icon">
                  <ul>
                    <li><a href="#" target="_blank"> <FaFacebookF /></a></li>
                    <li><a href="#" target="_blank"><FaTwitter /></a></li>
                    <li><a href="#" target="_blank"><TfiGoogle /></a></li>
                    <li><a href="#" target="_blank"><FaLinkedin /></a></li>
                    <li><a href="#" target="_blank" ><ImInstagram /></a></li>
                    <li><a href="#" target="_blank"><TbBrandYoutube /></a></li>
                    <li><a href="#" target="_blank"><BsWhatsapp /></a></li>
                  </ul>
                </div>
              </div>
              <div className="feature_link">
                <div className='feature_icon'>
                  <h4>FEATURE LINKS</h4>
                  <div className="ft_about">
                    <ul><FaHandPointRight /></ul>
                    <p>about us</p>
                  </div>
                  <div className="ft_about">
                    <ul><FaHandPointRight /></ul>
                    <p>bolgs</p>
                  </div>
                  <div className="ft_about">
                    <ul><FaHandPointRight /></ul>
                    <p>join us</p>
                  </div>
                  <div className="ft_about">
                    <ul><FaHandPointRight /></ul>
                    <p>company login</p>
                  </div>
                  <div className="ft_about">
                    <ul><FaHandPointRight /></ul>
                    <p>Certificate verification</p>
                  </div>
                </div>
              </div>
              <div className="contact_us">
                <div className="contact_info">
                  <h4>CONTACT US</h4>
                  <span>Head office-yogichowk</span>
                  <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk,<br></br> Varachha, Surat./</p>
                  <b>Mo:</b><t>+91 90333 16003</t><br></br><br></br>
                  <span>Other branches</span>
                  <div className='university'>
                    <ul><FaUniversity /></ul>
                    <p>katargam</p>
                  </div>
                  <div className='university'>
                    <ul><FaUniversity /></ul>
                    <p>mota varachha</p>
                  </div>
                  <div className='university'>
                    <ul><FaUniversity /></ul>
                    <p>adajan</p>
                  </div>
                  <div className='university'>
                    <ul><FaUniversity /></ul>
                    <p>navsari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-bgcolor">
        <div className="container">
          <div className="copyright">
            <font>&copy;</font><p>2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
          </div>
        </div>
      </div>
      {/* ==================footer section end=========================== */}
    </section>
  )
}
export default App;
