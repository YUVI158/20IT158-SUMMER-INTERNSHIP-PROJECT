import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Card from "./Components/Card";
import Button from "./Components/Button.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <React.StrictMode>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>
      <div className="container-fluid ox">
        <nav className="navbar  container-fluid bgw mb-5 col-lg-12 navbar-expand-xl py-2 nav navbar-light ">
          <div className="container col-lg-12">
            <img
              src={process.env.PUBLIC_URL + "./images/Group.svg"}
              className="r-test1"
              alt=""
            />
            <img className="col-lg-2" src="./img/Group.svg" alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="justify-content-end collapse navbar-collapse"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a
                    className="nav-link   text-dark  mx-3 fn"
                    href="www.google.com"
                  >
                    <p className="fts2 fw1 fs5 my-auto  ">About</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link  text-dark  mx-3 fn"
                    href="www.google.com"
                  >
                    <p className="fts2 fw1 fs5 my-auto ">Services</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link  text-dark  mx-3 fn"
                    href="www.google.com"
                  >
                    <p className="fts2 fw1 fs5 my-auto ">Case studies</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark  mx-3 fn"
                    href="www.google.com"
                  >
                    <p className="fts2 fw1 fs5 my-auto ">Our work</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link  text-dark  mx-3 fn"
                    href="www.google.com"
                  >
                    <p className="fts2 fw1 fs5 my-auto ">Contact</p>
                  </a>
                </li>
                <li className="nav-item col-lg3">
                  <a
                    className=" btn-danger mx-3 my-auto py-2 px-4 text-light nav-link"
                    href="www.google.com"
                  >
                    <Button btn="Hire your Team"></Button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="cr1 circle2"></div>
        <div className="cr1 circle3"></div>
        <div className="cr1 circle8"></div>
        <div className="cr1 circle9"></div>
        <img
          src={process.env.PUBLIC_URL + "./images/105.png"}
          className="r-test1 img6 position-absolute"
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "./images/104.png"}
          className="r-test1 img8 position-absolute"
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "./images/103.png"}
          className="r-test1 img7 position-absolute"
          alt=""
        />
      </div>
      <section className="sect">
        <div className="wd mx-auto mt-5">
          <div className="col-12 col-sm-12 container-fluid  my-5 pb-5 d-flex rs9 align-items-center                         justify-content-between border-dark">
            <div className="col-lg-9  col-md-11 col-12 col-sm-12  d-flex res8 flex-column   border-primary ">
              <div className="ac col-xxl-6  mb-1  ps-0">
                <h1 className="fts1 fw3 fs2">
                  Hire trusted website Designers and save up-to 50% today.
                </h1>
              </div>
              <div className="ac col-xxl-7  pe-3  mb-1 ">
                <p className="fts2 fw3 fs5 my-2">
                  You focus on innovating – we take care of continuous vetting,
                  project management, and international payments.
                </p>
              </div>
              <div className="ac2 col-xxl-7 col-xl-9  col-lg-10 col-md-11 col-sm-11 col-10 subhead  border-dark">
                <div className="my-2 mx-auto d-flex">
                  <div className=" me1">
                    <img
                      src={process.env.PUBLIC_URL + "./images/2016.svg"}
                      className="r-test1"
                      alt=""
                    />
                  </div>
                  <div className=" col-11 ">
                    <span className="fts2 fw2 fs7">
                      Increase your profitability by over 50%.
                    </span>
                  </div>
                </div>
                <div className="my-2 d-flex">
                  <div className=" me1">
                    <img
                      src={process.env.PUBLIC_URL + "./images/2016.svg"}
                      className="r-test1"
                      alt=""
                    />
                  </div>
                  <div className=" col-11 ">
                    <span className="fts2 fw2 fs7">
                      Hire qualified developers and get guaranteed results.
                    </span>
                  </div>
                </div>
                <div className="my-2 d-flex">
                  <div className=" me1">
                    <img
                      src={process.env.PUBLIC_URL + "./images/2016.svg"}
                      className="r-test1"
                      alt=""
                    />
                  </div>
                  <div className=" col-11 ">
                    <span className="fts2 fw2 fs7">
                      Chat with your dedicated developer instantly on a
                      day-to-day basis.
                    </span>
                  </div>
                </div>
                <div className="my-2 d-flex">
                  <div className=" me1">
                    <img
                      src={process.env.PUBLIC_URL + "./images/2016.svg"}
                      className="r-test1"
                      alt=""
                    />
                  </div>
                  <div className=" col-11 ">
                    <span className="fts2 fw2 fs7">
                      Start in 24 hrs, no minimum commitments.
                    </span>
                  </div>
                </div>
                <div className="my-2 d-flex">
                  <div className=" me1">
                    <img
                      src={process.env.PUBLIC_URL + "./images/2016.svg"}
                      className="r-test1"
                      alt=""
                    />
                  </div>
                  <div className=" col-11 ">
                    <span className="fts2 fw2 fs7">
                      Work with a team at a modern, secure, Google® verified
                      office.
                    </span>
                  </div>
                </div>
              </div>
              <div className="container  col-xxl-12 col-xl-4 col-lg-5 col-md-6 col-sm-7  mt-4 mb-5 col-9 ps-0 ac ">
                <div className="  col-xxl-3 col-xl-11 col-lg-10 col-md-9 col-sm-11 ac col-12">
                  <a className="col-12 mx-auto " href="www.google.com">
                    <Button btn="Request a Quote" className=" btn2 mt-2 mx-auto mx-auto  fts3 fw1 fs5 py-3  col-12  ">
                      
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-danger col-xxl-1 col-xl-11 col-lg-10 col-md-12 col-sm-12 d-flex justify-content-end rs9b">
              <img
                src={process.env.PUBLIC_URL + "./images/105.png"}
                className="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-11 rs9ba  r-test1 "
                alt=""
              />
              <img
                src={process.env.PUBLIC_URL + "./images/103.png"}
                className="r-test1 img2 rs9bb position-absolute"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto  wd py-5 mt-5 mb-5 h-50 d-flex flex-column justify-content-center align-items-center">
          <div className="container mb-2 fts1 fw3 fs2 text-center  mx-auto">
            <p className="fts1 fw3 fs2">The products we've built have impact</p>
          </div>
          <div className="col-xxl-10 col-xl-9 col-lg-10 col-md-11 col-sm-10 col-10 mb-5 subhead2 text-center  mx-auto">
            <p className="fts2 fw3 fs5">
              Our clients' products have been used by some of the biggest
              brands.
            </p>
          </div>
          <div className="col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 px-3 bndp subhead  d-flex flex-wrap  text-center mx-auto">
            <img
              src={process.env.PUBLIC_URL + "./images/1080.svg"}
              className="r-test1 bnd"
              alt=""
            />
            <img
              src={process.env.PUBLIC_URL + "./images/1081.svg"}
              className="r-test1 bnd"
              alt=""
            />
            <img
              src={process.env.PUBLIC_URL + "./images/1082.svg"}
              className="r-test1 bnd"
              alt=""
            />
            <img
              src={process.env.PUBLIC_URL + "./images/1083.svg"}
              className="r-test1 bnd"
              alt=""
            />
            <img
              src={process.env.PUBLIC_URL + "./images/1084.svg"}
              className="r-test1 bnd"
              alt=""
            />
          </div>
          <br />
          <div className="container col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-9 mt-4 mx-auto mb-5 d-flex ">
            <div className="mx-auto col-xxl-9 col-xl-11 col-lg-10 col-md-11 col-sm-12 col-12">
              <a className="col-12 mx-auto " href="www.googlw.com">
                <Button btn="Hire Your Team" className=" btn2 mt-2 mx-auto mx-auto fts3 fw1 fs5 py-3 col-12  ">
                  
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wd mx-auto  pb-5">
          <div className="row row-cols-3 h-75 d-flex rs2 justify-content-center align-items-center gx-1 g-lg-4">
            <div className="ps-2 col-12 col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-12   ">
              <img
                src={process.env.PUBLIC_URL + "./images/401.png"}
                className="r-test1 img4 w-100"
                alt=""
              />
            </div>
            <div className="col-12  col-lg-5 rs2b col-xl-5 col-md-12 col-sm-12 border-dark d-flex pb-4 my-auto h-100">
              <div className=" pt-5">
                <div className="col-12 border-danger mb-1 col-sm-12  col-lg-12 col-md-12 rs2ba  col-xl-10 col-xxl-8 pe-3 ">
                  <p className="fts1 fw3 fs2">
                    Unlimited Skills for Design project
                  </p>
                </div>
                <div className="col-12 mb-1 py-1 col-lg-12 col-sm-12 rs2bb col-md-10 col-xl-12 col-xxl-12 subhead ">
                  <p className="fts2 fw3 fs5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="col-12 col-lg-12 col-sm-10 col-md-9 rs2bc  col-xl-11 col-xxl-10 subhead ">
                  <div className="mb-2 d-flex">
                    <div className=" col-1">
                      <img
                        src={process.env.PUBLIC_URL + "./images/2016.svg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                    <div className=" col-11">
                      <span className="fts2 fw2 fs7">
                        Figma for UI/UX designs.
                      </span>
                    </div>
                  </div>
                  <div className="my-2 d-flex">
                    <div className=" col-1">
                      <img
                        src={process.env.PUBLIC_URL + "./images/2016.svg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                    <div className=" col-11">
                      <span className="fts2 fw2 fs7">
                        Adobe Photoshop for awesome backgrounds.
                      </span>
                    </div>
                  </div>
                  <div className="my-2 d-flex">
                    <div className=" col-1">
                      <img
                        src={process.env.PUBLIC_URL + "./images/2016.svg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                    <div className=" col-11">
                      <span className="fts2 fw2 fs7">
                        Adobe XD for project collaborations.
                      </span>
                    </div>
                  </div>
                  <div className="my-2 d-flex">
                    <div className=" col-1">
                      <img
                        src={process.env.PUBLIC_URL + "./images/2016.svg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                    <div className=" col-11">
                      <span className="fts2 fw2 fs7">
                        Invision for wireframing and structures.
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 d-flex">
                    <div className=" col-1">
                      <img
                        src={process.env.PUBLIC_URL + "./images/2016.svg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                    <div className=" col-11">
                      <span className="fts2 fw2 fs7">
                        Adobe Illustrator for vector based image creation.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wd mx-auto pb-3 mt-5">
          <div className=" head pt-4   text-center mx-auto">
            <p className="fts1 fw3 fs2">Our Web Design & Development Services</p>
          </div>
          <div className="col-11 px-2  rs1 subhead text-center  mx-auto">
            <p className="fts2 fw3 fs5">Regardless of how complex or even small your needs are, our dedicated in-house
              team
              of web developers and project managers will ensure that the job gets done with the highest level of
              professionalism and most cost affordably.</p>
          </div>
          <div className="row row-cols-1  row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3 g-5 g-lg-3">
            <div className="col  g-4">
              <div className="  bgg h-100 text-center">
                <Card1 name="CMS based Websites" source="./images/Group 3532.svg"></Card1>
              </div>
            </div>
            <div className="col g-4">
              <div className="  bgg h-100  text-center">
                <Card1 className="" name="Website Rescue and Optimisation" source="./images/Group 3533.svg"></Card1>
              </div>
            </div>
            <div className="col  g-4">
              <div className="  bgg h-100 text-center">
                <Card1 name="Fixing Bugs and Issues" source="./images/Group 3534.svg"></Card1>
              </div>
            </div>
            <div className="col  g-4">
              <div className="  bgg h-100 text-center">
                <Card1 name="ECommerce Solutions" source="./images/Group 3535.svg"></Card1>
              </div>
            </div>
            <div className="col  g-4">
              <div className=" mx-2 bgg h-100 text-center">
                <Card1 name="Web Applications" source="./images/Group 3536.svg"></Card1>
              </div>
            </div>
            <div className="col  g-4">
              <div className="  bgg h-100 text-center">
                <Card1 name="Business Automation" source="./images/Group 3537.svg"></Card1>
              </div>
            </div>
          </div>
          <div className="container col-xxl-3 col-xl-4 col-lg-5 col-md-7 col-sm-5  mt-4 mx-auto mb-5 col-7 d-flex ">
            <div className="mx-auto col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <a className="col-12 mx-auto " href="">
                <Button btn="Let's talk" className=" btn2 mt-2 mx-auto mx-auto  fts3 fw1 fs5 py-3  col-12  ">
                  
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative y x">
        <div className="bgg">
          <div className="wd mx-auto bgg py-5">
            <div className=" text-center mb-4 mx-auto">
              <h1 className="pt-3 fts1 fw3 fs2">Our recent work</h1>
            </div>
            <div
              id="carouselExampleDark"
              className=" container carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2500">
                  <div className="col12 d-flex rs4 bgw justify-content-between align-items-center ">
                    <div
                      className="  mry mx-auto col-xxl-5  col-lg-5 col-md-12 col-sm-12
                                col-12  col-xl-5 "
                    >
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-10
                                col-10 fts2  fw1 fs5 tac"
                      >
                        Case study
                      </div>
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-10
                                col-10   fts1 fw3 fs2 tac"
                      >
                        Project Details goes here
                      </div>
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-10
                                col-10 fts2 fw3  fs5 tac"
                      >
                        Integrated projects management makes it easier to keep
                        of client communication and deliver projects on time.
                      </div>
                    </div>
                    <div className="rsi col-lg-6 col-md-11 col-sm-12 mx-auto ">
                      <img
                        src={process.env.PUBLIC_URL + "./images/grp2.jpg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="2500">
                  <div className="col12 d-flex rs4 bgw justify-content-between align-items-center ">
                    <div
                      className="  mry mx-auto col-xxl-5 col-lg-5 col-md-6  col-sm-12
                                col-12  col-xl-5 "
                    >
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-11 col-md-6 col-sm-10
                                col-10 fts2  fw1 fs5 tac"
                      >
                        Case study
                      </div>
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-10
                                col-10   fts1 fw3 fs2 tac"
                      >
                        Project Details goes here
                      </div>
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-10 col-md-11 col-sm-10
                                col-10 fts2 fw3  fs5 tac"
                      >
                        Integrated projects management makes it easier to keep
                        of client communication and deliver projects on time.
                      </div>
                    </div>
                    <div className="rsi col-6">
                      <img
                        src={process.env.PUBLIC_URL + "./images/grp2.jpg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="2500">
                  <div className="col12 d-flex rs4 bgw justify-content-between align-items-center ">
                    <div
                      className="  mry mx-auto col-xxl-5 col-lg-5 col-md-12 col-sm-12
                                col-12  col-xl-5 "
                    >
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-10
                                col-10 fts2  fw1 fs5 tac"
                      >
                        Case study
                      </div>
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-10
                                col-10   fts1 fw3 fs2 tac"
                      >
                        Project Details goes here
                      </div>
                      <div
                        className="my-4 mx-auto col-xxl-12 col-xl-12 col-lg-10 col-md-11 col-sm-10
                                col-10 fts2 fw3  fs5 tac"
                      >
                        Integrated projects management makes it easier to keep
                        of client communication and deliver projects on time.
                      </div>
                    </div>
                    <div className="rsi col-6">
                      <img
                        src={process.env.PUBLIC_URL + "./images/grp2.jpg"}
                        className="r-test1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 lft">
                <button
                  className=" carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
              </div>
              <div className="col-2 rgt">
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="container col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12 mt-4 mx-auto mb-5 d-flex ">
              <div className="mx-auto col-xxl-10 col-xl-12 col-lg-10 col-md-11 col-sm-12 col-9">
                <a className="col-12 mx-auto " href="www.google.com">
                  <Button btn="Hire Your Team" className=" btn2 mt-2 mx-auto mx-auto fts3 fw1 fs5 py-3  col-12  ">
                    
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" x position-relative">
        <div className="circle4b cr1"></div>
        <div className="wd mx-auto  pt-3 pb-5">


          <div className="container text-center  mx-auto">
            <h1 className="my-5 fts1 fw3 fs2">Web Technologies We Work With</h1>
          </div>
          <div className="row row-cols-1 d-flex justify-content-center row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 g-4">
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="HTML" source="./images/wt1.svg"></Card2></div>
            </div>
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="CSS" source="./images/wt2.svg"></Card2></div>
            </div>
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="PHP" source="./images/wt3.svg"></Card2></div>
            </div>
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="ANGULAR JS" source="./images/wt4.svg"></Card2></div>
            </div>
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="MY SQL" source="./images/wt5.svg"></Card2></div>
            </div>
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="WORDPRESS" source="./images/wt6.svg"></Card2></div>
            </div>
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="SHOPIFY" source="./images/wt7.svg"></Card2></div>
            </div>
            <div className="col">
              <div className=" border d-flex h flex-column justify-content-around align-content-center text-center">
                <Card2 name="REACT JS" source="./images/wt8.svg"></Card2></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-4 bgg pb-1">
        <div className="wd mx-auto">
          <div className="container text-center mt-5 mx-auto">
            <p className="fts1 fw3 fs2">Industries We Serve</p>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-9 col-md-10 col-sm-11 col-11 mb-4 text-center mx-auto">
            <p className="fts2 fw3 fs5">Technology solutions to overcome the unique challenges and generate value
              for
              businesses in
              different industries.</p>
          </div>
          <div
            className="row row-cols-1 d-flex justify-content-center row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 g-4">
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Small & Medium Enterprises" source="./images/Group 3546.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Banking & Financial Services" source="./images/Group 3547.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Digital Marketing
                            Agencies" source="./images/Group 3548.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="E-Commerce
                            Companies" source="./images/Group 3549.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Healthcare and
                            Awareness" source="./images/Group 3550.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Education and
                            E-Learning" source="./images/Group 3551.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Logistics and
                            Transportation" source="./images/Group 3552.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Media and
                            Entertainment" source="./images/Group 3553.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Automotive Industries" source="./images/Group 3554.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Tours & Travel
                            Agencies" source="./images/Group 3555.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Artificial
                            Intelligence" source="./images/Group 3556.svg"></Card3>
              </div>
            </div>
            <div className="col">
              <div className=" bgw d-flex flex-column justify-content-center align-items-center text-center">
                <Card3 name="Manufacturing
                            Companies" source="./images/Group 3557.svg"></Card3>
              </div>
            </div>
          </div>
          <div className="container col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-9 col-12 mt-4 mx-auto mb-5 d-flex ">
            <div className="mx-auto col-xxl-9 col-xl-11 col-lg-12 col-md-11 col-sm-12 col-12">
              <a className="col-12 mx-auto " href="">
                <Button btn="Let's Talk About Your Industry" className=" btn2 mt-2 mx-auto mx-auto fts3 fw1 fs5 py-3 col-12  ">
                  
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="wd mx-auto mt-5 h-75  d-flex pt-3 justify-content-center align-items-center">
          <div className="row d-flex rs3 col-12 row-cols-2">
            <div class="container col-xxl-7 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 position-relative h-75 col-7">
              <img src={process.env.PUBLIC_URL + "./images/402.png"} width="100%" className="w-100 r-test1" alt="" />
            </div>
            <div className="container  col-xxl-5 col-xl-10 col-lg-10  col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center  col-5">
              <div className="col-12   mb-1 mt-4 head text-center ">
                <div className="fts1 fw3 fs2 mx-auto">
                  Frequently Asked Questions
                </div>
              </div>
              <div
                className="accordion accordion-flush  my-2"
                id="accordionFlushExample"
              >
                <div className="accordion-item border">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button bg-transparent"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <p className=" my-auto fts2 fw2 fs5 fc1 ">
                        Few resons why you should choose us
                      </p>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <p className="fts2 fw3 fs7 fc3 ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div className="accordion-item border">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <p className=" my-auto fts2 fw2 fs5 fc1 ">
                          Few resons why you should choose us
                        </p>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p className="fts2 fw3 fs7 fc3 ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div className="accordion-item border">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <p className=" my-auto fts2 fw2 fs5 fc1 ">
                          Few resons why you should choose us
                        </p>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p className="fts2 fw3 fs7 fc3 ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div className="accordion-item border">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <p className=" my-auto fts2 fw2 fs5 fc1 ">
                          Few resons why you should choose us
                        </p>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p className="fts2 fw3 fs7 fc3 ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button collapsed bg-transparent"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      <p className=" my-auto fts2 fw2 fs5 fc1 ">
                        Few resons why you should choose us
                      </p>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="fts2 fw3 fs7 fc3 ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9  mt-4 mx-auto mb-5 col-12 d-flex">
              <div className="mx-auto col-xxl-11 col-xl-10 col-lg-11 col-md-11 col-sm-12 col-xs-12 col-12">
                <a className="col-12 mx-auto " href="www.google.com">
                  <Button  btn="Let's Talk About Your Project" className=" btn2 mt-2  mx-auto fts3 fw1 fs5 py-3 col-12  ">
                    
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" x position-relative">
        <div className="cr1 circle6"></div>
        <div className="cr1 circle7"></div>
        <div className=" bgy py-4">
          <div className="wd  my-5 p-0  border-dark flex-column justify-content-between align-items-center mx-auto d-flex">
            <div className="col-12 d-flex rs8 justify-content-between align-items-center mx-auto">
              <div className="col-6 p-0 col-xl-6 col-lg-10  col-md-12 col-sm-12 col-12 position-relative d-flex align-items-center  border-primary mx-auto h-75">
                <img
                  src={process.env.PUBLIC_URL + "./images/1500.jpg"}
                  className="r-test1 rs8a"
                  alt=""
                />
              </div>
              <div className="col-6 col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12 container my-1  bgw zin border-primary mx-auto h1">
                <div className="col-10 mt-5 mb-5 d-flex justify-content-between mx-auto border-primary">
                  <img
                    src={process.env.PUBLIC_URL + "./images/2041.svg"}
                    className="r-test1"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "./images/2042.svg"}
                    className="r-test1"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "./images/2043.svg"}
                    className="r-test1"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "./images/2044.svg"}
                    className="r-test1"
                    alt=""
                  />
                </div>
                <div className="text-center container mt-4 mb-4 col-12 mx-auto ">
                  <p className="fts1 fw3 pb-2 ">
                    Get your FREE quote within 24 hours*
                  </p>
                </div>
                <div className="my-4 px-2 col-11 mx-auto ">
                  <input
                    className="col-12 form-control p-3"
                    type="text"
                    placeholder="Enter Your Name"
                    aria-label="default input example"
                  />
                </div>
                <div className="my-4 px-2 col-11 mx-auto ">
                  <input
                    className="col-12 form-control p-3"
                    type=" text"
                    placeholder="Enter Your Email"
                    aria-label="default input example"
                  />
                </div>
                <div className="mb-4 px-2 col-11 mx-auto ">
                  <input
                    className="col-12 form-control p-3"
                    type=" text"
                    placeholder="Enter Your Number"
                    aria-label="default input example"
                  />
                </div>
                <div className="col-11 px-2 mx-auto ">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    ></textarea>
                    <label for="floatingTextarea2">Project Brief</label>
                  </div>
                </div>
                <div className="container col-xxl-5 col-xl-5 col-lg-4 col-md-5 col-sm-6 col-8 mt-4 mx-auto mb-5 d-flex ">
                  <div className="mx-auto col-xxl-10 col-xl-12 col-lg-10 col-md-9 col-sm-10 col-12">
                    <a className="col-12 mx-auto " href="www.google.com">
                      <Button btn="Get a quote"></Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="foot ">
          <div className="wd mx-auto pt-5 pb-4 ">
            <div className=" col-12  d-flex mt-5 ">
              <div className="col-9  flex-wrap d-flex">
                <div className="col-lg-4 col-sm-4 col-md-6 ">
                  <p className="col-12 fts1 fw3 fs45">Redlio designs</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Terms</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Licenses</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Market API</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Market API</p>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-6">
                  <p className="col-12 fts1 fw3 fs45">Help</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">
                    Themes and Templates
                  </p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Authors</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Help Center</p>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <p className="col-12 fts1 fw3 fs45">Our Community</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Community</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Blog</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Forums</p>
                  <p className="col-12 fts2 fw3 fs5 fc2">Meetups</p>
                </div>
              </div>
              <div className="fi2 col-3   justify-content-end align-items-start ">
                <img
                  src={process.env.PUBLIC_URL + "./images/logo light.svg"}
                  className="r-test1"
                  alt=""
                />
              </div>
            </div>
            <div className="fi1 col-sm-12 col-md-12 d-flex justify-content-center rsa justify-content-end align-items-start ">
              <img
                src={process.env.PUBLIC_URL + "./images/logo light.svg"}
                className=" r-test1"
                alt=""
              />
            </div>
            <hr />
            <div className="container  d-flex justify-content-end">
              <div className="col-12 col-sm-3  d-flex justify-content-end align-items-start ">
                <div className="col-12 col-sm-10  d-flex justify-content-between align-items-start ">
                  <img
                    src={process.env.PUBLIC_URL + "./images/lg1.svg"}
                    className="r-test1"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "./images/lg2.svg"}
                    className="r-test1"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "./images/lg3.svg"}
                    className="r-test1"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "./images/lg4.svg"}
                    className="r-test1"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "./images/lg5.svg"}
                    className="r-test1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="container mt-1 mb-0 d-flex">
              <div className="col-9 ">
                <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12  rs6 d-flex  ">
                  <p className="fts3 fw3 fs8  mx-3">About Redlio</p>
                  <p className="fts3 fw3 fs8  mx-3">Careers</p>
                  <p className="fts3 fw3 fs8  mx-3">Privacy Policy</p>
                  <p className="fts3 fw3 fs8  mx-3">Sitemap</p>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7   d-flex ">
                  <p className="fts3 fw3 fs8 fc2 ">All price are in USD</p>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12   d-flex ">
                  <p className="fts3 fw3 fs8  fc2 ">
                    © 2021 Redlio Designs Pty Ltd. Trademarks and brands are the
                    property of their respective owners.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
