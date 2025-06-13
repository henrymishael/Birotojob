import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { allCourses } from "@/lib/data";

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = allCourses.find((course) => course.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className='container px-4 md:px-6 py-12'>
      <div className='grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12'>
        <div className='space-y-6'>
          <div className='relative h-[300px] w-full overflow-hidden rounded-lg'>
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className='object-cover'
              priority
            />
          </div>

          <div>
            <h1 className='text-3xl font-bold tracking-tighter md:text-4xl mb-2'>
              {course.title}
            </h1>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold'>
                {course.level}
              </span>
              <span className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold'>
                {course.duration}
              </span>
              {course.topics.map((topic, index) => (
                <span
                  key={index}
                  className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold'
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className='text-muted-foreground'>{course.description}</p>
          </div>

          <Tabs defaultValue='outline'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='outline'>Course Outline</TabsTrigger>
              <TabsTrigger value='details'>Course Details</TabsTrigger>
            </TabsList>
            <TabsContent value='outline' className='space-y-4'>
              <h2 className='text-xl font-bold mt-4'>Course Modules</h2>
              <Accordion type='single' collapsible className='w-full'>
                {course.modules.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`}>
                    <AccordionTrigger>
                      <div className='flex items-center'>
                        <span className='font-medium'>Module {index + 1}:</span>
                        <span className='ml-2'>{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className='pl-4 border-l-2 ml-2 space-y-2'>
                        <p className='text-muted-foreground'>
                          {module.description}
                        </p>
                        <ul className='space-y-1 list-disc list-inside text-sm'>
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value='details' className='space-y-4'>
              <div className='grid gap-4'>
                <div>
                  <h3 className='text-lg font-semibold'>Prerequisites</h3>
                  <ul className='list-disc list-inside mt-2 text-muted-foreground'>
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index}>{prerequisite}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>
                    What You&apos;ll Learn
                  </h3>
                  <ul className='list-disc list-inside mt-2 text-muted-foreground'>
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>Course Format</h3>
                  <p className='mt-2 text-muted-foreground'>{course.format}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>Key details about this course</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-between'>
                <span className='font-medium'>Price(physical):</span>
                <span>{course.price}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Virtual :</span>
                <span>{course.virtual}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Start Date:</span>
                <span>{course.startDate}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Duration:</span>
                <span>{course.duration}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Level:</span>
                <span>{course.level}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Instructor:</span>
                <span>{course.instructor}</span>
              </div>
              <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdIlGbYjokRTIbGjEZyDahwzAHYNq5dNGryhQqvRHjXnc7_nA/viewform?usp=header'>
                <Button className='w-full'>Enroll Now</Button>
              </Link>
              <Button variant='outline' className='w-full'>
                Download Syllabus
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Courses</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {allCourses
                .filter(
                  (c) =>
                    c.id !== course.id &&
                    c.topics.some((topic) => course.topics.includes(topic))
                )
                .slice(0, 3)
                .map((relatedCourse) => (
                  <Link
                    href={`/courses/${relatedCourse.id}`}
                    key={relatedCourse.id}
                    className='block'
                  >
                    <div className='flex items-start space-x-3 p-2 hover:bg-muted rounded-lg transition-colors'>
                      <div className='relative h-12 w-12 overflow-hidden rounded'>
                        <Image
                          src={relatedCourse.image || "/placeholder.svg"}
                          alt={relatedCourse.title}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div>
                        <h4 className='font-medium'>{relatedCourse.title}</h4>
                        <p className='text-xs text-muted-foreground'>
                          {relatedCourse.level} • {relatedCourse.duration}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
