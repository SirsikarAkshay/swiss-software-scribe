
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <Card className="card-hover">
          <CardContent className="pt-6">
            <p className="text-gray-700 leading-relaxed">
              Graduated from B.V. Bhoomareddy College of Engineering and Technology with a degree in Information Sciences and Engineering.
              Currently working as a Software Engineer at Vanillaplan AG, building software for construction companies to provide schedule management.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              With experience at Mercedes-Benz Research and Development India and Leanarc GmbH, I've developed expertise in full-stack development,
              database design, API development, and cloud deployment. I hold a Master's degree in Data Science from the University of Zurich.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
