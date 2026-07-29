import React from "react";
import ProductSection from "./ProductSection";
import "../../styles/solutions/ITravelTimeline.css";
import imgLeft from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 5 (1).png";
import imgRight from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 4.png";
import logo from "../../assets/images/itravel_logo-removebg-preview (1) 1.png";
import benefitIcon1 from "../../assets/images/Timer itravelbenefit.png";
import benefitIcon2 from "../../assets/images/Smiley itravelbebefit.png";
import benefitIcon3 from "../../assets/images/ChartLineUp itravelbenefit.png";
import benefitIcon4 from "../../assets/images/Gear itravelbenefit.png";

const steps = [
  {
    num: "01",
    label: "Select Route",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Choose Schedule",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Select Seat",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    num: "04",
    label: "Make Payment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    num: "05",
    label: "SMS Confirmation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        <polyline points="9 11 12 14 22 4"/>
      </svg>
    ),
  },
];

const rightContent = (
  <div className="itravel-timeline">
    {steps.map((step, i) => (
      <div key={i} className="itravel-timeline__step">
        {/* Connector line */}
        {i < steps.length - 1 && <div className="itravel-timeline__connector" />}

        {/* Icon circle */}
        <div className="itravel-timeline__icon">
          {step.icon}
        </div>

        {/* Text */}
        <div className="itravel-timeline__body">
          <span className="itravel-timeline__num">{step.num}</span>
          <span className="itravel-timeline__label">{step.label}</span>
        </div>
      </div>
    ))}
  </div>
);

const ITravelSection = () => (
  <ProductSection
    id="sol-itravel"
    bgColor="#e8f8ff"
    accentColor="#00bcd4"
    benefitsBg="linear-gradient(135deg, #006064 0%, #00838f 50%, #00bcd4 100%)"
    imgLeft={imgLeft}
    imgRight={imgRight}
    logoImg={logo}
    logoAlt="iTravel"
    headline="Smart Transport Ticketing & Booking Platform"
    description="iTravel simplifies transportation booking and ticketing through both USSD and web channels, enabling customers to access travel services even without internet connectivity."
    features={[
      "USSD booking",
      "Seat reservation",
      "Passenger profile management",
      "SMS notifications",
      "Payment integration",
      "Booking validation",
      "Reporting dashboard",
    ]}
    rightTitle="Customer Journey Timeline"
    rightContent={rightContent}
    benefits={[
      "Reduced queue times",
      "Better passenger experience",
      "Revenue tracking",
      "Operational efficiency",
    ]}
    benefitIcons={[benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4]}
    benefitBorder="#f39c12"
  />
);

export default ITravelSection;
