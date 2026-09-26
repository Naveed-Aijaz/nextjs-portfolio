const education = [
  {
    degree: "Diploma",
    institution: "THE LITTLE SCHOLARS SCHOOL",
    period: "2023 – 2025",
    description:
      "Core Focus: Full-Stack MERN Development & modern AI-powered engineering workflows. Built solid foundations in Data Structures, Algorithms, and Web Engineering.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gray-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My educational journey.
          </h2>
        </div>

        <div className="mt-12 max-w-3xl">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                    {item.institution}
                  </p>
                </div>

                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}