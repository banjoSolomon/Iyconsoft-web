import React from "react";
import ProductSection from "./ProductSection";
import "../../styles/solutions/CallerServices.css";
import imgLeft from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (3) 2.png";
import imgRight from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 2.png";
import logo from "../../assets/images/Group 39.png";

/* Phone SVG */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

/* Hash/USSD SVG */
const UssdIcon = () => (
  <svg viewBox="0 0 24 24">
    <line x1="4" y1="9" x2="20" y2="9"/>
    <line x1="4" y1="15" x2="20" y2="15"/>
    <line x1="10" y1="3" x2="8" y2="21"/>
    <line x1="16" y1="3" x2="14" y2="21"/>
  </svg>
);

/* Message SVG */
const SmsIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const callerServices = [
  {
    name: "WhoDeyCall",
    icon: <PhoneIcon />,
    codes: [
      { type: "USSD", value: "*4800#", icon: <UssdIcon /> },
      { type: "SMS",  value: "WDD, WDW, WDM", icon: <SmsIcon /> },
    ],
  },
  {
    name: "MyCaller",
    icon: <PhoneIcon />,
    codes: [
      { type: "USSD", value: "*4552#", icon: <UssdIcon /> },
      { type: "SMS",  value: "SUBD, SUBW, SUBM", icon: <SmsIcon /> },
    ],
  },
];

const rightContent = (
  <div className="caller-services">
    {callerServices.map((svc, i) => (
      <div key={i} className="caller-services__card">
        {/* Header */}
        <div className="caller-services__header">
          <div className="caller-services__icon">{svc.icon}</div>
          <h4 className="caller-services__name">{svc.name}</h4>
        </div>

        {/* USSD + SMS badges */}
        <div className="caller-services__codes">
          {svc.codes.map((code, j) => (
            <div key={j} className="caller-services__code-badge">
              <div className="caller-services__code-icon">{code.icon}</div>
              <div className="caller-services__code-info">
                <span className="caller-services__code-type">{code.type}</span>
                <span className="caller-services__code-value">{code.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const MyCallerSection = () => (
  <ProductSection
    id="sol-caller"
    bgColor="#fff"
    accentColor="#6c3ef4"
    benefitsBg="linear-gradient(135deg, #1a1a6e 0%, #2d2d9e 50%, #6c3ef4 100%)"
    imgLeft={imgLeft}
    imgRight={imgRight}
    logoImg={logo}
    logoAlt="MyCaller"
    headline="Know Who's Calling Before You Answer"
    subheadline="Stay Informed. Stay Secure."
    description="Caller Services comprise WhoDeyCall and MyCaller, two mobile caller identification services that allow subscribers to see the identity of incoming callers before answering their phones."
    features={[
      "Caller identification",
      "USSD subscription",
      "SMS subscription",
      "Daily, Weekly and Monthly plans",
      "Flash SMS notifications",
      "Auto-renewal support",
      "Easy cancellation",
    ]}
    rightTitle="Caller Services"
    rightContent={rightContent}
    benefits={[
      "Improved security",
      "Reduced spam calls",
      "Better caller awareness",
      "Flexible subscription options",
    ]}
    benefitBorder="#f39c12"
  />
);

export default MyCallerSection;
