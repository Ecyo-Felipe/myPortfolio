import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <articles className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
          </ul>
        </articles>
        {/* END OF UI/UX */}
        <articles className="services">
          <div className="service__head">
            <h3>Web Developmente</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
          </ul>
        </articles>
        {/* END OF WEB DEVOLOPEMENT */}
        <articles className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum is placeholder text commonly used.</p>
            </li>
          </ul>
        </articles>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
