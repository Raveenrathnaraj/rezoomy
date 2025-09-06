import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Chrome, 
  FileText, 
  BarChart3, 
  Zap, 
  Shield,
  Target,
  Clock,
  Award
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Application Tracking",
      description: "Keep track of every application with our intuitive dashboard. Never lose sight of your job search progress.",
      badge: "Core Feature",
    },
    {
      icon: <Chrome className="h-8 w-8" />,
      title: "Chrome Extension",
      description: "Auto-fill job applications with one click. Save hours of repetitive form filling across all job boards.",
      badge: "Time Saver",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Resume Generator",
      description: "Generate tailored resumes for each job using AI. Match keywords and optimize for ATS systems automatically.",
      badge: "AI Powered",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Smart Cover Letters",
      description: "Create personalized cover letters that speak directly to each company and role requirements.",
      badge: "Personalized",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Job Matching",
      description: "Get matched with relevant opportunities based on your skills, experience, and preferences.",
      badge: "Smart Matching",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick Apply",
      description: "Apply to multiple jobs in minutes with pre-filled applications and optimized documents.",
      badge: "Lightning Fast",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      description: "Your data is encrypted and secure. We never share your information without your consent.",
      badge: "Secure",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Interview Scheduler",
      description: "Manage interview schedules and get reminders. Never miss an important opportunity.",
      badge: "Organization",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Success Analytics",
      description: "Track your application success rates and optimize your job search strategy with data insights.",
      badge: "Analytics",
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "AI Powered":
        return "default";
      case "Core Feature":
        return "secondary";
      case "Time Saver":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you apply smarter, 
            track better, and land your dream job faster than ever before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant={getBadgeVariant(feature.badge)}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your job search experience?
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-primary rounded-full px-6 py-3 text-primary-foreground font-semibold shadow-glow">
            <span>🚀</span>
            <span>Join thousands of successful job seekers today!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;