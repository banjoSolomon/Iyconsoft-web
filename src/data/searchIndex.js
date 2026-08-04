// ── Site-wide search index ──
// Each entry: { title, desc, path, category, keywords[] }

const searchIndex = [
  // ── Pages ──
  { title: "Home",        desc: "Iyconsoft Solutions homepage",                   path: "/",             category: "Page",     keywords: ["home", "iyconsoft", "solutions"] },
  { title: "About Us",    desc: "Learn about Iyconsoft Solutions",                path: "/about",        category: "Page",     keywords: ["about", "company", "team", "who we are"] },
  { title: "Solutions",   desc: "All Iyconsoft digital products",                 path: "/solutions",    category: "Page",     keywords: ["solutions", "products"] },
  { title: "Industries",  desc: "Industries we serve",                            path: "/industries",   category: "Page",     keywords: ["industries", "sectors", "telecom", "transport", "government"] },
  { title: "Careers",     desc: "Join the Iyconsoft team",                        path: "/careers",      category: "Page",     keywords: ["careers", "jobs", "work", "hiring", "vacancy"] },
  { title: "Insights",    desc: "Articles, news and stories",                     path: "/insights",     category: "Page",     keywords: ["insights", "blog", "articles", "news"] },
  { title: "FAQs",        desc: "Frequently asked questions",                     path: "/faq",          category: "Page",     keywords: ["faq", "questions", "help", "support"] },
  { title: "Contact Us",  desc: "Get in touch with Iyconsoft",                    path: "/contact",      category: "Page",     keywords: ["contact", "phone", "email", "reach us"] },
  { title: "Privacy Policy", desc: "Our privacy and data policy",                path: "/privacy",      category: "Page",     keywords: ["privacy", "policy", "data", "ndpr"] },
  { title: "Terms of Use",   desc: "Terms and conditions of use",                path: "/terms",        category: "Page",     keywords: ["terms", "conditions", "legal"] },

  // ── Products ──
  { title: "MyCaller",    desc: "Caller ID service on Airtel — dial *4552#",      path: "/solutions#sol-caller",   category: "Product", keywords: ["mycaller", "caller id", "airtel", "4552", "who is calling", "caller identification", "spam calls"] },
  { title: "WhoDeyCall",  desc: "Caller ID service on MTN — dial *4800#",         path: "/solutions#sol-caller",   category: "Product", keywords: ["whodeycall", "mtn", "4800", "caller", "caller id", "spam", "unknown caller"] },
  { title: "iTravel",     desc: "Book bus tickets via USSD — no internet needed", path: "/solutions#sol-itravel",  category: "Product", keywords: ["itravel", "bus", "ticket", "booking", "transport", "ussd", "travel", "reserve seat", "guo"] },
  { title: "VVPSS",       desc: "Digital voting and survey platform",             path: "/solutions#sol-vvpss",    category: "Product", keywords: ["vvpss", "voting", "election", "agm", "survey", "poll", "digital voting", "governance"] },
  { title: "TeTicket",    desc: "Digital ticketing and revenue collection",       path: "/solutions#sol-teticket", category: "Product", keywords: ["teticket", "ticket", "collections", "revenue", "government", "market levy", "payment"] },

  // ── Industries ──
  { title: "Telecommunications", desc: "MyCaller & WhoDeyCall for telecoms",      path: "/industries#ind-telecom",   category: "Industry", keywords: ["telecom", "telecommunications", "airtel", "mtn", "network"] },
  { title: "Transportation",     desc: "iTravel for transport operators",          path: "/industries#ind-transport", category: "Industry", keywords: ["transport", "bus", "travel", "road", "ticketing"] },
  { title: "Government",         desc: "VVPSS for government and public sector",  path: "/industries#ind-govt",      category: "Industry", keywords: ["government", "public sector", "election", "agm", "vvpss"] },
  { title: "Enterprise",         desc: "Digital solutions for businesses",        path: "/industries#ind-enterprise",category: "Industry", keywords: ["enterprise", "business", "corporate", "company"] },

  // ── Careers ──
  { title: "Open Positions",     desc: "See job openings at Iyconsoft",           path: "/careers#open-positions", category: "Careers", keywords: ["jobs", "vacancies", "openings", "apply", "submit cv"] },
  { title: "Life at Iyconsoft",  desc: "Culture, growth and collaboration",       path: "/careers",                category: "Careers", keywords: ["culture", "growth", "work life", "team", "collaboration"] },

  // ── FAQ shortcuts ──
  { title: "How to activate MyCaller",   desc: "Dial *4552# on Airtel to subscribe", path: "/faq",  category: "FAQ", keywords: ["activate mycaller", "subscribe mycaller", "4552"] },
  { title: "How to activate WhoDeyCall", desc: "Dial *4800# on MTN to subscribe",    path: "/faq",  category: "FAQ", keywords: ["activate whodeycall", "subscribe whodeycall", "4800"] },
  { title: "How to book iTravel ticket", desc: "Use USSD or web to book your trip",  path: "/faq",  category: "FAQ", keywords: ["book ticket", "itravel ticket", "bus booking"] },
  { title: "VVPSS voting guide",         desc: "How to vote using VVPSS platform",   path: "/faq",  category: "FAQ", keywords: ["how to vote", "vvpss guide", "cast vote"] },
];

export default searchIndex;
