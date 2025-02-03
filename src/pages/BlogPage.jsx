import React from "react";
import { ArrowBigRightIcon, ArrowRight, Calendar, Clock } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import bg from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";
import { CourseCard } from "../components";

const BlogPage = () => {
  return (
    <div className=" bg-gray-50 py-1">
      <div className="container mx-auto px-4 text-left my-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <main className="lg:col-span-8 space-y-8">
            {/* <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="#"
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Blogs
                    </a>
                  </div>
                </li>
              </ol>
            </nav> */}

            {/* Blog Title */}
            <div className=" flex flex-col gap-5 pb-4">
              <h1 className="text-4xl font-bold text-secondary font-outfit">
                Understanding Modern Web Development
              </h1>

              {/* Metadata and Social Section */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 text-gray-600 font-outfit">
                <div className="flex flex-row gap-2 items-center">
                  <div className="text-lg font-medium text-primary">
                    <span>John Doe</span>
                  </div>
                  <div className="h-6 w-0.5 bg-gray-400 "></div>
                  <div className="text-lg font-normal text-slate-600">
                    <span>Jan 28, 2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:ml-auto">
                  <p className="text-lg font-medium text-slate-600">Share :</p>
                  <FaFacebook className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                  <FaTwitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                  <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                  <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-600" />
                </div>
              </div>
            </div>

            <div className=" font-publicsans text-lg/8 text-slate-600 text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                voluptatum pariatur quod minima libero laudantium vitae quia
                rerum culpa quidem. Voluptatem beatae cupiditate maxime placeat
                dolor suscipit quod dignissimos cumque.
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 w-full">
              <img
                src="https://pagedone.io/asset/uploads/1696244059.png"
                alt="Blog featured image"
                className="w-full h-full object-cover rounded-none"
              />
            </div>

            {/* Blog Content */}
            <div className=" max-w-none text-justify">
              <p className="font-publicsans text-lg/8 text-slate-600">
                <b>Lorem ipsum dolor sit amet</b> consectetur, adipisicing elit.
                Sunt, eos illum. Ea repellat nobis quas odio repellendus
                tenetur. Eveniet temporibus quibusdam, consectetur iste facere
                animi ea esse, minima molestiae inventore dicta necessitatibus
                iure, sed veritatis delectus voluptate aspernatur sapiente!
                Ipsam suscipit ea distinctio officia recusandae magnam dolorem
                quas culpa nostrum fuga omnis at minus, libero exercitationem
                ducimus velit natus quisquam a ex. Inventore, totam. Alias, amet
                laborum asperiores modi error necessitatibus iure. <br /> <br />
                Aliquid dolore, quos consequatur dicta qui itaque iusto
                asperiores ducimus totam rem nostrum minus pariatur maiores quas
                eum possimus exercitationem sunt, sequi mollitia id maxime iure.
                Quaerat error culpa, consectetur quidem aliquid at velit
                possimus, perspiciatis reiciendis accusantium consequuntur
                provident dolorem, inventore quo aut quas asperiores nihil illo
                atque? Consequuntur ratione commodi assumenda placeat veniam?
                Tempora, rerum omnis.
                <br />
                <br /> Ad nostrum quo est reiciendis cupiditate quia praesentium
                reprehenderit quae ipsa in? Quo facere, sint quaerat perferendis
                quis in, temporibus omnis amet minima, dolor voluptas
                consequatur accusantium. Est explicabo provident dignissimos
                vitae accusamus expedita vero voluptates vel ducimus eveniet,
                aut repellat optio! Voluptatem, saepe quisquam ratione facere
                consequatur adipisci rem veritatis blanditiis ipsa consectetur
                in, iste quaerat repellat{" "}
                <b>
                  molestias quasi fugiat dolore nesciunt harum excepturi!
                </b>{" "}
                Praesentium perspiciatis ab odit eaque corrupti hic sapiente.
                Est doloribus quod nisi beatae voluptatum! Quibusdam eos
                recusandae, laborum molestias assumenda mollitia aspernatur ea
                laudantium explicabo quisquam! Excepturi, itaque! Inventore amet
                nam nesciunt sapiente. <br />
                <br />
                Et officiis placeat at ea molestias inventore quo vero dolore
                fugit ut voluptate quia unde provident totam illo iure
                doloremque dolor cupiditate repellendus possimus, vitae
                recusandae pariatur sint? Vel fugit rerum quis error eaque autem
                veritatis deserunt temporibus qui commodi asperiores expedita
                sed assumenda quia, et natus nam cumque porro magnam ad pariatur
                unde modi accusantium dignissimos.{" "}
                <b>Perferendis quod unde, repellat, impedit</b> quis recusandae
                a rerum voluptates aliquam, dolore asperiores delectus numquam.
                Mollitia distinctio qui excepturi cumque odio recusandae? Omnis
                repellendus labore, minima tenetur obcaecati iste adipisci
                exercitationem deserunt veniam. Esse excepturi neque beatae
                magni quidem, illum odit tenetur error cupiditate pariatur,
                culpa assumenda, quas aut quaerat dolores. Similique accusamus
                assumenda impedit error. Vitae corporis reprehenderit ipsam
                praesentium quam facere consectetur excepturi perspiciatis
                quibusdam, adipisci hic voluptate in commodi dignissimos
                doloribus deleniti magnam voluptas error officia accusantium
                dolor porro dolorem. <br />
                <br />
                <b>Placeat quos unde architecto inventore</b> sint, nesciunt
                odit amet commodi voluptate iste? Velit culpa dolorem omnis
                error alias aliquid reprehenderit assumenda accusantium
                laboriosam perferendis explicabo, maxime autem et eaque magnam
                maiores quos veniam voluptatum commodi, eligendi soluta nisi.
                Maxime tempora ipsam illum exercitationem atque cupiditate,
                blanditiis molestiae quas rem magni dolores adipisci error
                cumque velit non et, deleniti quia animi iure neque qui porro.
                Consequuntur ad voluptatem dignissimos doloremque veritatis amet
                nostrum porro alias numquam enim esse, dolores, voluptatum
                ducimus quisquam commodi ipsa mollitia facere nihil beatae
                itaque. Eius quibusdam ipsa molestias ex, vitae eveniet nostrum
                veniam, repellendus illum temporibus fuga id consequuntur cum
                omnis iusto qui a itaque minus ipsam est deserunt ad numquam
                corporis! Veritatis similique corrupti expedita ex dicta dolores
                error qui, recusandae maiores totam tenetur inventore quis,
                laboriosam sequi, quasi esse velit quae provident.
                <br />
                <br /> Autem aliquid provident modi necessitatibus enim quisquam
                dolor explicabo ratione laborum soluta nihil inventore earum
                culpa aperiam aut magni deserunt molestias quaerat vero
                architecto consequatur, sunt nostrum beatae? Cumque in quod
                molestiae odio, voluptates dolores quia quisquam voluptas ad,
                soluta ipsum? Quisquam dolores facilis in possimus debitis nobis
                id libero ad. Porro amet nostrum aut, nisi fugit facere unde
                sequi vitae a reprehenderit repellat recusandae eligendi debitis
                nesciunt earum nemo culpa adipisci harum asperiores! Dolorum
                perspiciatis reiciendis eveniet magni molestiae rem aut illo,
                voluptas nam neque, corrupti quo sequi consequuntur ea
                aspernatur eos veritatis! Qui aut adipisci recusandae
                exercitationem eaque nulla perferendis quibusdam ut et at amet,
                ducimus deserunt nobis possimus, alias tempore reprehenderit
                odio minima voluptate.
                <br />
                <br /> <b>Unde sit repellat, voluptatum perferendis</b>{" "}
                laudantium dicta sequi. Magni praesentium laudantium, fugiat
                possimus suscipit aliquam saepe porro rerum architecto
                temporibus maxime voluptatem alias, ducimus sint consectetur,
                eos modi aperiam maiores expedita neque! Incidunt officia
                voluptas, ut commodi cum excepturi illo enim quaerat consequatur
                illum accusamus molestias pariatur aut laboriosam eius ducimus
                facilis suscipit doloremque fugiat, quisquam sunt sequi
                molestiae! Autem reiciendis quas maiores voluptatum eligendi
                tempora ullam iure? Dolor, eos accusamus. Dolores iste unde,
                quibusdam esse beatae aperiam rem in id! Aliquam, voluptas nemo
                atque eveniet nam modi soluta assumenda fugiat aliquid vitae
                nisi placeat, architecto nihil non numquam praesentium
                laudantium dolores ea cumque maiores consectetur ex id? Iste,
                dolore. Neque aperiam vero quisquam eligendi dolores magni ad
                alias ipsam veniam, obcaecati quia ipsa minus sequi amet. Vero
                aliquam sint ad odit blanditiis mollitia molestiae quaerat
                repellat neque enim.
                <br />
                <br /> <b>Nihil facere placeat ipsa ea ipsum</b> sit iusto hic
                magni totam eius adipisci illo, beatae quaerat voluptates
                expedita sequi quidem error sint et! Sed, laudantium ullam dicta
                labore tempora magni molestiae sint nihil cum eligendi dolore
                veritatis, nostrum quaerat quam illum! Voluptate esse architecto
                impedit voluptates corporis quo aut nobis, culpa qui, tempore
                iusto iure aspernatur veniam. Exercitationem repudiandae ea, in
                ipsum libero doloribus dicta! Fugiat voluptatum dolores fuga
                nemo quas dolore soluta qui architecto, molestias ut ex
                aspernatur reprehenderit ipsa aliquid excepturi similique illum
                temporibus nobis cumque provident a consectetur maxime nostrum.
                Cumque recusandae dolores a illum excepturi quisquam modi rem
                explicabo quas sunt eius ab mollitia maiores laboriosam facere,
                eum numquam quia quasi laudantium dicta ducimus doloribus
                molestiae fuga. Labore ea ullam nobis, alias eos dignissimos.
                Commodi vero vel expedita ipsum quae doloremque voluptate,
                tenetur maiores.
              </p>
              {/* Add more content paragraphs as needed */}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-10">
              {/* Career Guidance Ad Card */}
              <div>
                <div
                  style={{ backgroundImage: `url(${bg})` }}
                  className=" bg-no-repeat bg-cover h-40 rounded-2xl border border-black"
                >
                  <div className=" bg-black/40 w-full h-full rounded-2xl p-6 flex flex-col gap-2">
                    {/* <img
                    src="https://pagedone.io/asset/uploads/1696244059.png"
                    alt="Career guidance"
                    className="w-full rounded-lg"
                  /> */}
                    <h2 className=" text-cream font-outfit text-2xl font-semibold">
                      Level Up Your Career
                    </h2>
                    <p className="text-sm font-publicsans text-whiteDim/80">
                      Take your career to the next level with our professional
                      guidance services.
                    </p>
                    <Link
                      to={"https://innovstem.edumilestones.com/"}
                      className=" font-outfit font-medium text-cream text-sm flex flex-row items-center gap-1 cursor-pointer py-2 shadow-2xl"
                    >
                      Know More
                      <ArrowRight className=" w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

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

export default BlogPage;

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
