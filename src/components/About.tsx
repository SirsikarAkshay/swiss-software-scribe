
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
              I’m a Software Engineer with a strong foundation in full-stack development, cloud deployment, and data-driven systems. My journey began with a degree in Information Science and Engineering from B.V. Bhoomareddy College of Engineering and Technology. I then joined Mercedes-Benz Research and Development India, where I honed my skills in database design, API development, and scalable software solutions.
           </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Driven by a passion for data and systems, I pursued a Master’s degree in Software Systems with Data Science at the University of Zurich. During my studies, I worked part-time at Leanarc GmbH, contributing to cloud-based development projects and gaining hands-on experience in delivering efficient tech solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Currently, I’m working at Vanillaplan AG, where I help build intelligent scheduling software for the construction industry—automating resource planning and optimizing project workflows.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
