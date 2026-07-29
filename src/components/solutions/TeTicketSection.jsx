import React from "react";
import ProductSection from "./ProductSection";
import "../../styles/solutions/TeTicketServices.css";
import imgLeft from "../../assets/images/ChatGPT Image Jun 14, 2026, 05_47_11 PM 1.png";
import imgRight from "../../assets/images/ChatGPT Image Jun 14, 2026, 05_53_20 PM 1.png";
import logo from "../../assets/images/Group 41.png";
import benefitIcon1 from "../../assets/images/Lock Ttickctbenefit.png";
import benefitIcon2 from "../../assets/images/Lightning teticktbenefit.png";
import benefitIcon3 from "../../assets/images/Eye Teticktbenefit.png";
import benefitIcon4 from "../../assets/images/Gear itravelbenefit.png";

const services = [
  {
    label: "Agent Management",
    icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    label: "Digital Ticket Purchase",
    icon: <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  },
  {
    label: "Ticket Distribution",
    icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    label: "Ticket Re-distribution",
    icon: <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  },
  {
    label: "Transport Ticket Vending",
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    label: "Market Collections",
    icon: <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  },
  {
    label: "Street Shop Collections",
    icon: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    label: "ESWAMA Payments",
    icon: <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    label: "Water Rate Payments",
    icon: <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  },
  {
    label: "Additional Assessments",
    icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  },
];

const rightContent = (
  <div className="teticket-services">
    {services.map((s, i) => (
      <div key={i} className="teticket-services__item">
        <div className="teticket-services__icon">{s.icon}</div>
        <div className="teticket-services__body">
          <span className="teticket-services__num">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="teticket-services__label">{s.label}</span>
        </div>
      </div>
    ))}
  </div>
);

const TeTicketSection = () => (
  <ProductSection
    id="sol-teticket"
    bgColor="#fff8f0"
    accentColor="#f39c12"
    benefitsBg="linear-gradient(135deg, #f39c12 0%, #e67e22 50%, #d35400 100%)"
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
      "Full transparency",
      "Improved efficiency",
    ]}
    benefitIcons={[benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4]}
    benefitBorder="#f39c12"
  />
);

export default TeTicketSection;
