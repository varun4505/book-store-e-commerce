import React from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  HiOutlineViewGridAdd, 
  HiOutlineChartBar, 
  HiOutlineLogout, 
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineMenuAlt2,
  HiOutlineCog,
  HiOutlineBookOpen
} from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path ? true : false;
  };

  return (
    <section className="flex bg-gray-50 min-h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 z-50 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none">
        {/* Sidebar header */}
        <div className="flex items-center justify-center h-16 px-6 bg-primary text-white">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold">
            <img src="/fav-icon.png" alt="Logo" className="w-8 h-8" />
            <span>BookStore</span>
          </Link>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-4 py-6">
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dashboard</h2>
              
              <div className="mt-3 space-y-1">
                <Link 
                  to="/dashboard" 
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${
                    isActive('/dashboard') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <HiOutlineChartBar className="mr-3 h-5 w-5" />
                  <span>Overview</span>
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Books</h2>
              
              <div className="mt-3 space-y-1">
                <Link 
                  to="/dashboard/add-new-book" 
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${
                    isActive('/dashboard/add-new-book') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <HiOutlineViewGridAdd className="mr-3 h-5 w-5" />
                  <span>Add New Book</span>
                </Link>
                
                <Link 
                  to="/dashboard/manage-books" 
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${
                    isActive('/dashboard/manage-books') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MdOutlineManageHistory className="mr-3 h-5 w-5" />
                  <span>Manage Books</span>
                </Link>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">System</h2>
              
              <div className="mt-3 space-y-1">
                <Link 
                  to="/dashboard/settings" 
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${
                    isActive('/dashboard/settings') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <HiOutlineCog className="mr-3 h-5 w-5" />
                  <span>Settings</span>
                </Link>
                
                <button 
                  onClick={handleLogout}
                  className="flex w-full items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <HiOutlineLogout className="mr-3 h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 max-h-screen overflow-hidden lg:pl-0">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
          <div className="flex items-center gap-4">
            <button className="p-1 text-gray-400 rounded-md lg:hidden hover:text-gray-500">
              <HiOutlineMenuAlt2 className="w-6 h-6" />
            </button>
            
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="search" 
                className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light sm:text-sm" 
                placeholder="Search..." 
              />
            </div>
            
            <button className="relative p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-light">
              <span className="sr-only">View notifications</span>
              <HiOutlineBell className="w-6 h-6" />
              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full"></span>
            </button>
            
            <div className="border-l h-6 mx-2 border-gray-200"></div>
            
            <button className="flex items-center text-sm bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light" id="user-menu">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/63.jpg" alt="User avatar" />
              <span className="hidden md:flex md:items-center ml-2 mr-1">
                <span className="text-sm font-medium text-gray-700">Admin User</span>
              </span>
            </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
