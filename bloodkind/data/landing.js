import {
    Droplet,
    Ambulance,
    Hospital,
    HeartPulse,
    Globe,
    Zap,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "50K+",
      label: "Registered Donors",
    },
    {
      value: "10K+",
      label: "Lives Saved",
    },
    {
      value: "99.9%",
      label: "Emergency Response Rate",
    },
    {
      value: "4.9/5",
      label: "Community Rating",
    },
  ];
  
  // Features Data
  export const featuresData = [
    {
      icon: <Droplet className="h-8 w-8 text-red-600" />,
      title: "Real-Time Blood Matching",
      description:
        "Instantly match blood donors with urgent medical needs using advanced AI technology",
    },
    {
      icon: <Ambulance className="h-8 w-8 text-red-600" />,
      title: "Emergency Dispatch",
      description:
        "Coordinate rapid blood transportation and emergency medical support",
    },
    {
      icon: <Hospital className="h-8 w-8 text-red-600" />,
      title: "Hospital Network",
      description: "Connect with a nationwide network of hospitals and medical centers",
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-red-600" />,
      title: "Health Screening",
      description: "Comprehensive donor health screening and eligibility verification",
    },
    {
      icon: <Globe className="h-8 w-8 text-red-600" />,
      title: "Global Reach",
      description: "Expand blood donation support across regional and international boundaries",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Rapid Alerts",
      description: "Instant notifications for critical blood type requirements",
    },
  ];
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <Droplet className="h-8 w-8 text-red-600" />,
      title: "1. Register as a Donor",
      description:
        "Quick and secure registration process with medical history verification",
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-red-600" />,
      title: "2. Health Check & Matching",
      description:
        "Complete a health screening and get matched with compatible donation needs",
    },
    {
      icon: <Ambulance className="h-8 w-8 text-red-600" />,
      title: "3. Save Lives",
      description:
        "Receive real-time alerts and contribute to emergency medical support",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Dr. Sarah Johnson",
      role: "Emergency Room Physician",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      quote:
        "This platform has been a game-changer for emergency medical response. We can now find compatible donors in minutes, not hours.",
    },
    {
      name: "Michael Chen",
      role: "Blood Donor",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "Knowing I can directly help save lives in critical moments is an incredible feeling. The app makes donating simple and meaningful.",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Health Coordinator",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      quote:
        "Our community's emergency medical support has been revolutionized by this real-time blood donation network.",
    },
  ];
