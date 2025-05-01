
import React from "react";
import { Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Vanillaplan AG",
      period: "May 2023 - Present",
      duration: "2 years 1 month",
      location: "Basel, Switzerland",
      description: "Build software for construction companies to provide schedule management."
    },
    {
      title: "Full-stack Developer",
      company: "Leanarc GmbH",
      period: "November 2021 - April 2023",
      duration: "1 year 6 months",
      location: "Basel, Switzerland",
      description: "Worked as a Full stack developer with Machine Learning expertise in building a platform to suggest cloud services as per user specification.",
      responsibilities: [
        "Design the database needed to store all the relevant information regarding the products and the users",
        "Build the backend of the application by constructing APIs to process respective user requests. Integrate the backend with the database",
        "Build a user interface which allows the user to interact with the various functionalities provided by the APIs",
        "Create an AWS EC2 instance for the deployment of the application and host on a cloud platform",
        "Maintain the application by monitoring user activities and resolving production issues"
      ]
    },
    {
      title: "Graduate Engineer",
      company: "Mercedes-Benz Research and Development India",
      period: "August 2018 - August 2019",
      duration: "1 year 1 month",
      location: "Karnataka, India",
      description: "Was responsible for designing the backend of a dynamic reporting platform by building pipelines to extract data from various sources to perform relevant statistical analysis and convey the results to the frontend.",
      responsibilities: [
        "Extract data from various sources and load it into the processing environment",
        "Pre-process the data and transform it into the form that is optimal for obtaining statistical results",
        "Perform relevant statistical analysis and send the data to the frontend for visualization"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="text-primary font-medium">{exp.company}</div>
              </div>
              <div className="flex flex-wrap text-gray-500 text-sm mb-3">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Briefcase size={16} className="mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              {exp.responsibilities && (
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
