import { FaPlayCircle, FaHome, FaUsers, FaSearch, FaCalendarAlt, FaUserAlt, FaUserFriends, FaPhotoVideo, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="w-1/6 py-10 pl-10 min-w-min border-r border-gray-300 transition-all duration-700 dark:border-zinc-700 hidden md:block">
  <div className="font-bold text-lg flex items-center gap-x-3">
    <FaPlayCircle className="h-8 w-8 text-red-600" />
    <div className="tracking-wide dark:text-white">
      MMovie<span className="text-red-600">.</span>
    </div>
  </div>

  <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
    <div className="text-gray-400/70 font-medium uppercase">Menu</div>
    <a className="flex items-center space-x-2 py-1 dark:text-white font-semibold border-r-4 border-r-red-600 pr-20 transition-all duration-700" href="#">
      <FaHome className="h-5 w-5 text-red-600" />
      <span>Home</span>
    </a>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaUsers className="h-5 w-5 group-hover:text-red-600" />
      <span>Community</span>
    </a>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaSearch className="h-5 w-5 group-hover:text-red-600" />
      <span>Discovery</span>
    </a>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaCalendarAlt className="h-5 w-5 group-hover:text-red-600" />
      <span>Coming Soon</span>
    </a>
    
    <div className="mt-8 text-gray-400/70 font-medium uppercase">Social</div>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaUserAlt className="h-5 w-5 group-hover:text-red-600" />
      <span>Profile</span>
    </a>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaUserFriends className="h-5 w-5 group-hover:text-red-600" />
      <span>Friends</span>
    </a>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaPhotoVideo className="h-5 w-5 group-hover:text-red-600" />
      <span>Media</span>
    </a>

    <div className="mt-8 text-gray-400/70 font-medium uppercase">General</div>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaCog className="h-5 w-5 group-hover:text-red-600" />
      <span>Settings</span>
    </a>
    <a className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" href="#">
      <FaSignOutAlt className="h-5 w-5 group-hover:text-red-600" />
      <span>Logout</span>
    </a>
    <a className="flex items-center space-x-2 py-1 mt-4" href="#">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer" />
        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
      <label htmlFor="toggle">Dark Theme</label>
    </a>
  </div>
</aside>
  )
}

export default Sidebar