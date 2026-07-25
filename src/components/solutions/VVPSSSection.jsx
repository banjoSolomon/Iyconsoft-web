import React from "react";
import ProductSection from "./ProductSection";
import imgLeft from "../../assets/images/vpss2solutionimage.png";
import imgRight from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 3 (1).png";
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
    bgColor="linear-gradient(160deg, #f0fff4 0%, #e8f5e9 60%, #f5fff8 100%)"
    accentColor="#1a6e3a"
    benefitsBg="linear-gradient(135deg, #1a6e3a 0%, #2e7d32 50%, #43a047 100%)"
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
      "Full transparency",
      "Zero disenfranchisement",
      "Audit-compliant results",
      "Remote participation",
    ]}
    benefitBorder="#2e7d32"
  />
);

export default VVPSSSection;
