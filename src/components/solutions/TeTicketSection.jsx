import React from "react";
import ProductSection from "./ProductSection";
import imgLeft from "../../assets/images/ChatGPT Image Jun 14, 2026, 05_47_11 PM 1.png";
import imgRight from "../../assets/images/ChatGPT Image Jun 14, 2026, 05_53_20 PM 1.png";
import logo from "../../assets/images/Group 41.png";

const rightContent = (
  <ol>
    <li>Agent Management</li>
    <li>Digital Ticket Purchase</li>
    <li>Ticket Distribution</li>
    <li>Ticket Re-distribution</li>
    <li>Transport Ticket Vending</li>
    <li>Market Collections</li>
    <li>Street Shop Collections</li>
    <li>ESWAMA Payments</li>
    <li>Water Rate Payments</li>
    <li>Additional Assessments</li>
  </ol>
);

const TeTicketSection = () => (
  <ProductSection
    id="sol-teticket"
    bgColor="#fff8f0"
    accentColor="#f39c12"
    benefitsBg="linear-gradient(135deg, #CC2360 0%, #9b1a47 50%, #6c0f30 100%)"
    imgLeft={imgLeft}
    imgRight={imgRight}
    logoImg={logo}
    logoAlt="TeTicket"
    headline="Digital Ticketing & Collection Platform"
    description="A comprehensive self-service platform that enables electronic ticket distribution, collections, agent management, and online payments for organizations and government institutions."
    features={[
      "Virtual accounts",
      "Agent wallets",
      "SMS verification",
      "Secure payments",
      "Record keeping",
      "Revenue monitoring",
    ]}
    rightTitle="Core Services"
    rightContent={rightContent}
    benefits={[
      "Reduced revenue leakage",
      "Faster collections",
      "Transparency",
      "Improved efficiency",
    ]}
    benefitBorder="#1a1a6e"
  />
);

export default TeTicketSection;
