
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Akshay Sirsikar</h3>
            <p className="text-gray-400">Software Engineer | Data Scientist</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} Akshay Sirsikar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
