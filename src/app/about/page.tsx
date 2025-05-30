import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { partners, teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className='container px-4 md:px-6 py-12'>
      {/* Hero Section */}
      <section className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold tracking-tighter md:text-4xl'>
            About BirotoJob Academy
          </h1>
          <p className='text-muted-foreground'>
            Birotojob Integrated Limited is a Nigerian-based ICT and career
            development company committed to equipping individuals with
            in-demand digital and tech skills. We offer practical training in
            Data Analysis, Web Development, Cybersecurity, ICT Fundamentals,
            Graphic Design, and more — both physically and virtually.
          </p>
          <p className='text-muted-foreground'>
            Our goal is to empower students, professionals, and entrepreneurs to
            succeed in today’s digital economy through hands-on learning, expert
            mentorship, and career support.
          </p>
        </div>
        <div className='relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl'>
          <Image
            src='/images/about.jpg'
            alt='Birotojob Academy campus'
            fill
            className='object-cover'
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className='mb-12 py-8 px-6 bg-muted rounded-xl'>
        <div className='text-center max-w-3xl mx-auto space-y-4'>
          <h2 className='text-2xl font-bold'>Our Mission</h2>
          <p className='text-muted-foreground'>
            To empower individuals with the technical skills, knowledge, and
            mindset needed to thrive in the rapidly evolving technology
            landscape, while fostering a diverse and inclusive community of
            learners and professionals.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Our Values</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-center space-y-2'>
                <div className='p-2 bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center'>
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
                <h3 className='font-bold'>Excellence</h3>
                <p className='text-sm text-muted-foreground'>
                  We strive for excellence in our curriculum, teaching methods,
                  and student support to ensure the best learning outcomes.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-center space-y-2'>
                <div className='p-2 bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center'>
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
                    <path d='m8 18 4-6-4-6h8l4 6-4 6z' />
                  </svg>
                </div>
                <h3 className='font-bold'>Innovation</h3>
                <p className='text-sm text-muted-foreground'>
                  We embrace innovation in technology and education,
                  continuously updating our courses to reflect industry trends.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-center space-y-2'>
                <div className='p-2 bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center'>
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
                    <path d='M17 6.1H3' />
                    <path d='M21 12.1H3' />
                    <path d='M15.1 18H3' />
                  </svg>
                </div>
                <h3 className='font-bold'>Inclusivity</h3>
                <p className='text-sm text-muted-foreground'>
                  We believe in creating an inclusive learning environment where
                  everyone feels welcome and supported.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-center space-y-2'>
                <div className='p-2 bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center'>
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
                    <path d='M12 2v20' />
                    <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7' />
                  </svg>
                </div>
                <h3 className='font-bold'>Practicality</h3>
                <p className='text-sm text-muted-foreground'>
                  We focus on practical, job-ready skills that prepare our
                  students for real-world challenges in the tech industry.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Team */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Meet Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {teamMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center space-y-4'>
                  <div className='relative h-12 w-12 rounded-full overflow-hidden'>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className='object-cover'
                      />
                    ) : (
                      <div className='bg-primary flex items-center justify-center h-12 w-12 text-white text-2xl font-bold'>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className='font-bold'>{member.name}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {member.role}
                    </p>
                  </div>
                  <p className='text-sm text-muted-foreground'>{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Facilities */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Our Facilities</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='relative h-[250px] overflow-hidden rounded-xl'>
            <Image
              src='/images/class1.jpg'
              alt='Modern classroom'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
              <h3 className='text-white font-bold text-xl'>
                Modern Classrooms
              </h3>
            </div>
          </div>
          {/* <div className='relative h-[250px] overflow-hidden rounded-xl'>
            <Image
              src='/images/class2.jpg'
              alt='Computer lab'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
              <h3 className='text-white font-bold text-xl'>
                State-of-the-art Computer Labs
              </h3>
            </div>
          </div> */}
          <div className='relative h-[250px] overflow-hidden rounded-xl'>
            <Image
              src='/images/class3.jpg'
              alt='Collaboration space'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
              <h3 className='text-white font-bold text-xl'>
                Collaboration Spaces
              </h3>
            </div>
          </div>
          {/* <div className='relative h-[250px] overflow-hidden rounded-xl'>
            <Image
              src='/images/class4.jpg'
              alt='Student lounge'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
              <h3 className='text-white font-bold text-xl'>Student Lounge</h3>
            </div>
          </div> */}
        </div>
      </section>

      {/* Partners */}
      <section>
        <h2 className='text-2xl font-bold mb-6 text-center'>
          Our Industry Partners
        </h2>
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
      </section>
    </div>
  );
}
