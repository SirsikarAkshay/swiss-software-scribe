
import React from "react";
import { Calendar, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      institution: "University of Zurich",
      degree: "Master's degree, Software Systems",
      period: "2021 - 2023",
      location: "Zurich, Switzerland"
    },
    {
      institution: "B V B College of Engg. & Technology",
      degree: "Bachelor of Engineering - BE, Information Sciences",
      period: "2014 - 2018",
      location: "Hubli, India"
    }
  ];

  return (
    <section id="education" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <Card key={index} className="card-hover card-dark card-glow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{edu.institution}</h3>
                <p className="text-primary font-medium mb-3">{edu.degree}</p>
                <div className="flex flex-wrap text-muted-foreground text-sm">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Book size={16} className="mr-1" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
