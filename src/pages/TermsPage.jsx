import React, { useEffect } from "react";
import "../styles/PolicyPage.css";

const sections = [
  "Acceptance of Terms", "Services Description", "User Obligations",
  "Intellectual Property", "Limitation of Liability", "Service Availability",
  "Subscriptions & Payments", "Termination", "Governing Law", "Contact Us",
];

const TermsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="policy-page">

      {/* Banner */}
      <div className="policy-banner">
        <div className="policy-banner__inner">
          <p className="policy-banner__eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Legal Document
          </p>
          <h1 className="policy-banner__title">Terms of <span>Use</span></h1>
          <p className="policy-banner__sub">
            The rules, rights, and responsibilities that govern your use of Iyconsoft Solutions services.
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
                  <a href={`#trm-${i + 1}`}>
                    <span className="policy-toc__num">{i + 1}</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
            <div className="policy-toc__divider" />
            <div className="policy-toc__links">
              <a href="/privacy" className="policy-toc__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Privacy Policy
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

          <section className="policy-section" id="trm-1">
            <div className="policy-section__header">
              <span className="policy-section__num">1</span>
              <h2 className="policy-section__title">Acceptance of Terms</h2>
            </div>
            <div className="policy-body">
              <p>By accessing or using any product or service offered by Iyconsoft Solutions, including <strong>MyCaller, WhoDeyCall, iTravel, VVPSS, and TeTicket</strong>, you agree to be bound by these Terms of Use.</p>
              <div className="policy-highlight">
                If you do not agree to these terms, please do not use our services. Continued use of any Iyconsoft Solutions service constitutes acceptance of these Terms.
              </div>
              <p>We reserve the right to update these Terms at any time. Changes will be communicated via our website or service notifications.</p>
            </div>
          </section>

          <section className="policy-section" id="trm-2">
            <div className="policy-section__header">
              <span className="policy-section__num">2</span>
              <h2 className="policy-section__title">Services Description</h2>
            </div>
            <div className="policy-body">
              <p>Iyconsoft Solutions provides the following digital services:</p>
              <ul className="policy-list">
                <li><strong>MyCaller (Airtel Nigeria):</strong> Caller identification via flash SMS, accessible via *4552#.</li>
                <li><strong>WhoDeyCall (MTN Nigeria):</strong> Caller identification on the MTN network, accessible via *4800#.</li>
                <li><strong>iTravel:</strong> Digital transport booking and ticketing via USSD and web.</li>
                <li><strong>VVPSS:</strong> Secure digital voting and survey platform for AGMs and elections.</li>
                <li><strong>TeTicket:</strong> Digital ticketing and revenue collection for government and enterprise.</li>
              </ul>
              <p>Iyconsoft Solutions reserves the right to modify, suspend, or discontinue any service with reasonable notice.</p>
            </div>
          </section>

          <section className="policy-section" id="trm-3">
            <div className="policy-section__header">
              <span className="policy-section__num">3</span>
              <h2 className="policy-section__title">User Obligations</h2>
            </div>
            <div className="policy-body">
              <p>By using our services, you agree to:</p>
              <ul className="policy-list">
                <li>Provide accurate, complete, and current registration information.</li>
                <li>Use our services only for lawful purposes in accordance with applicable Nigerian law.</li>
                <li>Not attempt to gain unauthorised access to our systems, services, or data.</li>
                <li>Not misuse, resell, or redistribute any Iyconsoft Solutions service without prior written consent.</li>
                <li>Keep your account credentials secure and report any unauthorised use immediately.</li>
                <li>Comply with the terms of the relevant telecom operator (Airtel or MTN) for network-based services.</li>
              </ul>
            </div>
          </section>

          <section className="policy-section" id="trm-4">
            <div className="policy-section__header">
              <span className="policy-section__num">4</span>
              <h2 className="policy-section__title">Intellectual Property</h2>
            </div>
            <div className="policy-body">
              <p>All intellectual property rights in our services are owned by or licensed to Iyconsoft Solutions, including:</p>
              <ul className="policy-list">
                <li>The MyCaller and WhoDeyCall caller identification technology, <strong>patented in Nigeria</strong>.</li>
                <li>The VVPSS digital voting platform and its underlying technology.</li>
                <li>The iTravel and TeTicket platforms, interfaces, and algorithms.</li>
                <li>All trademarks, service marks, logos, and brand names.</li>
              </ul>
              <p>You may not copy, reproduce, or create derivative works from any Iyconsoft Solutions content without prior written permission.</p>
            </div>
          </section>

          <section className="policy-section" id="trm-5">
            <div className="policy-section__header">
              <span className="policy-section__num">5</span>
              <h2 className="policy-section__title">Limitation of Liability</h2>
            </div>
            <div className="policy-body">
              <p>To the maximum extent permitted by law, Iyconsoft Solutions shall not be liable for:</p>
              <ul className="policy-list">
                <li>Indirect, incidental, special, or consequential damages from use of our services.</li>
                <li>Loss of data, revenue, or profit from service interruptions.</li>
                <li>Caller identification errors arising from incomplete NIN records held by third parties.</li>
                <li>Disruptions caused by telecom operator network failures (MTN, Airtel).</li>
                <li>Actions taken in reliance on caller identification information.</li>
              </ul>
              <p>Our liability is limited to fees paid for the specific service in the three (3) months preceding the claim.</p>
            </div>
          </section>

          <section className="policy-section" id="trm-6">
            <div className="policy-section__header">
              <span className="policy-section__num">6</span>
              <h2 className="policy-section__title">Service Availability</h2>
            </div>
            <div className="policy-body">
              <p>Iyconsoft Solutions strives to maintain 24/7 service availability. However, we do not guarantee uninterrupted access. Scheduled maintenance, network issues, or force majeure events may cause temporary disruptions.</p>
              <p>For MyCaller and WhoDeyCall, availability also depends on the relevant telecom operator's network coverage. Advance notice of planned maintenance will be provided where possible.</p>
            </div>
          </section>

          <section className="policy-section" id="trm-7">
            <div className="policy-section__header">
              <span className="policy-section__num">7</span>
              <h2 className="policy-section__title">Subscriptions & Payments</h2>
            </div>
            <div className="policy-body">
              <ul className="policy-list">
                <li>MyCaller and WhoDeyCall subscription fees are deducted from your airtime balance per your selected plan (daily, weekly, monthly).</li>
                <li>iTravel and TeTicket payments are processed via secure payment gateways. All prices in Nigerian Naira (NGN).</li>
                <li>Refund policies are subject to the relevant service terms and partnering operator policies.</li>
                <li>Auto-renewal is enabled by default. Cancel via USSD code or by contacting us.</li>
                <li>Iyconsoft Solutions reserves the right to change prices with reasonable notice.</li>
              </ul>
            </div>
          </section>

          <section className="policy-section" id="trm-8">
            <div className="policy-section__header">
              <span className="policy-section__num">8</span>
              <h2 className="policy-section__title">Termination</h2>
            </div>
            <div className="policy-body">
              <p>Iyconsoft Solutions may suspend or terminate access if you breach these Terms, we suspect fraudulent or unlawful activity, or continued access threatens system security. You may terminate your subscription at any time via the relevant opt-out procedure. Pre-paid fees are non-refundable unless required by law.</p>
            </div>
          </section>

          <section className="policy-section" id="trm-9">
            <div className="policy-section__header">
              <span className="policy-section__num">9</span>
              <h2 className="policy-section__title">Governing Law</h2>
            </div>
            <div className="policy-body">
              <p>These Terms are governed by the laws of the <strong>Federal Republic of Nigeria</strong>. Disputes are subject to the exclusive jurisdiction of Nigerian courts. These Terms comply with the NDPR, the Nigerian Communications Act, and all applicable Nigerian legislation.</p>
            </div>
          </section>

          <section className="policy-section" id="trm-10">
            <div className="policy-section__header">
              <span className="policy-section__num">10</span>
              <h2 className="policy-section__title">Contact Us</h2>
            </div>
            <div className="policy-body">
              <p>For questions or complaints regarding these Terms, please contact us:</p>
            </div>
            <div className="policy-contact-box">
              <p className="policy-contact-box__title">Iyconsoft Solutions — Legal</p>
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

export default TermsPage;
