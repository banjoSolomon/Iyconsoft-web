import React, { useEffect } from "react";
import "../styles/PolicyPage.css";

const sections = [
  "Introduction", "Data We Collect", "How We Use Your Data",
  "How We Protect Your Data", "Data Recipients & Sharing",
  "Cookies & Tracking", "Your Rights", "Data Retention", "Contact Us",
];

const PrivacyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="policy-page">

      {/* Banner */}
      <div className="policy-banner">
        <div className="policy-banner__inner">
          <p className="policy-banner__eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Legal Document
          </p>
          <h1 className="policy-banner__title">Privacy <span>Policy</span></h1>
          <p className="policy-banner__sub">
            How Iyconsoft Solutions collects, uses, and protects your personal information across all our digital services.
          </p>
          <div className="policy-banner__meta">
            <span className="policy-banner__meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Last Updated: July 2026
            </span>
            <span className="policy-banner__meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Iyconsoft Solutions, Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="policy-layout">

        {/* Sidebar */}
        <aside className="policy-sidebar">
          <div className="policy-toc">
            <p className="policy-toc__label">Contents</p>
            <ul className="policy-toc__list">
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#prv-${i + 1}`}>
                    <span className="policy-toc__num">{i + 1}</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
            <div className="policy-toc__divider" />
            <div className="policy-toc__links">
              <a href="/terms" className="policy-toc__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Terms of Use
              </a>
              <a href="/contact" className="policy-toc__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6z"/></svg>
                Contact Us
              </a>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="policy-main">
          <span className="policy-effective">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Effective Date: July 1, 2026
          </span>

          <section className="policy-section" id="prv-1">
            <div className="policy-section__header">
              <span className="policy-section__num">1</span>
              <h2 className="policy-section__title">Introduction</h2>
            </div>
            <div className="policy-body">
              <p>Iyconsoft Solutions is an information technology company incorporated under the Laws of the Federal Republic of Nigeria. We provide innovative USSD and digital solutions — including <strong>MyCaller, WhoDeyCall, iTravel, VVPSS, and TeTicket</strong> — that transform everyday experiences for individuals and organisations.</p>
              <p>References to <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"Iyconsoft Solutions"</strong> in this Policy refer to Iyconsoft Solutions. References to <strong>"personal data"</strong> mean any information that identifies, or could reasonably be used to identify, a living individual.</p>
              <div className="policy-highlight">
                <strong>By using any of our services or visiting our website, you acknowledge that you have read, understood, and accepted this Privacy Policy.</strong> If you do not agree, please discontinue use of our services.
              </div>
              <p>Iyconsoft Solutions acts as the <strong>Data Controller</strong> for all personal data collected through our platform and services. All processing complies with the Nigerian Data Protection Regulation (NDPR) and applicable law.</p>
            </div>
          </section>

          <section className="policy-section" id="prv-2">
            <div className="policy-section__header">
              <span className="policy-section__num">2</span>
              <h2 className="policy-section__title">Data We Collect</h2>
            </div>
            <div className="policy-body">
              <p>Depending on the service you use, we may collect:</p>
              <ul className="policy-list">
                <li><strong>Identity & Contact Data:</strong> Full name, phone number, and email address you provide when registering or contacting us.</li>
                <li><strong>NIN-Linked Data:</strong> For MyCaller and WhoDeyCall, caller names are derived from NIN-linked network registration data held by our telecom partners (Airtel, MTN).</li>
                <li><strong>Transaction Data:</strong> Payment references, booking records, ticket information, and collection data processed through iTravel and TeTicket.</li>
                <li><strong>Voting & Survey Data:</strong> Anonymised participation records from VVPSS elections and surveys. Individual votes are not linked to identifiable persons.</li>
                <li><strong>Device & Technical Data:</strong> IP address, browser type, and usage data collected automatically when you visit our website.</li>
                <li><strong>Communication Data:</strong> Records of your enquiries and support requests.</li>
              </ul>
            </div>
          </section>

          <section className="policy-section" id="prv-3">
            <div className="policy-section__header">
              <span className="policy-section__num">3</span>
              <h2 className="policy-section__title">How We Use Your Data</h2>
            </div>
            <div className="policy-body">
              <ul className="policy-list">
                <li>To deliver and operate our digital services.</li>
                <li>To process payments, bookings, and transaction records.</li>
                <li>To identify callers via flash SMS for subscriber identification services.</li>
                <li>To enable secure digital voting, elections, and surveys.</li>
                <li>To respond to enquiries and support requests.</li>
                <li>To improve our services based on usage analytics.</li>
                <li>To comply with legal obligations under applicable Nigerian law.</li>
                <li>To send service-related notifications (not marketing, unless you consent).</li>
              </ul>
            </div>
          </section>

          <section className="policy-section" id="prv-4">
            <div className="policy-section__header">
              <span className="policy-section__num">4</span>
              <h2 className="policy-section__title">How We Protect Your Data</h2>
            </div>
            <div className="policy-body">
              <p>Iyconsoft Solutions implements appropriate technical and organisational security measures to protect your data:</p>
              <ul className="policy-list">
                <li>All data transmitted uses industry-standard SSL/TLS encryption.</li>
                <li>Access to personal data is restricted to authorised personnel on a need-to-know basis.</li>
                <li>Our systems undergo regular security assessments.</li>
                <li>Voting data on VVPSS is anonymised — individual votes cannot be linked back to voters.</li>
                <li>We maintain audit trails for all data processing activities.</li>
                <li>Data breaches are reported to affected individuals and authorities per NDPR requirements.</li>
              </ul>
            </div>
          </section>

          <section className="policy-section" id="prv-5">
            <div className="policy-section__header">
              <span className="policy-section__num">5</span>
              <h2 className="policy-section__title">Data Recipients & Sharing</h2>
            </div>
            <div className="policy-body">
              <p>We do not sell your personal data. Your data may be shared only in the following circumstances:</p>
              <ul className="policy-list">
                <li><strong>Telecom Partners:</strong> Caller identification data is processed with Airtel Nigeria (MyCaller) and MTN Nigeria (WhoDeyCall) under strict data processing agreements.</li>
                <li><strong>Service Providers:</strong> Authorised third-party providers (payment processors, SMS gateways) solely to deliver our services.</li>
                <li><strong>Legal Obligations:</strong> When required by law, court order, or regulatory authority.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, subject to continued privacy protections.</li>
              </ul>
            </div>
          </section>

          <section className="policy-section" id="prv-6">
            <div className="policy-section__header">
              <span className="policy-section__num">6</span>
              <h2 className="policy-section__title">Cookies & Tracking</h2>
            </div>
            <div className="policy-body">
              <p>When you visit our website, we may use cookies to enhance your experience:</p>
              <ul className="policy-list">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function. Cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site. Optional.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings for a personalised experience.</li>
              </ul>
              <p>You can manage or delete cookies through your browser settings at any time.</p>
            </div>
          </section>

          <section className="policy-section" id="prv-7">
            <div className="policy-section__header">
              <span className="policy-section__num">7</span>
              <h2 className="policy-section__title">Your Rights</h2>
            </div>
            <div className="policy-body">
              <p>Under the NDPR and applicable law, you have the right to:</p>
              <ul className="policy-list">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion where there is no lawful basis for continued processing.</li>
                <li><strong>Object:</strong> Object to our processing for specific purposes.</li>
                <li><strong>Restriction:</strong> Request that we limit how we use your data.</li>
                <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on it.</li>
              </ul>
            </div>
          </section>

          <section className="policy-section" id="prv-8">
            <div className="policy-section__header">
              <span className="policy-section__num">8</span>
              <h2 className="policy-section__title">Data Retention</h2>
            </div>
            <div className="policy-body">
              <p>We retain personal data only as long as necessary:</p>
              <ul className="policy-list">
                <li>Subscriber and account data: duration of service + 2 years.</li>
                <li>Transaction and payment records: 7 years (financial regulation compliance).</li>
                <li>Voting records on VVPSS: retained in anonymised form as agreed with the organiser.</li>
                <li>Support and communication records: 3 years.</li>
              </ul>
              <p>When data is no longer required, it is securely deleted or anonymised.</p>
            </div>
          </section>

          <section className="policy-section" id="prv-9">
            <div className="policy-section__header">
              <span className="policy-section__num">9</span>
              <h2 className="policy-section__title">Contact Us</h2>
            </div>
            <div className="policy-body">
              <p>For questions about this Privacy Policy or to exercise your rights, contact our Data Protection team:</p>
            </div>
            <div className="policy-contact-box">
              <p className="policy-contact-box__title">Iyconsoft Solutions — Data Protection</p>
              <p className="policy-contact-box__addr">9 Durban Street, Wuse 2, Abuja, Nigeria</p>
              <div className="policy-contact-box__items">
                <a href="mailto:tech@iyconsoft.com" className="policy-contact-box__item">
                  <div className="policy-contact-box__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span className="policy-contact-box__text">tech@iyconsoft.com</span>
                  <svg className="policy-contact-box__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="tel:+2349063628281" className="policy-contact-box__item">
                  <div className="policy-contact-box__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6z"/></svg>
                  </div>
                  <span className="policy-contact-box__text">+234 (0) 906-362-8281</span>
                  <svg className="policy-contact-box__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="/contact" className="policy-contact-box__item">
                  <div className="policy-contact-box__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <span className="policy-contact-box__text">Visit Contact Page</span>
                  <svg className="policy-contact-box__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
