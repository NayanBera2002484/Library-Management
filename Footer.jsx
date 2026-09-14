// client/my_app/src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
  <div>© {new Date().getFullYear()} BBIT Central Library (BCL). All rights reserved.</div>
  <div>Managed by Academic Block, BBIT</div>
  <div>Contact: centrallibrary137@gmail.com | +91-12345-67890</div>
</footer>
  );
}

export default Footer;
