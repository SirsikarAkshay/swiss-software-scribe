
import React from "react";
import { MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Akshay Sirsikar
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-4">
            Software Engineer at Vanillaplan AG
          </h2>
          <div className="flex flex-wrap items-center text-gray-500 mb-6">
            <div className="flex items-center mr-4 mb-2">
              <MapPin size={18} className="mr-1" />
              <span>Zurich, Switzerland</span>
            </div>
            <div className="flex items-center mb-2">
              <Briefcase size={18} className="mr-1" />
              <span>M.Sc. Data Science, Universität Zürich</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#experience">View Experience</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-6xl font-bold text-primary">AS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
