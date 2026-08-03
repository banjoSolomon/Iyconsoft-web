import img1 from "../assets/images/insignt1.png";
import img2 from "../assets/images/AGM.png";
import img3 from "../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (12) 2.png";
import img4 from "../assets/images/ChatGPT Image Jun 14, 2026, 05_47_11 PM 1.png";
import img5 from "../assets/images/WhatsApp Image 2026-06-11 at 17.56.23 (3) 2.png";
import wdc1 from "../assets/images/whodeycallevent.jpeg";
import wdc2 from "../assets/images/Whodeycallevent1.jpeg";
import wdc3 from "../assets/images/Whodeycallevent2.jpeg";
import img6 from "../assets/images/insignt3.png";

const insightsData = [
  {
    id: 1,
    featured: true,
    category: "Product Update",
    categoryColor: "#6c3ef4",
    title: "How USSD Technology is Transforming Transport in Nigeria",
    excerpt:
      "With millions of Nigerians travelling by road daily, Iyconsoft's iTravel platform is quietly reshaping how passengers book, pay, and board — all without needing the internet.",
    body: `Nigeria has one of the most active road transport ecosystems in Africa, with millions of passengers booking intercity trips every day. Yet for most of these travellers, the ticketing experience has remained largely informal — queues, cash, and uncertainty.

iTravel by Iyconsoft changes that equation. By leveraging USSD technology, iTravel allows passengers to book tickets, select seats, make payments, and receive SMS confirmations — all from a basic mobile phone, with no internet required.

**The Problem with Traditional Ticketing**

Bus terminals across Nigeria are characterised by long queues, ticket touts, and a lack of real-time seat information. Operators struggle with revenue leakage and poor passenger records. Passengers face uncertainty about seat availability, especially during peak periods.

**How iTravel Solves This**

iTravel introduces a dual-channel approach — USSD for feature phone users and a web portal for smartphone users — ensuring that no passenger is left behind regardless of their device.

Key capabilities include:
- Real-time seat selection and availability
- Secure payment via USSD banking
- SMS ticket confirmation
- Passenger profile management
- Booking history and rebooking

**Impact on Operators**

Transport operators using iTravel have reported significant reductions in revenue leakage, faster boarding processes, and improved passenger data quality. The platform's reporting dashboard gives operators a real-time view of bookings, payments, and trip performance.

**The Road Ahead**

Iyconsoft is continuously expanding the iTravel platform to cover more routes, integrate more payment channels, and add features like live bus tracking. The goal is to make bus travel in Nigeria as seamless as booking a flight.`,
    image: img1,
    author: "Iyconsoft Team",
    date: "July 10, 2026",
    readTime: "5 min read",
    tags: ["iTravel", "Transport", "USSD"],
  },
  {
    id: 2,
    featured: false,
    category: "Industry News",
    categoryColor: "#1a6e3a",
    title: "The Future of Digital Voting in Africa",
    excerpt:
      "As African nations push toward transparent governance, digital voting platforms like VVPSS are emerging as critical infrastructure for elections, AGMs, and stakeholder engagement.",
    body: `The credibility of elections and corporate governance votes remains a key challenge across Africa. Paper-based voting is expensive, slow, and susceptible to fraud. Digital voting — done right — offers a path forward.

VVPSS (Virtual Voting Poll System) by Iyconsoft is designed to address exactly this challenge, bringing secure, auditable, and accessible digital voting to organisations across Nigeria and beyond.

**Why Digital Voting Matters**

Traditional voting systems require significant physical infrastructure — polling booths, paper ballots, manual counting. For corporate elections, AGMs, and government surveys, this creates logistical bottlenecks and results delays.

Digital voting platforms eliminate these barriers, enabling:
- Remote participation for dispersed stakeholders
- Real-time vote counting and result display
- Full audit trails for regulatory compliance
- Elimination of ballot fraud and manipulation

**VVPSS in Action**

Since its launch, VVPSS has been deployed for AGMs, corporate elections, association voting, and government surveys. The platform supports multi-channel access — both web and USSD — ensuring that even participants without smartphones can cast their votes.

**Security at the Core**

Every vote cast on VVPSS is encrypted and anonymised. Audit logs record every interaction without compromising voter privacy. The system uses multi-factor authentication to prevent unauthorised access.

**What's Next**

Iyconsoft is working on expanding VVPSS capabilities to support larger-scale government elections and cross-border organisational voting. The platform is positioned to become a standard infrastructure for democratic participation in the digital age.`,
    image: img2,
    author: "Iyconsoft Team",
    date: "June 28, 2026",
    readTime: "6 min read",
    tags: ["VVPSS", "Governance", "Digital Voting"],
  },
  {
    id: 3,
    featured: false,
    category: "How-To Guide",
    categoryColor: "#00bcd4",
    title: "Why Caller ID Matters: The Story Behind MyCaller",
    excerpt:
      "Spam calls, scam calls, and silent calls cost Nigerians billions of naira annually. Iyconsoft built MyCaller to give every subscriber the power to know who is calling before they pick up.",
    body: `Every day, millions of Nigerians receive calls from unknown numbers. Some are genuine contacts not saved in the phonebook. Many are spam. Some are outright scams. The inability to identify callers before answering costs people time, money, and peace of mind.

MyCaller was built to solve this problem — and to do it without requiring an internet connection or a smartphone.

**The Problem**

Truecaller and similar apps offer caller identification but require:
- A smartphone
- An internet connection
- App installation and account creation
- Permission to upload your contacts to a third-party server

For millions of Nigerians using feature phones or with limited data, these requirements are barriers.

**The MyCaller Approach**

MyCaller operates at the network level. When a call comes in, the system sends a flash SMS to the recipient containing the caller's registered name — before the call is even answered. No internet, no app, no smartphone required.

The service runs on Airtel Nigeria's network and is accessible via a simple USSD subscription (*4552#).

**Subscription Plans**

MyCaller offers daily, weekly, and monthly plans to suit different usage patterns. All plans include:
- Caller identification via flash SMS
- Auto-renewal support
- Easy cancellation via USSD

**Privacy and Compliance**

MyCaller uses NIN-linked registration data to identify callers. The system complies with Nigerian data privacy regulations. No personal call data is stored beyond what is needed for identification.

**Looking Forward**

Iyconsoft continues to expand the MyCaller caller database and improve identification accuracy. Future updates will include enhanced spam detection and broader coverage of registered numbers.`,
    image: img3,
    author: "Iyconsoft Team",
    date: "June 15, 2026",
    readTime: "4 min read",
    tags: ["MyCaller", "Caller ID", "Airtel"],
  },
  {
    id: 4,
    featured: false,
    category: "Case Study",
    categoryColor: "#f39c12",
    title: "How TeTicket is Modernising Government Collections",
    excerpt:
      "Market levies, water rate payments, transport fares — government revenue collection has historically been manual and leakage-prone. TeTicket is changing that.",
    body: `Government revenue collection in Nigeria has long suffered from inefficiency, opacity, and leakage. Market levies go uncollected. Transport fares are misappropriated. Water rate records are incomplete. The result is a massive shortfall in government revenue that affects public services.

TeTicket by Iyconsoft is a digital ticketing and collections platform purpose-built to solve these problems.

**The Challenge**

Local government authorities and parastatals face a common set of problems in revenue collection:
- Manual collection with no audit trail
- Cash handling creating opportunities for leakage
- No real-time visibility into collections
- Difficulty reconciling records at month end

**What TeTicket Does**

TeTicket digitalises the entire collection chain — from the point of collection by an agent to central reconciliation by management. Key features include:

- **Agent Management**: Registered agents with individual wallets and transaction records
- **Digital Ticket Purchase**: Tickets issued and validated electronically
- **Market Collections**: Digital collection of market levies and fees
- **ESWAMA Payments**: Integration with waste management billing
- **Water Rate Payments**: Digital billing and payment for water services
- **Real-time Reporting**: Management dashboards showing collection status by area, agent, and time period

**Results**

Organisations that have deployed TeTicket have reported:
- Significant reduction in revenue leakage
- Faster reconciliation at month end
- Improved agent accountability
- Better data for budget planning

**The Bigger Picture**

TeTicket represents a broader shift toward digital public financial management. As more government entities adopt the platform, the cumulative impact on public revenue and service delivery will be transformative.`,
    image: img4,
    author: "Iyconsoft Team",
    date: "June 5, 2026",
    readTime: "5 min read",
    tags: ["TeTicket", "Government", "Collections"],
  },
  {
    id: 5,
    featured: false,
    category: "Industry News",
    categoryColor: "#CC2360",
    title: "WhoDeyCall: How MTN Nigeria is Fighting Spam Calls",
    excerpt:
      "Spam calls are a growing menace across Africa. MTN Nigeria's WhoDeyCall service, powered by Iyconsoft, is helping subscribers identify and avoid unwanted calls.",
    body: `Spam calls have become one of the most disruptive aspects of mobile phone ownership in Nigeria. From unsolicited marketing calls to outright fraud, unknown callers create anxiety and financial risk for subscribers.

WhoDeyCall, deployed on MTN Nigeria's network and developed by Iyconsoft, is a direct response to this problem.

**How WhoDeyCall Works**

When a call comes in, WhoDeyCall sends a flash SMS to the recipient before they answer. The SMS displays the registered name of the caller, based on NIN-linked registration data. The process is instant and requires no internet connection.

Subscribers activate the service by dialling *4800# and choosing their preferred plan — daily, weekly, or monthly.

**The Scale of the Problem**

Research suggests that a significant percentage of mobile phone users in Nigeria receive at least one spam or unwanted call per day. For businesses and professionals, this represents a meaningful drain on productivity. For individuals, it creates stress and the risk of falling victim to phone scams.

**What Makes WhoDeyCall Different**

Unlike app-based solutions, WhoDeyCall:
- Works on all phones including basic feature phones
- Requires no internet connection
- Uses authoritative NIN-linked data rather than crowdsourced information
- Operates at the network level for guaranteed delivery

**Community Impact**

By reducing spam calls and enabling caller identification, WhoDeyCall contributes to a safer, more trustworthy mobile communication environment in Nigeria. Subscribers report greater confidence in answering calls from unfamiliar numbers.

**Next Steps**

Iyconsoft is working with MTN Nigeria to expand the WhoDeyCall database, improve identification accuracy, and introduce additional spam-flagging capabilities.`,
    image: img5,
    images: [wdc1, wdc2, wdc3],
    author: "Iyconsoft Team",
    date: "May 22, 2026",
    readTime: "4 min read",
    tags: ["WhoDeyCall", "MTN", "Spam Calls"],
  },
  {
    id: 6,
    featured: false,
    category: "Product Update",
    categoryColor: "#6c3ef4",
    title: "Iyconsoft: Building Digital Solutions That Work Without Internet",
    excerpt:
      "In a country where internet access remains uneven, Iyconsoft has built its entire product portfolio around one principle: technology that works for everyone, everywhere.",
    body: `Internet penetration in Nigeria has grown rapidly, but it remains uneven. In rural areas and among lower-income demographics, reliable internet access is still not a given. Building digital solutions that only work online means leaving a significant portion of the population behind.

Iyconsoft was founded on a different principle: build technology that works with or without internet connectivity.

**The USSD Advantage**

USSD (Unstructured Supplementary Service Data) is a communication protocol that works on every mobile network, on every phone, without data. It is the same technology behind mobile banking, airtime top-up, and balance checks.

Iyconsoft has built its entire product portfolio — MyCaller, WhoDeyCall, iTravel, VVPSS, and TeTicket — with USSD channels as a core component.

**Why This Matters**

By building USSD-first:
- Products are accessible to feature phone users
- Services work in areas with no data coverage
- Costs are lower for end users
- Adoption barriers are significantly reduced

**The Portfolio**

- **MyCaller** (Airtel Nigeria): Caller identification via flash SMS — *4552#
- **WhoDeyCall** (MTN Nigeria): Caller identification via flash SMS — *4800#
- **iTravel**: Transport booking via USSD and web — accessible without a smartphone
- **VVPSS**: Digital voting via USSD and web channels
- **TeTicket**: Digital collections accessible via USSD-enabled agent devices

**The Vision**

Iyconsoft's vision is a Nigeria where every individual — regardless of their phone type, income level, or location — can access the digital services they need to live, work, and participate in governance. USSD is not a legacy technology. It is the bridge between where Nigeria is today and where it needs to go.`,
    image: img6,
    author: "Iyconsoft Team",
    date: "May 10, 2026",
    readTime: "5 min read",
    tags: ["Iyconsoft", "USSD", "Innovation"],
  },
];

export const categories = ["All", "Product Update", "Industry News", "How-To Guide", "Case Study"];

export default insightsData;
