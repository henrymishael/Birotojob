"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { allCourses, partners } from "@/lib/data";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    education: "",
    goals: "",
    availability: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = "service_7ptssxq";
      const templateId = "template_ogpxyf7";
      const publicKey = "ovAzJ95MugcxA7Bq5";

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        experience: formData.experience,
        education: formData.education,
        goals: formData.goals,
        fullName: `${formData.firstName} ${formData.lastName}`,
        to_email: "your-email@example.com", // Replace with your email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success(
        <>
          <div className='font-bold text-green-700 mb-1'>
            Application Submitted Successfully!
          </div>
          <div>
            Thank you for your interest. Our team will contact you shortly.
          </div>
        </>
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        education: "",
        goals: "",
        availability: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        <div>
          <div className='font-bold text-red-700 mb-1'>Submission Error</div>
          <div>
            There was a problem submitting your application. Please try again.
          </div>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className='min-h-screen container bg-gray-50 dark:bg-slate-900'>
        <div className='container mx-auto px-4 py-12 max-w-4xl'>
          {/* Hero Section */}
          <section className='text-center mb-12' aria-labelledby='hero-heading'>
            <div className='text-blue-700 dark:text-blue-400 font-bold text-xl tracking-wide mb-8'>
              Birotojob Academy™
            </div>

            <h1
              id='hero-heading'
              className='text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-8 leading-tight'
            >
              Learn{" "}
              <span className='text-orange-500 dark:text-orange-400'>
                Tech Courses
              </span>{" "}
              &amp; Professional Development
            </h1>

            <div className='text-gray-700 dark:text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed'>
              <p className='mb-4'>
                Master the most in-demand technology skills of the modern era
                and become globally sought-after in the tech industry. Join
                thousands of successful graduates who transformed their careers
                through our comprehensive programming bootcamp and coding
                courses.
              </p>
              <p className='font-semibold text-slate-800 dark:text-white text-lg'>
                <span className='text-blue-700 dark:text-blue-400'>
                  Frontend Web Development
                </span>
                ,{" "}
                <span className='text-blue-700 dark:text-blue-400'>
                  Data Science &amp; Machine Learning
                </span>
                ,{" "}
                <span className='text-blue-700 dark:text-blue-400'>
                  Data Analysis and visualization
                </span>
                ,{" "}
                <span className='text-blue-700 dark:text-blue-400'>
                  ICT Fundamentals
                </span>
                ,{" "}
                <span className='text-blue-700 dark:text-blue-400'>
                  Cybersecurity
                </span>
              </p>
            </div>
            <Button
              className='bg-blue-700 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-600 text-white lg:px-12 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 mb-6'
              onClick={() => {
                const formSection = document.getElementById("apply");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Click Now To Register
            </Button>

            <div className='mb-8'>
              <p className='text-green-600 dark:text-green-400 font-bold text-2xl mb-6'>
                Graduate with Industry-Recognized Tech Certifications
              </p>
              <div className='bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 max-w-md mx-auto'>
                <p className='text-gray-600 dark:text-gray-300 font-semibold mb-3'>
                  Accredited &amp; Certified By:
                </p>
                <div className='flex flex-wrap justify-center gap-12 items-center'>
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className=' flex flex-col gap-2 items-center  transition-all'
                    >
                      <Image
                        src={partner.logo}
                        alt={`Partner ${index + 1}`}
                        className='object-contain'
                        width={100}
                        height={100}
                      />
                      <p>{partner.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button className='bg-blue-700 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-600 text-white lg:px-12 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 mb-12'>
              Enroll in Programming Bootcamp @ 25% Early Bird Discount
            </Button>
          </section>

          {/* Features Section */}
          <section
            id='about'
            className='mb-16'
            aria-labelledby='features-heading'
          >
            <h2
              id='features-heading'
              className='text-3xl font-bold text-center text-slate-800 dark:text-white mb-12'
            >
              Why Choose Our Tech Education Platform?
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <article className='text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span
                    className='text-blue-700 dark:text-blue-400 text-2xl'
                    aria-hidden='true'
                  >
                    🎓
                  </span>
                </div>
                <h3 className='font-bold text-lg text-slate-800 dark:text-white mb-2'>
                  Expert Instructors
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Learn from industry professionals with years of real-world
                  experience at top tech companies
                </p>
              </article>
              <article className='text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span
                    className='text-blue-700 dark:text-blue-400 text-2xl'
                    aria-hidden='true'
                  >
                    💻
                  </span>
                </div>
                <h3 className='font-bold text-lg text-slate-800 dark:text-white mb-2'>
                  Hands-On Projects
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Build real-world applications and portfolio projects that
                  showcase your programming skills to potential employers
                </p>
              </article>
              <article className='text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span
                    className='text-blue-700 dark:text-blue-400 text-2xl'
                    aria-hidden='true'
                  >
                    🚀
                  </span>
                </div>
                <h3 className='font-bold text-lg text-slate-800 dark:text-white mb-2'>
                  Career Support &amp; Job Placement
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Get comprehensive job placement assistance, resume reviews,
                  and career guidance after completing your coding bootcamp
                </p>
              </article>
            </div>
          </section>

          {/* Courses Section */}
          <section
            id='courses'
            className='mb-16'
            aria-labelledby='courses-heading'
          >
            <h2
              id='courses-heading'
              className='text-3xl font-bold text-center text-slate-800 dark:text-white mb-12'
            >
              Our Comprehensive Tech Course Catalog
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {allCourses.map((course, index) => (
                <article
                  key={index}
                  className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700'
                >
                  <h3 className='font-bold text-lg text-slate-800 dark:text-white mb-3'>
                    {course.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {course.description}
                  </p>
                  <div className='flex flex-col gap-2 text-sm text-blue-700 dark:text-blue-400 font-medium'>
                    <span>Duration: {course.duration}</span>
                    <span>Level: {course.level}</span>
                    <span>Price: {course.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Virtual Classroom Section */}
          <section
            className='text-center mb-16'
            aria-labelledby='classroom-heading'
          >
            <h2
              id='classroom-heading'
              className='text-3xl font-bold text-slate-800 dark:text-white mb-8'
            >
              Interactive Online Learning Experience
            </h2>
            <Card className='inline-block max-w-lg mx-auto shadow-lg bg-white dark:bg-slate-800'>
              <CardContent className='p-6'>
                <div className='relative'>
                  <Image
                    src='/images/class3.jpg'
                    alt='Live virtual programming classes with interactive coding environment and instructor-led sessions'
                    width={500}
                    height={350}
                    className='rounded-lg w-full'
                    priority
                  />
                  <div className='mt-6 text-left'>
                    <h3 className='font-bold text-xl text-slate-800 dark:text-white mb-3 flex items-center'>
                      <span
                        className='text-green-500 dark:text-green-400 mr-2'
                        aria-hidden='true'
                      >
                        ●
                      </span>
                      Live Virtual Programming Classes (Join From Anywhere)
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                      Experience the advantage of instructor-led live virtual
                      coding classes with interactive learning environments.
                      Collaborate with fellow students in our cohort-based
                      programming bootcamp, participate in real-time coding
                      sessions, and receive immediate feedback from industry
                      experts. Our state-of-the-art virtual classroom technology
                      ensures an engaging and immersive tech education
                      experience from anywhere in the world.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Stats Section */}
          <section
            className='bg-blue-700 dark:bg-blue-500 text-white rounded-lg p-8 mb-16'
            aria-labelledby='stats-heading'
          >
            <h2
              id='stats-heading'
              className='text-2xl font-bold text-center mb-8'
            >
              Our Track Record of Success
            </h2>
            <div className='grid md:grid-cols-3 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold mb-2'>100+</div>
                <div className='text-blue-100 dark:text-blue-200'>
                  Tech Graduates Placed
                </div>
              </div>
              {/* <div>
                <div className='text-3xl font-bold mb-2'>95%</div>
                <div className='text-blue-100 dark:text-blue-200'>
                  Job Placement Rate
                </div>
              </div> */}
              <div>
                <div className='text-3xl font-bold mb-2'>50+</div>
                <div className='text-blue-100 dark:text-blue-200'>
                  Industry Partners
                </div>
              </div>
              <div>
                <div className='text-3xl font-bold mb-2'>4.9/5</div>
                <div className='text-blue-100 dark:text-blue-200'>
                  Student Rating
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className='mb-16' aria-labelledby='faq-heading'>
            <h2
              id='faq-heading'
              className='text-3xl font-bold text-center text-slate-800 dark:text-white mb-12'
            >
              Frequently Asked Questions About Our Bootcamp
            </h2>
            <div className='max-w-3xl mx-auto space-y-6'>
              {[
                {
                  q: "What programming languages will I learn in the bootcamp?",
                  a: "Our comprehensive curriculum covers JavaScript, Python, HTML/CSS, React, Node.js, and database technologies. You'll also learn modern development tools like Git, AWS, and deployment strategies.",
                },
                {
                  q: "How long does it take to complete the tech courses?",
                  a: "Course duration varies from 8-16 weeks depending on the program. Our Full-Stack Web Development bootcamp is 12 weeks, while specialized courses like Data Science run for 16 weeks.",
                },
                {
                  q: "Do I need to have a laptop ?",
                  a: "Yes! You will need a laptop or desktop computer with internet access to participate in our online classes and complete coding assignments. We recommend a machine with at least 8GB RAM and a modern web browser.",
                },
                {
                  q: "Can I learn programming with no prior experience?",
                  a: "Our courses are designed for complete beginners. We start with programming fundamentals and gradually build up to advanced concepts. Many of our successful graduates started with zero coding experience.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md'
                >
                  <summary className='font-semibold text-slate-800 dark:text-white cursor-pointer hover:text-blue-700 dark:hover:text-blue-400'>
                    {faq.q}
                  </summary>
                  <p className='mt-4 text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section
            id='apply'
            className='max-w-3xl mx-auto'
            aria-labelledby='application-heading'
          >
            <Card className='shadow-xl bg-white dark:bg-slate-800'>
              <CardContent className='p-10'>
                <div className='text-center mb-8'>
                  <h2
                    id='application-heading'
                    className='text-3xl font-bold text-slate-800 dark:text-white mb-4'
                  >
                    Start Your Tech Career Journey Today
                  </h2>
                  <p className='text-gray-600 dark:text-gray-300 text-lg'>
                    Complete the application form below to secure your spot in
                    our next programming bootcamp cohort
                  </p>
                </div>

                <form className='space-y-8' onSubmit={handleSubmit} noValidate>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label
                        htmlFor='firstName'
                        className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                      >
                        First Name *
                      </Label>
                      <Input
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Enter your first name'
                        className='h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white'
                        required
                        aria-describedby='firstName-error'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label
                        htmlFor='lastName'
                        className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                      >
                        Last Name *
                      </Label>
                      <Input
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Enter your last name'
                        className='h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white'
                        required
                        aria-describedby='lastName-error'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='email'
                      className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                    >
                      Email Address *
                    </Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your professional email address'
                      className='h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white'
                      required
                      aria-describedby='email-error'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='phone'
                      className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id='phone'
                      name='phone'
                      type='tel'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Enter your phone number with country code'
                      className='h-12 border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 dark:bg-slate-900 dark:text-white'
                      required
                      aria-describedby='phone-error'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='course'
                      className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                    >
                      Preferred Tech Course *
                    </Label>
                    <select
                      id='course'
                      name='course'
                      value={formData.course}
                      onChange={handleChange}
                      className='w-full h-12 px-4 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-white dark:bg-slate-900 dark:text-white'
                      required
                      aria-describedby='course-error'
                    >
                      <option value=''>
                        Select your preferred programming course
                      </option>
                      {allCourses.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='experience'
                      className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                    >
                      Current Programming Experience Level *
                    </Label>
                    <select
                      id='experience'
                      name='experience'
                      value={formData.experience}
                      onChange={handleChange}
                      className='w-full h-12 px-4 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-white dark:bg-slate-900 dark:text-white'
                      required
                      aria-describedby='experience-error'
                    >
                      <option value=''>
                        Select your current coding experience level
                      </option>
                      <option value='complete-beginner'>
                        Complete Beginner (No prior programming experience)
                      </option>
                      <option value='some-knowledge'>
                        Some Knowledge (Self-taught/Online coding courses)
                      </option>
                      <option value='intermediate'>
                        Intermediate (1-2 years programming experience)
                      </option>
                      <option value='experienced'>
                        Experienced (3+ years, looking to upskill in new
                        technologies)
                      </option>
                    </select>
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='education'
                      className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                    >
                      Highest Education Level
                    </Label>
                    <select
                      id='education'
                      name='education'
                      value={formData.education}
                      onChange={handleChange}
                      className='w-full h-12 px-4 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-white dark:bg-slate-900 dark:text-white'
                      aria-describedby='education-help'
                    >
                      <option value=''>Select your education level</option>
                      <option value='high-school'>High School Diploma</option>
                      <option value='diploma'>
                        Technical Diploma/Certificate
                      </option>
                      <option value='bachelors'>Bachelor&apos;s Degree</option>
                      <option value='masters'>Master&apos;s Degree</option>
                      <option value='phd'>PhD/Doctorate</option>
                    </select>
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='goals'
                      className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                    >
                      Career Goals &amp; Motivation for Learning Tech *
                    </Label>
                    <Textarea
                      id='goals'
                      name='goals'
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder='Tell us about your career goals, why you want to learn programming, and what you hope to achieve after completing our tech bootcamp...'
                      rows={5}
                      className='border-gray-300 dark:border-slate-600 focus:border-blue-700 focus:ring-blue-700 resize-none dark:bg-slate-900 dark:text-white'
                      required
                      aria-describedby='goals-error'
                    />
                  </div>

                  {/* <div className='space-y-2'>
                    <Label
                      htmlFor='availability'
                      className='text-sm font-semibold text-gray-700 dark:text-gray-200'
                    >
                      Preferred Class Schedule
                    </Label>
                    <select
                      id='availability'
                      name='availability'
                      value={formData.availability}
                      onChange={handleChange}
                      className='w-full h-12 px-4 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-white dark:bg-slate-900 dark:text-white'
                      aria-describedby='availability-help'
                    >
                      <option value=''>
                        Select your preferred learning schedule
                      </option>
                      <option value='weekday-morning'>
                        Weekday Mornings (9 AM - 12 PM)
                      </option>
                      <option value='weekday-evening'>
                        Weekday Evenings (6 PM - 9 PM)
                      </option>
                      <option value='weekend-full'>
                        Weekend Full-time (9 AM - 5 PM)
                      </option>
                      <option value='weekend-part'>
                        Weekend Part-time (2 PM - 6 PM)
                      </option>
                      <option value='flexible'>
                        Flexible Schedule (Self-paced with mentor support)
                      </option>
                    </select>
                  </div> */}

                  <div className='pt-4'>
                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-blue-700 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200'
                      aria-describedby='submit-help'
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application "}
                    </Button>
                    <p
                      id='submit-help'
                      className='text-center text-sm text-gray-500 dark:text-gray-400 mt-4'
                    >
                      By submitting this form, you agree to be contacted by our
                      admissions team regarding your tech education application.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      {/* Footer */}

      {/* Footer */}
    </>
  );
}
