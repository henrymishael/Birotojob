import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className='container px-4 md:px-6 py-12'>
      <div className='flex flex-col items-center text-center space-y-4 mb-8'>
        <h1 className='text-3xl font-bold tracking-tighter md:text-4xl'>
          Contact Us
        </h1>
        <p className='text-muted-foreground max-w-[700px]'>
          Have questions about our courses or want to learn more about TechEd
          Academy? We&apos;re here to help!
        </p>
      </div>

      <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action='https://docs.google.com/forms/d/e/1FAIpQLSdIlGbYjokRTIbGjEZyDahwzAHYNq5dNGryhQqvRHjXnc7_nA/viewform?usp=header'
              method='get'
              target='_blank'
              className='space-y-4'
            >
              <div className='grid gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    name='entry.123456789'
                    placeholder='Your name'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='entry.987654321'
                    type='email'
                    placeholder='Your email'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input
                    id='subject'
                    name='entry.456789123'
                    placeholder='What is this regarding?'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='entry.321654987'
                    placeholder='Your message'
                    className='min-h-[150px]'
                    required
                  />
                </div>
                <Button type='submit' className='w-full'>
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us directly using the information below.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-start space-x-4'>
                <MapPin className='h-5 w-5 text-muted-foreground mt-0.5' />
                <div>
                  <h3 className='font-medium'>Address</h3>
                  <p className='text-sm text-muted-foreground'>
                    HFP Shopping Mall
                    <br />
                    Ajah, Lagos
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Phone className='h-5 w-5 text-muted-foreground mt-0.5' />
                <div>
                  <h3 className='font-medium'>Phone</h3>
                  <p className='text-sm text-muted-foreground'>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Mail className='h-5 w-5 text-muted-foreground mt-0.5' />
                <div>
                  <h3 className='font-medium'>Email</h3>
                  <p className='text-sm text-muted-foreground'>
                    info@techedacademy.com
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Clock className='h-5 w-5 text-muted-foreground mt-0.5' />
                <div>
                  <h3 className='font-medium'>Hours</h3>
                  <p className='text-sm text-muted-foreground'>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h3 className='font-medium'>How do I enroll in a course?</h3>
                <p className='text-sm text-muted-foreground'>
                  You can enroll directly through our website by visiting the
                  course page and clicking the &quot;Enroll Now&quot; button.
                </p>
              </div>
              <div>
                <h3 className='font-medium'>Do you offer financial aid?</h3>
                <p className='text-sm text-muted-foreground'>
                  Yes, we offer various financial aid options including
                  scholarships and payment plans. Contact our admissions team
                  for more information.
                </p>
              </div>
              <div>
                <h3 className='font-medium'>Are courses available online?</h3>
                <p className='text-sm text-muted-foreground'>
                  Most of our courses are available in both in-person and online
                  formats. Check the specific course details for availability.
                </p>
              </div>
              <Link
                href='/faq'
                className='text-sm font-medium underline underline-offset-4'
              >
                View all FAQs
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className='rounded-xl overflow-hidden h-[400px] relative'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63430.49493878941!2d3.5453285142751874!3d6.470153441425004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103bf9fc75fe0f05%3A0x502d1606ef3fdeed!2sHFP%20Eastline%20Shopping%20Complex%2C%20Abraham%20Adesaya%2C%20Lekki!3m2!1d6.4701550999999995!2d3.5865285!5e0!3m2!1sen!2sng!4v1747400022370!5m2!1sen!2sng'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='TechEd Academy Location'
        ></iframe>
      </div>
    </div>
  );
}
