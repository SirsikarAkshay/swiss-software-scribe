
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background text-foreground border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-primary">Akshay Sirsikar</h3>
            <p className="text-muted-foreground">Software Engineer | Data Scientist</p>
          </div>
          <div className="text-muted-foreground text-sm">
            <p>© {currentYear} Akshaykumar Sirsikar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
