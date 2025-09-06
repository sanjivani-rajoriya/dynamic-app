export default function Toolbar() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex flex-wrap justify-between items-center sticky top-0 z-10">
      {/* Logo / Title */}
      <h2 className="text-xl md:text-2xl font-bold text-blue-600">
        Dynamic Form Builder
      </h2>

      {/* Navigation */}
      <nav className="flex space-x-4 text-sm md:text-base mt-2 md:mt-0">
        <a
          href="/"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <a
          href="/dashboard"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Help
        </a>
      </nav>
    </header>
  );
}
