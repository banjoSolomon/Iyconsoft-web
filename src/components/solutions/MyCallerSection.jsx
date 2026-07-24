import React from "react";
import ProductSection from "./ProductSection";
import imgLeft from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (3) 2.png";
import imgRight from "../../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 2.png";
import logo from "../../assets/images/Group 39.png";

const rightContent = (
  <>
    <h4>WhoDeyCall</h4>
    <p>
      USSD: *4800#<br />
      SMS: WDD, WDW, WDM
    </p>
    <h4>MyCaller</h4>
    <p>
      USSD: *4552#<br />
      SMS: SUBD, SUBW, SUBM
    </p>
  </>
);

const MyCallerSection = () => (
  <ProductSection
    id="sol-caller"
    bgColor="#fff"
    accentColor="#6c3ef4"
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
      "Better awareness",
      "Flexible subscription options",
    ]}
    benefitBorder="#f39c12"
  />
);

export default MyCallerSection;
