
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Microchip, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-secondary neural-bg">
      <div className="section-container">
        <h2 className="section-title flex items-center gap-2 justify-center sm:justify-start">
          <Brain className="h-6 w-6" />
          <span>About Me</span>
        </h2>
        <Card className="card-hover glow-effect border border-primary/10">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <p className="text-gray-700 leading-relaxed">
                  I'm a Software Engineer with a strong foundation in full-stack development, cloud deployment, and data-driven systems. My journey began with a degree in Information Science and Engineering from B.V. Bhoomareddy College of Engineering and Technology. I then joined Mercedes-Benz Research and Development India, where I honed my skills in database design, API development, and scalable software solutions.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Driven by a passion for data and systems, I pursued a Master's degree in Software Systems with Data Science at the University of Zurich. During my studies, I worked part-time at Leanarc GmbH, contributing to cloud-based development projects and gaining hands-on experience in delivering efficient tech solutions.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Currently, I'm working at Vanillaplan AG, where I help build intelligent scheduling software for the construction industry—automating resource planning and optimizing project workflows.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="p-4 bg-secondary rounded-lg border border-primary/10 flex items-center space-x-3">
                  <Microchip className="text-primary h-8 w-8" />
                  <div>
                    <h3 className="font-medium">Machine Learning</h3>
                    <p className="text-sm text-gray-500">Deep Learning & Neural Networks</p>
                  </div>
                </div>
                <div className="p-4 bg-secondary rounded-lg border border-primary/10 flex items-center space-x-3">
                  <Database className="text-primary h-8 w-8" />
                  <div>
                    <h3 className="font-medium">Data Engineering</h3>
                    <p className="text-sm text-gray-500">Data Pipelines & Processing</p>
                  </div>
                </div>
                <div className="p-4 bg-secondary rounded-lg border border-primary/10 flex items-center space-x-3">
                  <Brain className="text-primary h-8 w-8" />
                  <div>
                    <h3 className="font-medium">AI Solutions</h3>
                    <p className="text-sm text-gray-500">Intelligent Software Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
