import React from "react";

function ContactPage() {
  return (
    <div id="contact">
      <h2>Ready to get started? Contact us today</h2>
      <h4>Call us: (+27) 311-9608</h4>
      <h4>
        Email us:&nbsp;
        <a href="mailto:forwardfitnessspirit@club.net">
          forwardfitnessspirit@club.net
        </a>
      </h4>

      <h4>Visit us at: 1333 Carlton center street, JHB, Gauteng, 03301</h4>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.7406283573323!2d28.04453690943297!3d-26.20511437698044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e99715d12e9%3A0xfa98a0961686e78b!2sCarlton%20Centre!5e0!3m2!1sen!2sza!4v1715776717151!5m2!1sen!2sza"
        width="600"
        height="450"
        style={{border: 0}}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContactPage;
