import React from "react";
import ProductSection from "./ProductSection";
import "../../styles/solutions/VVPSSIdealFor.css";
import imgLeft from "../../assets/images/vpss2solutionimage.png";
import imgRight from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 3 (1).png";
import logo from "../../assets/images/vvpss logo 1.png";

const idealItems = [
  {
    label: "AGMs",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    label: "Corporate Elections",
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    ),
  },
  {
    label: "Associations",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
  {
    label: "Government Surveys",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    label: "Shareholder Voting",
    icon: (
      <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
  },
];

const rightContent = (
  <div className="vvpss-ideal">
    {idealItems.map((item, i) => (
      <div key={i} className="vvpss-ideal__item">
        <div className="vvpss-ideal__icon">{item.icon}</div>
        <div className="vvpss-ideal__body">
          <span className="vvpss-ideal__num">{String(i + 1).padStart(2, "0")}</span>
          <span className="vvpss-ideal__label">{item.label}</span>
        </div>
      </div>
    ))}
  </div>
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
