const NavBar = () => {
  return (
    <>
      <nav className="bg-black border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white" ><a href="/">Noter</a></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
