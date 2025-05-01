
import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 text-primary" size={20} />
                    <a href="mailto:akshaysirsikar@gmail.com" className="text-gray-700 hover:text-primary">
                      akshaysirsikar@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-3 text-primary" size={20} />
                    <a href="https://www.linkedin.com/in/akshay-sirsikar-086629105/" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/akshay-sirsikar-086629105
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-3 text-primary" size={20} />
                    <a href="https://github.com/SirsikarAkshay/" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
                      github.com/SirsikarAkshay
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-primary" size={20} />
                    <span className="text-gray-700">Zurich, Switzerland</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
