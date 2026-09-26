export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Building useful solutions with modern web technologies.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I&apos;m a developer who enjoys turning ideas into functional,
            responsive, and user-friendly web applications. I focus on writing
            clean code and building applications that are practical, scalable,
            and easy to maintain.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My experience includes working with modern frontend and backend
            technologies, developing REST APIs, implementing authentication,
            managing databases, and creating full-stack applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Frontend
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Building responsive and interactive interfaces with modern
              frontend technologies.
            </p>
          </div>

          {/* Backend */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Backend
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Developing APIs, authentication systems, and reliable server-side
              applications.
            </p>
          </div>

          {/* Problem Solving */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Problem Solving
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Breaking complex requirements into simple, maintainable
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}