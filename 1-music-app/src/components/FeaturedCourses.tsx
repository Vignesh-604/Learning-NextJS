'use client'
import courseData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {              // Specifying datatype for course data
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function FeaturedCourses() {
    // Since course has specified the custom Course datatype, if any of the values are missing error will be caught here
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {
                        featuredCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient
                                    className="flex flex-col items-center p-4 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
                                >
                                    <p className="text-lg sm:text-2xl font-semibold text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className=" text-center text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses${course.slug}`}>Learn More</Link>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View all courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses