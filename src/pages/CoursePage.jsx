import React, { useState } from "react";
import {
  BadgeInfo,
  Check,
  ChevronRight,
  Globe,
  GraduationCap,
  Home,
  LibraryBig,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CourseCard } from "../components";

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const learningPoints = [
    "Understanding modern web development frameworks and libraries",
    "Building responsive and accessible user interfaces",
    "Working with state management and data flow",
    "Implementing modern design patterns and best practices",
    "Creating optimized and performant web applications",
  ];

  const quizzes = [
    {
      title: "Introduction to Web Development",
      questions: 10,
      timeLimit: "20 mins",
      difficulty: "Beginner",
    },
    {
      title: "Advanced Frontend Concepts",
      questions: 15,
      timeLimit: "30 mins",
      difficulty: "Intermediate",
    },
    {
      title: "Modern Web Architecture",
      questions: 12,
      timeLimit: "25 mins",
      difficulty: "Advanced",
    },
  ];

  return (
    <div className=" bg-gray-50 py-1">
      <div className="container mx-auto px-4 text-left my-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <main className="lg:col-span-8 space-y-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center gap-2">
                  <Link
                    to={"/"}
                    className="inline-flex gap-2 items-center text-sm font-semibold text-slate-700"
                  >
                    <Home className=" w-4 h-4 text-slate-600" />
                    Home
                  </Link>
                </li>
                <li className="inline-flex items-center gap-2">
                  <ChevronRight className=" w-4 h-4 text-slate-700" />
                  <Link
                    to={"/courses"}
                    className="inline-flex gap-2 items-center text-sm font-semibold text-slate-700"
                  >
                    <LibraryBig className=" w-4 h-4 text-slate-600" />
                    Courses
                  </Link>
                </li>
              </ol>
            </nav>
            {/* Blog Title */}
            <div className="flex flex-col gap-4 pb-0">
              <h1 className="text-4xl font-bold text-secondary font-outfit">
                Understanding Modern Web Development
              </h1>
              <p className="text-base text-slate-600 font-normal font-publicsans text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                voluptatum pariatur quod minima libero laudantium vitae quia
                rerum culpa quidem.
              </p>

              {/* Metadata and Social Section */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 text-gray-600 font-outfit">
                <div className="flex flex-row gap-2 items-center">
                  <div className="text-base/5 font-medium text-primary/80 bg-primary/5 rounded-xl px-3 py-1">
                    <span>STEM Skills</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:ml-auto">
                  <p className="text-sm font-medium text-slate-600 pr-2">
                    Ratings :
                  </p>
                  <Star className="w-4 h-4 text-orange-500" />
                  <p className="text-base font-medium">
                    4.5<span className="text-sm px-1">(1203 ratings)</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-row md:items-center gap-2 md:gap-2 text-gray-600 font-outfit">
                <div className="text-sm font-normal text-slate-600 flex flex-row items-center gap-2">
                  <BadgeInfo className="w-5 h-5 text-primary/40" />
                  <span>Last Updated 1/2025</span>
                </div>
                <div className="h-3 w-0.5 bg-primary/50"></div>
                <div className="text-sm font-normal text-slate-600 flex flex-row items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary/40" />
                  <span>
                    <b>142</b> Learners
                  </span>
                </div>
                <div className="h-3 w-0.5 bg-primary/50"></div>
                <div className="text-sm font-normal text-slate-600 flex flex-row items-center gap-2">
                  <Globe className="w-4 h-4 text-primary/40" />
                  <span>English</span>
                </div>
              </div>
            </div>

            <hr className="border-secondary/10" />

            {/* Tabbed About Section */}
            <div className="font-publicsans">
              <div className="flex space-x-4 mb-6">
                <button
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    activeTab === "overview"
                      ? "bg-cream/30 text-primary"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    activeTab === "quizzes"
                      ? "bg-cream/30 text-primary"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("quizzes")}
                >
                  Quizzes
                </button>
              </div>

              <div className="border rounded-2xl shadow p-8">
                {activeTab === "overview" ? (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-secondary/80 mb-4">
                        About Course
                      </h3>
                      <p className="text-base text-slate-600 mb-4">
                        Unlock the power of Figma, the leading collaborative
                        design tool, with our comprehensive online course.
                        Whether you're a novice or looking to enhance your
                        skills, this course will guide you through Figma's
                        robust features and workflows.
                      </p>
                      <p className="text-base text-slate-600">
                        Perfect for UI/UX designers, product managers, and
                        anyone interested in modern design tools. Join us to
                        elevate your design skills and boost your productivity
                        with Figma!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-secondary/80 mb-4">
                        What You'll Learn
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3">
                        {learningPoints.map((point, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <p className="text-slate-600">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-secondary/80">
                      Course Quizzes
                    </h3>
                    <div className="space-y-4">
                      {quizzes.map((quiz, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-secondary">
                            {quiz.title}
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>{quiz.questions} Questions</span>
                            <span>{quiz.timeLimit}</span>
                            <span>{quiz.difficulty} Level</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-10">
              <div className="">
                <div className="relative bg-cream/40 rounded-3xl mx-4 overflow-hidden">
                  <div className="absolute max-lg:-left-52 -bottom-56 lg:-left-1/2 w-[450px] h-[400px] bg-cream/80 rounded-full  border-[120px] lg:border-[120px] border-primary/30 drop-shadow-md"></div>
                  <div className="absolute max-lg:-left-52 -top-40 lg:-right-32 w-[450px] h-[400px] bg-cream/70 rounded-full  border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>
                  {/* Background Ring */}
                  <div className=" backdrop-blur-2xl h-full">
                    <section className="relative container p-6 bg-transparent my-0">
                      <div className="flex flex-col justify-between items-start gap-4">
                        <img
                          src="https://pagedone.io/asset/uploads/1696244059.png"
                          alt="Career guidance"
                          className="w-full rounded-lg"
                        />

                        <Link
                          to={"https://innovstem.edumilestones.com/"}
                          className=" font-outfit font-medium text-cream text-center w-full rounded-xl bg-secondary/80 text-lg cursor-pointer py-2"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/* Suggested Blogs */}
              <div className=" bg-cream/20 p-6">
                <h2 className=" font-outfit text-left text-lg font-medium text-secondary">
                  Suggested Blogs
                </h2>
                <div className=" flex flex-col gap-2 py-2">
                  <div className="flex gap-4 cursor-pointer hover:bg-gray-50/50 p-4 rounded-lg">
                    <img
                      src={`https://pagedone.io/asset/uploads/1696244059.png`}
                      alt={`Suggested blog 1`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        Future Technologies
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        Short description Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aut, architecto quo. Ipsum minus
                        numquam sunt recusandae nisi quam tempore cupiditate?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 cursor-pointer hover:bg-gray-50/50 p-4 rounded-lg">
                    <img
                      src={`https://pagedone.io/asset/uploads/1696244059.png`}
                      alt={`Suggested blog 1`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        Future Technologies
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        Short description Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aut, architecto quo. Ipsum minus
                        numquam sunt recusandae nisi quam tempore cupiditate?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 cursor-pointer hover:bg-gray-50/50 p-4 rounded-lg">
                    <img
                      src={`https://pagedone.io/asset/uploads/1696244059.png`}
                      alt={`Suggested blog 1`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        Future Technologies
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        Short description Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aut, architecto quo. Ipsum minus
                        numquam sunt recusandae nisi quam tempore cupiditate?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Suggested Courses */}
        <div className=" container px-2 pt-16">
          <div className="">
            {/* Search form remains the same */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <p className="text-left font-publicsans text-3xl font-semibold text-secondary mb-4 sm:mb-0 pl-5">
                Suggested Courses
              </p>
            </div>

            {/* Courses Grid */}

            <div className="mx-auto grid max-w-2xl md:max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 pt-2 lg:mx-0 lg:max-w-none text-left">
              {courses.map((item) => (
                <div key={item.id}>
                  <CourseCard
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
    </div>
  );
};

export default CoursePage;

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
