import React from "react";
import ProductSection from "./ProductSection";
import imgLeft from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 5 (1).png";
import imgRight from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 4.png";
import logo from "../../assets/images/itravel_logo-removebg-preview (1) 1.png";

const rightContent = (
  <ol>
    <li>Select Route</li>
    <li>↓</li>
    <li>Choose Schedule</li>
    <li>↓</li>
    <li>Select Seat</li>
    <li>↓</li>
    <li>Make Payment</li>
    <li>↓</li>
    <li>Receive SMS Confirmation</li>
  </ol>
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
      "Reduced queue",
      "Improved passenger experience",
      "Revenue tracking",
      "Operational efficiency",
    ]}
    benefitBorder="#f39c12"
  />
);

export default ITravelSection;
