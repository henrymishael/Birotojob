"use client";

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Code,
  Palette,
  Brain,
  Monitor,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Clock,
  DollarSign,
  BookOpen,
  Target,
  Mail,
  MapPin as Location,
  BicepsFlexed,
  Weight,
  Puzzle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SummerCampPage = () => {
  const [selectedProgram, setSelectedProgram] = useState("kids");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    program: "kids",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleWhatsAppContact = () => {
  //     const message = `Hi! I'm interested in the BIRO TO JOB Tech Summer Camp for ${
  //       formData.program === "kids" ? "Kids (Ages 6-11)" : "Teens (Ages 12-16)"
  //     }.

  // Name: ${formData.name}
  // Age: ${formData.age}
  // Phone: ${formData.phone}
  // Email: ${formData.email}
  // Program: ${
  //       formData.program === "kids"
  //         ? "Kids Program (₦50,000)"
  //         : "Teens Program (₦75,000)"
  //     }

  // Please provide more information about enrollment.`;

  //     const whatsappUrl = `https://wa.me/2349081893000?text=${encodeURIComponent(
  //       message
  //     )}`;
  //     window.open(whatsappUrl, "_blank");
  //   };

  const handleWhatsAppContact = () => {
    let message = `Hi! I'm interested in the BIRO TO JOB Tech Summer Camp for ${
      formData.program === "kids" ? "Kids (Ages 6-11)" : "Teens (Ages 12-16)"
    }.\n
Name: ${formData.name}
Age: ${formData.age}
Phone: ${formData.phone}
Email: ${formData.email}
Program: ${
      formData.program === "kids"
        ? "Kids Program (₦50,000)"
        : "Teens Program (₦75,000)"
    }

Please provide more information about enrollment.`;

    // Properly encode and replace newlines for WhatsApp
    const whatsappUrl = `https://wa.me/09081893000?text=${encodeURIComponent(
      message
    ).replace(/%0A/g, "%0A")}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      name: "Coding Basics",
      color: "text-blue-600",
      desc: "HTML, CSS, JavaScript fundamentals",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      name: "Microsoft Tools",
      color: "text-green-600",
      desc: "Office Suite, PowerPoint, Excel basics",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      name: "Generative AI",
      color: "text-purple-600",
      desc: "AI tools and prompt engineering",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "Graphic Design",
      color: "text-pink-600",
      desc: "Design principles and creative tools",
    },
    {
      icon: <BicepsFlexed className="w-8 h-8" />,
      name: "Leadership Skills",
      color: "text-pink-600",
      desc: "Teamwork, communication, and problem-solving",
    },
    {
      icon: <Weight className="w-8 h-8" />,
      name: "Personal Development",
      color: "text-pink-600",
      desc: "Confidence building, goal setting, and time management",
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      name: "Fun and Games",
      color: "text-pink-600",
      desc: "Interactive activities and team-building games",
    },
  ];

  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Lead Web Development Instructor",
      experience: "8 years of full-stack development experience",
      speciality: "Frontend frameworks and responsive design",
    },
    {
      name: "Michael Chen",
      role: "AI & Technology Coordinator",
      experience: "6 years in AI research and education",
      speciality: "Machine learning and AI applications for beginners",
    },
    {
      name: "Emma Williams",
      role: "Creative Design Facilitator",
      experience: "10 years in graphic design and digital media",
      speciality: "Visual storytelling and design thinking",
    },
    {
      name: "David Rodriguez",
      role: "Microsoft Tools Specialist",
      experience: "12 years in corporate training and productivity tools",
      speciality: "Office automation and digital literacy",
    },
  ];

  const faqs = [
    {
      question: "What age groups are eligible for the summer camp?",
      answer:
        "We offer two distinct programs: Kids Program for ages 6-11 and Teens Program for ages 12-16. Each program is tailored to the specific learning needs and capabilities of these age groups.",
    },
    {
      question: "What is included in the program fee?",
      answer:
        "The program fee covers all training materials, access to software tools, project resources, certificate of completion, lunch during camp days, and ongoing support throughout the program duration.",
    },
    {
      question: "Do children need any prior experience with technology?",
      answer:
        "No prior experience is required! Our programs are designed for complete beginners. We start with foundational concepts and gradually build up to more advanced topics at an age-appropriate pace.",
    },
    {
      question: "What is the class size and student-to-instructor ratio?",
      answer:
        "We maintain small class sizes with a maximum of 12 students per instructor to ensure personalized attention and effective learning for every child.",
    },
    {
      question: "Will my child receive a certificate upon completion?",
      answer:
        "Yes! Every participant who completes the program will receive an official certificate from BiroToJob Academy, recognizing their newly acquired tech skills.",
    },
    {
      question: "What safety measures are in place?",
      answer:
        "We prioritize child safety with supervised environments, secure internet access, age-appropriate content filtering, and trained staff who are experienced in working with children.",
    },
    {
      question: "Can I get updates on my child's progress?",
      answer:
        "Absolutely! We provide regular progress updates to parents through our communication channels and host a showcase event where children can demonstrate their projects.",
    },
    {
      question: "What happens if my child misses a session?",
      answer:
        "We provide make-up sessions and supplementary materials to ensure your child doesn't fall behind. Our instructors also offer one-on-one catch-up sessions when needed.",
    },
    {
      question:
        "What other activities is available for my child during the summer school program?",
      answer:
        "We will also equip your kids with personal development programmes and build them with various leadership skill, organizational skills, clarity on goals and there will also be different breakout sessions where they will have different roles assigned to them, plan project from scratch and pitch ideas.",
    },
  ];

  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Small Class Sizes",
      desc: "Maximum 12 students per instructor for personalized attention",
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Certified Instructors",
      desc: "Industry professionals with youth education expertise",
    },

    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: "Project-Based Learning",
      desc: "Build real projects to showcase your skills",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/*} <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-600 text-white rounded-full px-6 py-3 shadow-lg mr-4">
                <span className="text-xl font-bold">BIRO</span>
              </div>
              <div className="text-gray-600">
                <span className="text-lg font-medium">TO</span>
              </div>
              <div className="bg-green-500 text-white rounded-full px-6 py-3 shadow-lg ml-4">
                <span className="text-xl font-bold">JOB</span>
              </div>
            </div>*/}

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-blue-700 dark:text-blue-400 font-bold text-xl tracking-wide mb-4 md:mb-8">
                  Birotojob Academy™
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                    Tech
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-blue-600">
                    Summer Camp
                  </h1>
                </div>

                <p className="text-xl text-gray-600 mb-6">
                  Empowering the next generation with essential technology
                  skills through hands-on learning and creative projects
                </p>

                <div className="flex flex-wrap justify-center items-center gap-6">
                  <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    July 28th - Aug 29th
                  </div>
                  <div className="text-blue-600 font-semibold text-lg">
                    Ages 6-16 Welcome!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Choose Your Program
          </h2>

          <div className="flex justify-center mb-12 ">
            <div className="bg-gray-100 rounded-2xl p-2 shadow-lg w-full md:w-auto">
              <button
                onClick={() => setSelectedProgram("kids")}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-full md:w-auto ${
                  selectedProgram === "kids"
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Kids Program (Ages 6-11)
              </button>
              <button
                onClick={() => setSelectedProgram("teens")}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-full md:w-auto ${
                  selectedProgram === "teens"
                    ? "bg-red-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Teens Program (Ages 12-16)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Program Details */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div
                  className={`inline-block px-6 py-3 rounded-full text-white font-bold text-2xl shadow-lg ${
                    selectedProgram === "kids" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  ₦{selectedProgram === "kids" ? "50,000" : "75,000"}
                </div>
                <p className="text-gray-600 mt-2 font-semibold">
                  Program Investment
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-blue-800">Duration</p>
                    <p className="text-blue-700 text-sm">
                      July 28th - August 29th, 2025 (5 weeks)
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <MapPin className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-green-800">Location</p>
                    <p className="text-green-700 text-sm">
                      Suite E2, 220, HFP East-Line Shopping Complex, Abraham
                      Adesanya Round About, Lekki Epe Expressway
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-purple-50 p-4 rounded-xl border border-purple-100">
                  <Clock className="w-6 h-6 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold text-purple-800">Schedule</p>
                    <p className="text-purple-700 text-sm">
                      Monday - Friday, 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Curriculum */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Curriculum Highlights
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start">
                      <div className={`${skill.color} mr-4`}>{skill.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{skill.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose BiroToJob Summer Camp?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white text-center p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Meet Our Expert Instructors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our dedicated team of professionals brings years of industry
            experience and a passion for nurturing young minds in technology
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-4">
                    {instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {instructor.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {instructor.experience}
                    </p>
                    <p className="text-gray-700 text-sm font-medium">
                      {instructor.speciality}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers! Here are the most common
            questions parents ask about our summer camp program.
          </p>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-4 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="apply" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                Ready to Enroll?
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Take the first step towards your child&apos;s tech journey
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Child&apos;s Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white"
                      placeholder="Enter your child's name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Age *
                    </label>
                    <Input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white"
                      placeholder="Child's age"
                      min={6}
                      max={16}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Parent&apos;s Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white"
                    placeholder="+234 xxx xxx xxxx"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Select Program *
                  </label>
                  <Select
                    name="program"
                    value={formData.program}
                    onValueChange={(value) =>
                      setFormData({ ...formData, program: value })
                    }
                  >
                    <SelectTrigger className="h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kids">
                        Kids Program (Ages 6-11) - ₦50,000
                      </SelectItem>
                      <SelectItem value="teens">
                        Teens Program (Ages 12-16) - ₦75,000
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Enroll via WhatsApp</span>
                </button>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Have questions? Contact us directly or visit our website for
                    more information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
              <Location className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                Suite E2, 220, HFP East-Line Shopping Complex
                <br />
                Abraham Adesanya Round About
                <br />
                Lekki Epe Expressway, Lagos
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-2">
                Quick responses for enrollment
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/2349081893000", "_blank")
                }
                className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-300"
              >
                Chat with us
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
              <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Website</h3>
              <p className="text-gray-600 text-sm mb-2">
                Learn more about our programs
              </p>
              <a
                href="https://academy.birotojob.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300"
              >
                academy.birotojob.com
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Follow us on social media for updates and tech tips!
            </p>
            <p className="text-blue-600 font-semibold">@birotojob</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummerCampPage;
