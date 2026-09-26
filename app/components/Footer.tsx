 export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Naveed Aijaz. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Naveed-Aijaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/naveed-aijaz-538352384/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}