 const projects = [
  {
    title: "MarketHub — Full-Stack Marketplace",
    description:
      "A full-stack marketplace application built as part of a mini hackathon challenge. Implemented JWT authentication, bcrypt password hashing, protected APIs, backend authorization, product ownership validation, product CRUD operations, search, filtering, price sorting, Cloudinary image uploads, and frontend-backend integration.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Cloudinary",
      "Nodemailer",
    ],
    github: "https://github.com/Naveed-Aijaz/marketplace-hub",
    demo: "#",
  },

  {
    title: "MERN Social Media Platform",
    description:
      "A full-stack social media web application currently under active development, designed with real-world authentication, authorization, API handling, and user interaction flows. Implemented user authentication, profiles, profile image uploads, posts, likes, comments, sharing, post editing and deletion with ownership checks, single-post views, dark/light mode, and Cloudinary integration.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Axios",
      "Cloudinary",
    ],
    github: "https://github.com/Naveed-Aijaz/fb-posting_hub",
    demo: "#",
  },

  {
    title: "Pakistan Smart Transportation & Intelligent System",
    description:
      "A full-stack smart transportation platform designed for centralized monitoring of traffic, transportation, incidents, roads, and city-level analytics. Built responsive interfaces, REST APIs, authentication, role-based access, dashboards, traffic monitoring, incident management, analytics, and Urdu/English interface support.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Pollify — Polling Application",
    description:
      "A full-featured polling application built with React and TypeScript. Implemented Firebase authentication, user profile management, poll creation, voting, results, poll expiry, Firestore data management, Redux Toolkit state management, public polls, result visualization, and responsive UI.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Firebase",
      "Firestore",
      "Redux Toolkit",
      "Ant Design",
      "SCSS",
    ],
    github: "https://github.com/Naveed-Aijaz/Pollify-app",
    demo: "#",
  },

  {
    title: "Modern Todo / Post App",
    description:
      "A modern and responsive CRUD application for managing posts and todos. Implemented create, edit, and delete functionality with timestamps, responsive layouts, dark SaaS-style UI, glassmorphism-inspired design, smooth interactions, and a clean user experience.",
    technologies: [
      "React",
      "JavaScript",
      "SCSS",
      "Moment.js",
      "CRUD",
      "Responsive Design",
    ],
    github: "https://github.com/Naveed-Aijaz/modern-notes-app",
    demo: "#",
  },

  {
    title: "User Authentication & Authorization API",
    description:
      "A backend authentication system built with Node.js, Express.js, and MongoDB. Implemented user registration and login, JWT-based authentication, bcrypt password hashing, protected routes, authorization, and secure user data handling.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "REST API",
    ],
    github: "https://github.com/Naveed-Aijaz/users-with-mongodb-jwt-bcrypt",
    demo: "#",
  },

  {
    title: "Portfolio Website",
    description:
      "A modern and responsive developer portfolio built with Next.js and TypeScript to showcase projects, technical skills, education, and contact information. Includes responsive navigation, dark/light theme switching, project showcase, skills, education, and contact sections.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Next Themes",
      "Responsive Design",
    ],
    github: "https://github.com/Naveed-Aijaz/nextjs-portfolio",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A selection of full-stack, frontend, backend, and real-world
            applications I&apos;ve built while learning and working with
            modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <span className="text-xl text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-blue-400">
                  ↗
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-7 flex gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Live Demo ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}