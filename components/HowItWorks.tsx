import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Download, 
  Brain, 
  Send, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <UserPlus className="h-8 w-8" />,
      title: "Sign Up & Set Profile",
      description: "Create your account and build your professional profile with your skills, experience, and job preferences.",
      features: ["Quick 2-minute setup", "Import from LinkedIn", "Skill assessment"]
    },
    {
      step: "02", 
      icon: <Download className="h-8 w-8" />,
      title: "Install Chrome Extension",
      description: "Add our powerful Chrome extension to auto-fill job applications and sync opportunities directly to your dashboard.",
      features: ["One-click installation", "Works on all job boards", "Auto-sync applications"]
    },
    {
      step: "03",
      icon: <Brain className="h-8 w-8" />,
      title: "AI Creates Your Documents",
      description: "Our AI analyzes job descriptions and generates tailored resumes and cover letters that match each opportunity perfectly.",
      features: ["ATS-optimized resumes", "Personalized cover letters", "Keyword matching"]
    },
    {
      step: "04",
      icon: <Send className="h-8 w-8" />,
      title: "Apply & Track Progress",
      description: "Submit applications with confidence and track everything in one place. Get insights to improve your success rate.",
      features: ["Application tracking", "Interview reminders", "Success analytics"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Rezoomy
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes and land your dream job faster. 
            Our streamlined process makes job hunting effortless and effective.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary opacity-20 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/20">
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg mb-4 shadow-glow">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="p-3 rounded-lg bg-muted/50 text-primary w-fit mb-4">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-elegant">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of job seekers who have already transformed their careers with Rezoomy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;