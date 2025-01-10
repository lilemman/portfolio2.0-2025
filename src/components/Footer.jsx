import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-4 text-center mt-8">
      <p>&copy; {currentYear} EACodeX || Ready for Work.</p>
    </footer>
  );
};

export default Footer;
