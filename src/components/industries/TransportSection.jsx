import React from "react";
import "../../styles/industries/IndustrySection.css";
import promoImg from "../../assets/images/IT.jpeg";

const TransportSection = () => (
  <section className="ind-section ind-section--pink" id="ind-transport">
    <div className="ind-section__container ind-section__container--reverse">
      {/* Left: image */}
      <div className="ind-section__image reveal-left">
        <img src={promoImg} alt="Transportation - iTravel" />
      </div>

      {/* Right: text */}
      <div className="ind-section__content reveal-right">
        <h2 className="ind-section__title" style={{ color: "#CC2360" }}>
          Transportation
        </h2>
        <p className="ind-section__text">
          Digitizing ticketing, reservations, passenger management, and payment experiences.
        </p>
        <p className="ind-section__text">
          Helping transport operators digitize bookings, ticketing, schedules, and customer
          interactions.
        </p>
        <p className="ind-section__text">
          iTravel enables transport operators to digitize bookings and improve passenger
          experiences through web and USSD channels.
        </p>
        <a href="/solutions#sol-itravel" className="ind-section__btn" style={{ borderColor: "#CC2360", color: "#CC2360", "--btn-color": "#CC2360" }}>
          Explore iTravel
        </a>
      </div>
    </div>
  </section>
);

export default TransportSection;
