 const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "SCSS / SASS",
      "Redux Toolkit",
      "Ant Design",
      "Material UI",
      "Responsive Design",
      "Component Architecture",
      "Three.js",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Express Middleware",
      "JWT",
      "Authentication",
      "Authorization",
      "bcrypt",
      "Multer",
      "Nodemailer",
      "Morgan",
      "Socket.io",
      "API Integration",
      "MVC Architecture",
    ],
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "Sequelize",
      "Firebase",
      "Supabase",
      "Firestore",
      "Database Design",
      "CRUD Operations",
    ],
  },

  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "npm",
      "Postman",
      "Docker",
      "Cloudinary",
      "ngrok",
      "JSON",
    ],
  },

  {
    title: "Development & Architecture",
    skills: [
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Application Development",
      "Software Development",
      "Object-Oriented Programming",
      "State Management",
      "Scalable Systems",
      "Caching",
      "Node.js Optimization",
      "Responsive Web Design",
      "API Design",
    ],
  },

  {
    title: "Additional",
    skills: [
      "Payment Integration",
      "File Uploads",
      "Role-Based Access Control",
      "Security",
      "Performance Optimization",
      "Real-Time Applications",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Technologies, tools, and development concepts I use to build
            modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:bg-blue-950 dark:hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}