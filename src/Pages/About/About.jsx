import React from "react";
import "../../api/Assets/styles/main.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";



const About = () => {


  return (
    <>
    <Navbar/>
      <div className="container">
        <section>
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 text-center mb-5">
                <h1 className="page-title" style={{color: "#1d5818"}}>About</h1>
              </div>
            </div>
            <div className="row mb-5">
              <p className="p">
                Welcome to STM Conference, a leading organization dedicated to
                organizing and facilitating high-quality conferences and events
                all over the world. With a team of experienced professionals and
                a commitment to excellence, we are proud to be a trusted partner
                for researchers, scholars, academics, and professionals in
                various fields.
              </p>
            
            </div>
            <div className="card-group ">
            <div className="card mx-4 border">
              <div className="mx-auto p-2 d-flex">
                <svg
                  classname="tcb-icon mb-4"
                  width={80}
                  height={80}
                  viewBox="0 0 384 512"
                  data-id="icon-award-solid"
                  data-name
                >
                  <path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" />
                </svg>
                <h5 className="card-title  mx-4 mt-4">
                  OUR MISSION
                </h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  At STM Conference, our mission is to facilitate the
                  advancement of knowledge and foster collaboration among
                  professionals in various fields through high-quality
                  conferences and events worldwide. We aim to provide a platform
                  for individuals to share their research, ideas, and
                  experiences, promoting learning, discussion, and innovation.
                </p>
              </div>
            </div>
            <div className="card mx-4 border">
              <div className="mx-auto p-2 d-flex">
                <svg
                  className="tcb-icon"
                  width={80}
                  height={80}
                  viewBox="0 0 576 512"
                  data-id="icon-eye-solid"
                  data-name
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                </svg>
                <h5 className="card-title  mx-4 mt-4">OUR VISION</h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Our vision is to become a global leader in organizing
                  conferences and events that bring together professionals from
                  diverse backgrounds and cultures, promoting the exchange of
                  knowledge and ideas. We strive to create a welcoming and
                  inclusive environment that encourages collaboration,
                  creativity, and professional growth.
                </p>
              </div>
            </div>
            <div className="card mx-4 border">
              <div className="mx-auto p-2 d-flex" >
                <svg
                  className="tcb-icon"
                  width={80}
                  height={80}
                  viewBox="0 0 640 512"
                  data-id="icon-praying-hands-solid"
                  data-name
                >
                  <path d="M272 191.91c-17.6 0-32 14.4-32 32v80c0 8.84-7.16 16-16 16s-16-7.16-16-16v-76.55c0-17.39 4.72-34.47 13.69-49.39l77.75-129.59c9.09-15.16 4.19-34.81-10.97-43.91-14.45-8.67-32.72-4.3-42.3 9.21-.2.23-.62.21-.79.48l-117.26 175.9C117.56 205.9 112 224.31 112 243.29v80.23l-90.12 30.04A31.974 31.974 0 0 0 0 383.91v96c0 10.82 8.52 32 32 32 2.69 0 5.41-.34 8.06-1.03l179.19-46.62C269.16 449.99 304 403.8 304 351.91v-128c0-17.6-14.4-32-32-32zm346.12 161.73L528 323.6v-80.23c0-18.98-5.56-37.39-16.12-53.23L394.62 14.25c-.18-.27-.59-.24-.79-.48-9.58-13.51-27.85-17.88-42.3-9.21-15.16 9.09-20.06 28.75-10.97 43.91l77.75 129.59c8.97 14.92 13.69 32 13.69 49.39V304c0 8.84-7.16 16-16 16s-16-7.16-16-16v-80c0-17.6-14.4-32-32-32s-32 14.4-32 32v128c0 51.89 34.84 98.08 84.75 112.34l179.19 46.62c2.66.69 5.38 1.03 8.06 1.03 23.48 0 32-21.18 32-32v-96c0-13.77-8.81-25.99-21.88-30.35z" />
                </svg>
                <h5 className="card-title  mx-4 mt-4">OUR VALUES</h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Our core values guide everything we do, including our
                  commitment to professionalism, quality, and inclusivity. We
                  strive to provide the highest level of service, ensuring that
                  every aspect of the event is well-planned and executed to
                  perfection. We are committed to creating a welcoming and
                  inclusive environment where all participants feel comfortable
                  and valued.
                </p>
              </div>
            </div>
          </div>
          </div>

        </section>
        
      </div>
      <Footer/>
    </>
  );
};

export default About;
