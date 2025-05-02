
import React from "react";
import { MapPin, Briefcase, ChartLine, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-background neural-bg">
      <div className="section-container flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gradient">
            Akshaykumar Sirsikar
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 flex items-center gap-2">
            <ChartLine className="text-primary" />
            <span>Software Engineer specializing in ML Systems</span>
          </h2>
          <div className="flex flex-wrap items-center text-muted-foreground mb-6">
            <div className="flex items-center mr-4 mb-2">
              <MapPin size={18} className="mr-1 text-primary/80" />
              <span>Zurich, Switzerland</span>
            </div>
            <div className="flex items-center mb-2">
              <Briefcase size={18} className="mr-1 text-primary/80" />
              <span>M.Sc. Software Systems, Universität Zürich</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#experience">View Experience</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <CircuitBoard className="w-24 h-24 text-primary opacity-50" />
            </div>
            <div className="z-10 bg-background/80 backdrop-blur-sm w-40 h-40 rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold text-gradient">AS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
