import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuredCourses, heroImages } from "@/lib/data";
import { HeroCarousel } from "@/components/hero-carousel";
import { NavigationLink } from "@/hooks/services/navigation-link";

export default function Home() {
  return (
    <div className='flex flex-col gap-12 pb-8'>
      {/* Hero Section */}
      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                  Master Technology Skills for the Future
                </h1>
                <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                  Join BirotoJob Academy and transform your career with our
                  industry-leading courses taught by experts.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Link href='/courses'>
                  <Button size='lg'>Explore Courses</Button>
                </Link>
                <Link
                  href='https://api.whatsapp.com/send/?phone=2349081893000&text&type=phone_number&app_absent=0'
                  target='_blank'
                >
                  <Button variant='outline' size='lg'>
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className='relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl'>
              {/* <Image
                src='/images/Hero.jpg'
                alt='Students learning technology'
                fill
                className='object-cover'
                priority
              /> */}
              <HeroCarousel images={heroImages} className='' />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
              Featured Courses
            </h2>
            <p className='max-w-[700px] text-muted-foreground md:text-xl'>
              Discover our most popular courses and start your tech journey
              today.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {featuredCourses.map((course) => (
            <Card key={course.id} className='flex flex-col h-full'>
              <CardHeader>
                <div className='relative h-[200px] w-full overflow-hidden rounded-t-lg mb-2'>
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>
                  {course.duration} • {course.level}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex-1'>
                <p className='text-muted-foreground'>{course.description}</p>
              </CardContent>
              <CardFooter>
                <NavigationLink
                  href={`/courses/${course.id}`}
                  className='w-full'
                >
                  <Button className='w-full'>View Course</Button>
                </NavigationLink>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className='flex justify-center mt-8'>
          <NavigationLink href='/courses'>
            <Button variant='outline'>View All Courses</Button>
          </NavigationLink>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
                Why Choose BiroToJob Academy
              </h2>
              <p className='max-w-[700px] text-muted-foreground md:text-xl'>
                We provide industry-leading education to help you succeed in
                tech.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            <div className='flex flex-col items-center text-center space-y-2 p-4'>
              <div className='p-2 bg-primary/10 rounded-full'>
                <svg
                  className='h-6 w-6 text-primary'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                </svg>
              </div>
              <h3 className='text-xl font-bold'>Industry Experts</h3>
              <p className='text-muted-foreground'>
                Learn from professionals with years of real-world experience in
                the tech industry.
              </p>
            </div>
            <div className='flex flex-col items-center text-center space-y-2 p-4'>
              <div className='p-2 bg-primary/10 rounded-full'>
                <svg
                  className='h-6 w-6 text-primary'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
                  <path d='m9 12 2 2 4-4' />
                </svg>
              </div>
              <h3 className='text-xl font-bold'>Practical Curriculum</h3>
              <p className='text-muted-foreground'>
                Our courses focus on practical skills that you can immediately
                apply in your career.
              </p>
            </div>
            <div className='flex flex-col items-center text-center space-y-2 p-4'>
              <div className='p-2 bg-primary/10 rounded-full'>
                <svg
                  className='h-6 w-6 text-primary'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z' />
                  <path d='M12 13v8' />
                  <path d='M12 3v3' />
                </svg>
              </div>
              <h3 className='text-xl font-bold'>Career Support</h3>
              <p className='text-muted-foreground'>
                Get guidance on job searching, resume building, and interview
                preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='container px-4 md:px-6 py-12'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
              What Our Students Say
            </h2>
            <p className='max-w-[700px] text-muted-foreground md:text-xl'>
              Hear from our graduates who have transformed their careers with
              BirotoJob Academy.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex flex-col items-center space-y-4'>
                <div className='relative h-16 w-16 rounded-full overflow-hidden'>
                  <Image
                    src='/images/avatar1.png'
                    alt='Student portrait'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='space-y-2 text-center'>
                  <p className='text-muted-foreground italic'>
                    &ldquo;The Web Development Bootcamp completely changed my
                    career path. I went from a non-technical role to a frontend
                    developer in just 6 months after completing the
                    course.&ldquo;
                  </p>
                  <h4 className='font-semibold'>Tomisin Adekunle </h4>
                  <p className='text-sm text-muted-foreground'>
                    Frontend Developer at Estringle
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex flex-col items-center space-y-4'>
                <div className='relative h-16 w-16 rounded-full overflow-hidden'>
                  <Image
                    src='/images/avatar2.png'
                    alt='Student portrait'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='space-y-2 text-center'>
                  <p className='text-muted-foreground italic'>
                    &ldquo;The Data Science course provided me with practical
                    skills that I use daily in my job. The instructors were
                    knowledgeable and supportive throughout the learning
                    process.&ldquo;
                  </p>
                  <h4 className='font-semibold'>Essien Obi</h4>
                  <p className='text-sm text-muted-foreground'>
                    Data Analyst at AnalyticsPro
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex flex-col items-center space-y-4'>
                <div className='relative h-16 w-16 rounded-full overflow-hidden'>
                  <Image
                    src='/images/avatar3.png'
                    alt='Student portrait'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='space-y-2 text-center'>
                  <p className='text-muted-foreground italic'>
                    &ldquo;I took the UX/UI Design course while working
                    full-time, and the flexible schedule made it possible. The
                    projects in the course helped me build a portfolio that
                    landed me my dream job.&ldquo;
                  </p>
                  <h4 className='font-semibold'>Adekunle Tosin</h4>
                  <p className='text-sm text-muted-foreground'>
                    UX Designer at DesignStudio
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className='w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
                Ready to Start Your Tech Journey?
              </h2>
              <p className='max-w-[700px] md:text-xl'>
                Enroll today and take the first step towards a successful career
                in technology.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='/courses'>
                <Button size='lg' variant='secondary'>
                  Browse Courses
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  size='lg'
                  variant='outline'
                  className='bg-transparent text-primary-foreground hover:bg-primary-foreground/10'
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
