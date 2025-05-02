
import React from "react";
import { Calendar, Briefcase, ChartLine, Brain, CircuitBoard, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Vanillaplan AG",
      period: "May 2023 - Present",
      duration: "2 years 1 month",
      location: "Basel, Switzerland",
      description: "Build software for construction companies to provide schedule management.",
      responsibilities: [
        "Develop Machine Learning and Reinforcement Learning algorithms to automate the scheduling of resources based on past data",
        "Design and implement intelligent systems that optimize resource allocation for construction projects",
        "Create predictive models to forecast project timelines and resource requirements",
        "Build data pipelines to process and analyze historical project data"
      ],
      icon: <Brain className="w-8 h-8 text-primary" />,
      skills: ["Machine Learning", "Reinforcement Learning", "Predictive Modeling", "AI Systems"]
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
      ],
      icon: <CircuitBoard className="w-8 h-8 text-primary" />,
      skills: ["Full-stack Development", "Cloud Services", "API Development", "Database Design"]
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
      ],
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ["Data Processing", "Statistical Analysis", "ETL Pipelines", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="bg-background neural-bg">
      <div className="section-container">
        <h2 className="section-title flex items-center gap-2 justify-center sm:justify-start">
          <ChartLine className="h-6 w-6" />
          <span>Professional Experience</span>
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-4 flex items-start gap-4">
                <div className="hidden md:block p-2 rounded-lg bg-secondary">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="text-primary font-medium">{exp.company}</div>
                </div>
              </div>
              <div className="flex flex-wrap text-muted-foreground text-sm mb-3">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Briefcase size={16} className="mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <p className="text-foreground mb-4">{exp.description}</p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="bg-secondary/80 border-primary/20 text-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              {exp.responsibilities && (
                <div className="bg-secondary/70 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-medium text-foreground mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="pl-2">{resp}</li>
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
