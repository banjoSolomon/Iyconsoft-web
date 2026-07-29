import React from "react";
import "../../styles/insights/InsightsTicker.css";
import myCallerLogo  from "../../assets/images/Group 39.png";
import teTicketLogo  from "../../assets/images/Group 41.png";
import itravelLogo   from "../../assets/images/itravel_logo-removebg-preview (1) 1.png";
import vvpssLogo     from "../../assets/images/vvpss logo 1.png";

const tickerItems = [
  { logo: myCallerLogo,  text: "MyCaller — Know Who's Calling",            color: "#CC2360" },
  { logo: itravelLogo,   text: "iTravel — Book Your Bus Ticket",            color: "#00bcd4" },
  { logo: vvpssLogo,     text: "VVPSS — Secure Digital Voting",             color: "#1a6e3a" },
  { logo: teTicketLogo,  text: "TeTicket — Modernising Collections",        color: "#f39c12" },
  { logo: myCallerLogo,  text: "WhoDeyCall — Caller ID for MTN",            color: "#f5a623" },
  { logo: itravelLogo,   text: "iTravel — No Internet Needed",              color: "#00bcd4" },
  { logo: vvpssLogo,     text: "VVPSS — Transparent AGM Voting",            color: "#1a6e3a" },
  { logo: teTicketLogo,  text: "TeTicket — Digital Revenue Management",     color: "#f39c12" },
];

// Double for seamless loop
const items = [...tickerItems, ...tickerItems];

const InsightsTicker = () => (
  <div className="ins-ticker">
    <div className="ins-ticker__track">
      {items.map((item, i) => (
        <span key={i} className="ins-ticker__item">
          <span className="ins-ticker__logo-wrap">
            <img src={item.logo} alt={item.text} className="ins-ticker__logo" />
          </span>
          <span className="ins-ticker__text">{item.text}</span>
          <span className="ins-ticker__sep" style={{ background: item.color }}>◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default InsightsTicker;
