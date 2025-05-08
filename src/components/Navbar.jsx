const NavBar = () => {
  return (
    <>
      <nav className="bg-blue-700 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white" ><a href="/">Noter</a></div>

            <div className="space-x-6 hidden md:flex">
              <a
                href="#"
                className="text-white hover:text-yellow-600 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-600 transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-600 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
