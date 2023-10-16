import React, { useState } from "react";
import "./App.css";
import image1 from "./image/Ellipse 1829.png";
import image2 from "./image/Ellipse 1830 (1).png";
import image3 from "./image/india-gate-svgrepo-com 3.svg";
import image4 from "./image/gate-of-india 1.png";
import image5 from "./image/Ellipse 757.png";
import image6 from "./image/Ellipse 757 (1).png";
import image7 from "./image/image 14.png";
import image8 from "./image/Rectangle 40174.png";
import image9 from "./image/Rectangle 40166.png";
import image10 from "./image/Rectangle 40176.png";
import image11 from "./image/Rectangle 40175.png";
import image12 from "./image/Rectangle 40177.png";
import image13 from "./image/Rectangle 40179.png";
import image14 from "./image/Rectangle 40180.png";
import image15 from "./image/Rectangle 40181.png";
import image16 from "./image/Rectangle 40182.png";
import image17 from "./image/Rectangle 40183.png";
import image18 from "./image/Rectangle 40191.png";
import image19 from "./image/Rectangle 40190.png";
import image20 from "./image/_x33_8-Award_symbol.png";
import image21 from "./image/Vector.png";
import image22 from "./image/Vector 1.png";
import image23 from "./image/Mobile app store badge (1).png";
import image24 from "./image/Mobile app store badge.png";
import image25 from "./image/“.png";
import image26 from "./image/Ellipse 15.png";
import image27 from "./image/Group 62.png";
import image28 from "./image/Rectangle 401666 (1).png";
import image29 from "./image/Rectangle 40167 (1).png";
import image30 from "./image/Rectangle 40168.png";
import image31 from "./image/Rectangle 40169.png";
import image32 from "./image/Rectangle 40170.png";
import image33 from "./image/Rectangle 40171.png";
import image34 from "./image/Indorinama-Page 2.png";
import image35 from "./image/Indorinama-Page 2 (1).png";
import image36 from "./image/Indorinama-Page 2 (2).png";
import image37 from "./image/Indorinama-Page 2 (3).png";
import image38 from "./image/Indorinama-Page 2 (4).png";
import image39 from "./image/Ellipse 49.png";
import image40 from "./image/Ellipse 50.png";
import image41 from "./image/Ellipse 51.png";
import image42 from "./image/Ellipse 52.png";
import image43 from "./image/image 103.png";
import image44 from "./image/location-svgrepo-com (1) 1.png";
import image45 from "./image/call-192-svgrepo-com 1.png";
import image46 from "./image/email-svgrepo-com 1.png";
export const main = () => {
  return (
    <div className="full">
      <div className="mainone">
        <div className="onecity">
          <img src={image4} />
          <p>Mumbai</p>
        </div>
        <div className="twocity">
          <img src={image1} />
          <p>Delhi-NCR</p>
        </div>
        <div className="thcity">
          <img src={image2} />
          <p>Bengaluru</p>
        </div>
        <div className="facity">
          <img src={image3} />
          <p>Hyderabad</p>
        </div>
        <div className="ffcity">
          <img src={image3} />
          <p>Chandigarh</p>
        </div>
        <div className="all">
          <p>
            View All <br /> Cities
          </p>
          <img src={image5} />
        </div>
      </div>

      <div className="container">
        <input type="radio" id="i1" name="images" defaultChecked />
        <input type="radio" id="i2" name="images" />
        <input type="radio" id="i3" name="images" />
        <input type="radio" id="i4" name="images" />
        <input type="radio" id="i5" name="images" />

        <div className="slide_img" id="one">
          <div className="mainthree">
            <div className="main3left">
              <h1>Sell Old Phone</h1>
              <p>
                From Your Doorstep or at any of our 200
                <br /> stores Pan India
              </p>
              <div className="sellnow">
                <p>Sell Now</p>
                <img src={image6} />
              </div>
            </div>
            <div className="main3right">
              {" "}
              <img src={image7} />
            </div>
          </div>

          <label className="prev" htmlFor="i5">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i2">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="two">
          <div className="mainthree">
            <div className="main3left">
              <h1>Sell Old Phone</h1>
              <p>
                From Your Doorstep or at any of our 200
                <br /> stores Pan India
              </p>
              <div className="sellnow">
                <p>Sell Now</p>
                <img src={image6} />
              </div>
            </div>
            <div className="main3right">
              {" "}
              <img src={image7} />
            </div>
          </div>
          <label className="prev" htmlFor="i1">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i3">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="three">
          <div className="mainthree">
            <div className="main3left">
              <h1>Sell Old Phone</h1>
              <p>
                From Your Doorstep or at any of our 200
                <br /> stores Pan India
              </p>
              <div className="sellnow">
                <p>Sell Now</p>
                <img src={image6} />
              </div>
            </div>
            <div className="main3right">
              {" "}
              <img src={image7} />
            </div>
          </div>
          <label className="prev" htmlFor="i2">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i4">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="four">
          <div className="mainthree">
            <div className="main3left">
              <h1>Sell Old Phone</h1>
              <p>
                From Your Doorstep or at any of our 200
                <br /> stores Pan India
              </p>
              <div className="sellnow">
                <p>Sell Now</p>
                <img src={image6} />
              </div>
            </div>
            <div className="main3right">
              {" "}
              <img src={image7} />
            </div>
          </div>

          <label className="prev" htmlFor="i3">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i5">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="five">
          <div className="mainthree">
            <div className="main3left">
              <h1>Sell Old Phone</h1>
              <p>
                From Your Doorstep or at any of our 200
                <br /> stores Pan India
              </p>
              <div className="sellnow">
                <p>Sell Now</p>
                <img src={image6} />
              </div>
            </div>
            <div className="main3right">
              {" "}
              <img src={image7} />
            </div>
          </div>

          <label className="prev" htmlFor="i4">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i1">
            <span>&#x203a;</span>
          </label>
        </div>

        <div id="nav_slide">
          <label htmlFor="i1" className="dots" id="dot1"></label>
          <label htmlFor="i2" className="dots" id="dot2"></label>
          <label htmlFor="i3" className="dots" id="dot3"></label>
          <label htmlFor="i4" className="dots" id="dot4"></label>
          <label htmlFor="i5" className="dots" id="dot5"></label>
        </div>
      </div>

      <div className="fourmain">
        <h1>Designing</h1>
        <h1>Digital Marketing</h1>
        <h1>Printing</h1>
        <h1>Corporate Gifting</h1>
        <h1>In Shop Branding</h1>
        <h1>Packaging</h1>
      </div>
      <div className="ffmain">
        <div className="ffone">
          <img src={image9} />
          <img src={image8} />
          <img src={image10} />
          <img src={image11} />
          <img src={image12} />
          <img src={image13} />
        </div>
        <div className="fftwo">
          <img src={image14} />
          <img src={image15} />
          <img src={image16} />
          <img src={image17} />
          <img src={image18} />
          <img src={image19} />
        </div>
      </div>

      <div className="fifthmain">
        <div className="heading">
          <h5>Trendings Offers</h5>
        </div>
        <div className="eight">
          <div className="slideshowing">
            <div className="slidewrappering">
              <div className="slideeing">
                <div className="card1">
                  <h4>BUS</h4>
                  <p>
                    Save up to Rs 250 on <br />
                    bus tickets
                  </p>
                  <h6>Valid Till 30 Sep</h6>
                  <div className="cardbottom">
                    <h5>First</h5>
                  </div>
                </div>
              </div>
              <div className="slideeing">
                <div className="card1 card2">
                  <h4>BUS</h4>
                  <p>
                    Save up to Rs 250 on <br />
                    bus tickets
                  </p>
                  <h6>Valid Till 30 Sep</h6>
                  <div className="cardbottom">
                    <h5>Superhit</h5>
                  </div>
                </div>
              </div>
              <div className="slideeing">
                <div className="card1 card3">
                  <h4>BUS</h4>
                  <p>
                    Save up to Rs 250 on <br />
                    bus tickets
                  </p>
                  <h6>Valid Till 30 Sep</h6>
                  <div className="cardbottom">
                    <h5>Bus300</h5>
                  </div>
                </div>
              </div>
              <div className="slideeing">
                <div className="card1">
                  <h4>BUS</h4>
                  <p>
                    Save up to Rs 250 on <br />
                    bus tickets
                  </p>
                  <h6>Valid Till 30 Sep</h6>
                  <div className="cardbottom">
                    <h5>First</h5>
                  </div>
                </div>
              </div>
              <div className="slideeing">
                <div className="card1 card2">
                  <h4>BUS</h4>
                  <p>
                    Save up to Rs 250 on <br />
                    bus tickets
                  </p>
                  <h6>Valid Till 30 Sep</h6>
                  <div className="cardbottom">
                    <h5>Superhit</h5>
                  </div>
                </div>
              </div>
              <div className="slideeing">
                <div className="card1 card3">
                  <h4>BUS</h4>
                  <p>
                    Save up to Rs 250 on <br />
                    bus tickets
                  </p>
                  <h6>Valid Till 30 Sep</h6>
                  <div className="cardbottom">
                    <h5>First</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sixthmain">
        <h3>
          Our Latest <span className="diff"> Awards</span>
        </h3>
        <div className="rewards">
          <img src={image20} />
          <img src={image22} />
          <img src={image22} />
          <img src={image22} />
          <img src={image21} />
        </div>
      </div>
      <div className="semain">
        <h5>Download the App</h5>
        <p>
          Sell your old phone | Buy top-qulaity refurbished phones |<br /> Get
          your phone repaired
        </p>
        <div className="semainimg">
          {" "}
          <img src={image24} /> <img src={image23} />
        </div>
      </div>
      <div className="ourclient">
        <h1>What Our Clients Say</h1>
      </div>
      <div className="eight">
        <div className="slideshow">
          <div className="slidewrapper">
            <div className="slidee manu1 ">
              <img src={image25} /> {""}
              <p>
                Cashify has been a Fantastic Startup
                <br /> that has brought so much value to the
                <br /> Indian customer.we are Proud to <br />
                partner with them and help our Mi fans
                <br /> get better exchange value for our
                <br /> phones!
              </p>
              <h6>
                Manu jain is a leading indian
                <br /> entrepreneur & VP of Xiaomi which is
                <br /> one of india,s Largest smartphone
                <br /> Brands.
              </h6>
              <h5>____________________</h5>
              <div className="manubottom">
                <img src={image26} />
                <h4>
                  Manu Jain <br />
                  <span className="mo">VP & MD, Xiaomi India</span>
                </h4>
                <img src={image27} />
              </div>
            </div>
            <div className="slidee manu1 ">
              <img src={image25} /> {""}
              <p>
                Cashify has been a Fantastic Startup
                <br /> that has brought so much value to the
                <br /> Indian customer.we are Proud to <br />
                partner with them and help our Mi fans
                <br /> get better exchange value for our
                <br /> phones!
              </p>
              <h6>
                Manu jain is a leading indian
                <br /> entrepreneur & VP of Xiaomi which is
                <br /> one of india,s Largest smartphone
                <br /> Brands.
              </h6>
              <h5>____________________</h5>
              <div className="manubottom">
                <img src={image26} />
                <h4>
                  Manu Jain <br />
                  <span className="mo">VP & MD, Xiaomi India</span>
                </h4>
                <img src={image27} />
              </div>
            </div>
            <div className="slidee manu1 ">
              <img src={image25} /> {""}
              <p>
                Cashify has been a Fantastic Startup
                <br /> that has brought so much value to the
                <br /> Indian customer.we are Proud to <br />
                partner with them and help our Mi fans
                <br /> get better exchange value for our
                <br /> phones!
              </p>
              <h6>
                Manu jain is a leading indian
                <br /> entrepreneur & VP of Xiaomi which is
                <br /> one of india,s Largest smartphone
                <br /> Brands.
              </h6>
              <h5>____________________</h5>
              <div className="manubottom">
                <img src={image26} />
                <h4>
                  Manu Jain <br />
                  <span className="mo">VP & MD, Xiaomi India</span>
                </h4>
                <img src={image27} />
              </div>
            </div>
            <div className="slidee manu1 ">
              <img src={image25} /> {""}
              <p>
                Cashify has been a Fantastic Startup
                <br /> that has brought so much value to the
                <br /> Indian customer.we are Proud to <br />
                partner with them and help our Mi fans
                <br /> get better exchange value for our
                <br /> phones!
              </p>
              <h6>
                Manu jain is a leading indian
                <br /> entrepreneur & VP of Xiaomi which is
                <br /> one of india,s Largest smartphone
                <br /> Brands.
              </h6>
              <h5>____________________</h5>
              <div className="manubottom">
                <img src={image26} />
                <h4>
                  Manu Jain <br />
                  <span className="mo">VP & MD, Xiaomi India</span>
                </h4>
                <img src={image27} />
              </div>
            </div>
            <div className="slidee manu1 ">
              <img src={image25} /> {""}
              <p>
                Cashify has been a Fantastic Startup
                <br /> that has brought so much value to the
                <br /> Indian customer.we are Proud to <br />
                partner with them and help our Mi fans
                <br /> get better exchange value for our
                <br /> phones!
              </p>
              <h6>
                Manu jain is a leading indian
                <br /> entrepreneur & VP of Xiaomi which is
                <br /> one of india,s Largest smartphone
                <br /> Brands.
              </h6>
              <h5>____________________</h5>
              <div className="manubottom">
                <img src={image26} />
                <h4>
                  Manu Jain <br />
                  <span className="mo">VP & MD, Xiaomi India</span>
                </h4>
                <img src={image27} />
              </div>
            </div>
            <div className="slidee manu1 ">
              <img src={image25} /> {""}
              <p>
                Cashify has been a Fantastic Startup
                <br /> that has brought so much value to the
                <br /> Indian customer.we are Proud to <br />
                partner with them and help our Mi fans
                <br /> get better exchange value for our
                <br /> phones!
              </p>
              <h6>
                Manu jain is a leading indian
                <br /> entrepreneur & VP of Xiaomi which is
                <br /> one of india,s Largest smartphone
                <br /> Brands.
              </h6>
              <h5>_____________________________</h5>
              <div className="manubottom">
                <img src={image26} />
                <h4>
                  Manu Jain <br />
                  <span className="mo">VP & MD, Xiaomi India</span>
                </h4>
                <img src={image27} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ninemain">
        <h2>Your Perfect Advertising Partner</h2>
        <p>
          Excellent Publicity is forever expanding your brand with high quality
          service that combines creativity with value pricing. We enjoy <br />{" "}
          our work because, first - we admire the advertising world, and second,
          we know that our ideas and strategies make a difference. <br />
          We play to win, with the primary goal of assisting our customers in
          promoting their successful brand campaigns.
        </p>
        <div className="nimg">
          <img src={image28} />
          <img src={image29} />
          <img src={image30} />
          <img src={image31} />
          <img src={image32} />
          <img src={image33} />
        </div>
        <div className="about">
          <h6>About us</h6>
          <img src={image5} />
        </div>
      </div>
      <div className="tenmain">
        <h5>Our Venture</h5>
        <div className="tenimg">
        <img src={image43} />
          <img src={image34} />
          <img src={image35} />
          <img src={image36} />
          <img src={image37} />
          <img src={image38} />
        </div>
      </div>
      <div className="elmain">
        <div className="social">
          <p>
            Lorem Ipsum is simply dummy text of the <br />
            and typesetting industry. Lorem Ipsum is <br /> dummy text of the
            printing.
          </p>
          <img src={image39} />
          <img src={image40} />
          <img src={image41} />
          <img src={image42} />
        </div>
        <div className="link">
          <h3>Quick Links</h3>
          <p>
            Home
            <br />
            About Us
            <br />
            Blog
            <br />
            FAQ
            <br />
            Services
          </p>
        </div>
        <div className="offer">
          <h3>Our Offerings</h3>
          <p>
            Radio
            <br />
            Cinema
            <br />
            Transit
            <br />
            Outdoor
            <br />
            Promotional Offers
          </p>
        </div>
        <div className="contact">
          <h5>Contact us</h5>
          
           <p>
           <img src={image44} /> 124 Brooklyn, New York
            <br /> {"  "}United States
          </p>
          <br />
          <p><img src={image45} />+11 2 3456 7890</p>
          <br />
          <p><img src={image46} />info@houzing.com</p>
        </div>
      </div>
    </div>
  );
};
export default main;
