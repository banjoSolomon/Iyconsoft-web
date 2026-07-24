import React from "react";
import ProductSection from "./ProductSection";
import imgLeft from "../../assets/images/vpss2solutionimage.png";
import imgRight from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 5.png";
import logo from "../../assets/images/vvpss logo 1.png";

const rightContent = (
  <ol>
    <li>AGMs</li>
    <li>Corporate Elections</li>
    <li>Associations</li>
    <li>Government Surveys</li>
    <li>Shareholder Voting</li>
  </ol>
);

const VVPSSSection = () => (
  <ProductSection
    id="sol-vvpss"
    bgColor="#f5f0ff"
    accentColor="#6c3ef4"
    imgLeft={imgLeft}
    imgRight={imgRight}
    logoImg={logo}
    logoAlt="VVPSS"
    headline="Secure Digital Voting & Survey Platform"
    description="VVPSS enables organizations to conduct elections, polls, surveys, and shareholder voting securely through web and USSD channels while ensuring transparency and real-time result tracking."
    features={[
      "Multi-channel voting",
      "Authentication",
      "Proxy voting",
      "Real-time counting",
      "Analytics and reporting",
      "Fraud prevention",
      "CSV data management",
      "Mobile compatibility",
    ]}
    rightTitle="VVPSS is Ideal For:"
    rightContent={rightContent}
    benefits={[
      "Reduced queue",
      "Improved passenger experience",
      "Revenue tracking",
      "Operational efficiency",
    ]}
    benefitBorder="#00bcd4"
  />
);

export default VVPSSSection;
