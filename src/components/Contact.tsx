
import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="bg-background neural-bg">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <Card className="card-hover card-dark card-glow">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 text-primary" size={20} />
                    <a href="mailto:akshaysirsikar@gmail.com" className="text-muted-foreground hover:text-primary">
                      akshaysirsikar@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-3 text-primary" size={20} />
                    <a href="https://www.linkedin.com/in/akshay-sirsikar-086629105/" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/akshay-sirsikar-086629105
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-3 text-primary" size={20} />
                    <a href="https://github.com/SirsikarAkshay/" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      github.com/SirsikarAkshay
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-primary" size={20} />
                    <span className="text-muted-foreground">Zurich, Switzerland</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 bg-secondary/60 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 bg-secondary/60 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full px-4 py-2 bg-secondary/60 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground">Send Message</Button>
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
