import React from "react";
import { CourseViewCard } from "../../components";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <header className="bg-gray-100 ">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
        </div>
      </header> */}
      <main className="py-5">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-white rounded-2xl">
          <div className=" px-2">
            <div className="">
              {/* Search form remains the same */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <p className="text-left font-publicsans text-2xl font-bold text-secondary mb-4 sm:mb-0 pl-3">
                  Enrolled Courses
                </p>
              </div>

              {/* Courses Grid */}

              <div className="mx-auto grid max-w-2xl md:max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 pt-2 lg:mx-0 lg:max-w-none text-left">
                {courses.map((item) => (
                  <div key={item.id}>
                    <CourseViewCard
                      item={{
                        id: item.id,
                        name: item.title,
                        avail: item.class_level_name,
                        category: [item.category_name],
                        description: item.content_short_description,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

const courses = [
  {
    id: 1,
    course_slug: "introduction-to-coding",
    title: "Introduction to Coding",
    content_short_description:
      "Learn the basics of programming using block-based coding tools like Scratch or Code.org.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 2,
    course_slug: "robotics-fundamentals",
    title: "Robotics Fundamentals",
    content_short_description:
      "Hands-on workshops to assemble and program simple robots.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 3,
    course_slug: "ai-and-ml-basics",
    title: "AI & ML Basics",
    content_short_description:
      "Explore AI concepts through games, puzzles, and fun activities.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
];
