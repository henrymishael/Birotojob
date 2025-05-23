"use client";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allCourses } from "@/lib/data";
import { NavigationLink } from "@/hooks/services/navigation-link";
import { useState, useEffect } from "react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setFilteredCourses(
        allCourses.filter((product: any) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setLoading(false);
    }, 600); // 600ms delay for UX

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div className='container px-4 md:px-6 py-12'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tighter md:text-4xl mb-2'>
            Our Courses
          </h1>
          <p className='text-muted-foreground'>
            Discover our comprehensive range of technology courses
          </p>
        </div>
        <div className='w-full md:w-auto flex flex-col sm:flex-row gap-2'>
          <div className='w-full sm:w-[250px]'>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search courses...'
              className='w-full'
            />
          </div>
          <Select defaultValue='all'>
            <SelectTrigger className='w-full sm:w-[180px]'>
              <SelectValue placeholder='Filter by level' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Levels</SelectItem>
              <SelectItem value='beginner'>Beginner</SelectItem>
              <SelectItem value='intermediate'>Intermediate</SelectItem>
              <SelectItem value='advanced'>Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className='flex justify-center items-center py-20'>
          {/* Simple spinner */}
          <svg
            className='animate-spin h-8 w-8 text-primary'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
              fill='none'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
            />
          </svg>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredCourses.map((course) => (
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
                <div className='flex items-center mt-4 space-x-2'>
                  <span className='text-sm font-medium'>Topics:</span>
                  <div className='flex flex-wrap gap-1'>
                    {course.topics.map((topic, index) => (
                      <span
                        key={index}
                        className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <NavigationLink
                  href={`/courses/${course.id}`}
                  className='w-full'
                >
                  <Button className='w-full'>View Details</Button>
                </NavigationLink>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
