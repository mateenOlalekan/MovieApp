import { FaSearch, FaImdb } from 'react-icons/fa';

function Rightbar() {
  return (
    <aside className="w-1/5 py-10 px-10 min-w-min border-l border-gray-300 dark:border-zinc-700 hidden lg:block">
  <div className="relative items-center content-center flex">
    <span className="text-gray-400 absolute left-4 cursor-pointer">
      <FaSearch className="h-4 w-4" />
    </span>
    <input
      type="text"
      className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white py-3 rounded-full w-full outline-none focus:ring-1"
      placeholder="Search ..."
    />
  </div>

  <div className="mt-10">
    <span className="font-semibold text-gray-700 dark:text-white">Popular Movies</span>
    <ul className="mt-4 text-gray-400 text-xs space-y-3">
      <li className="flex space-y-3 space-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
          className="w-1/3 rounded-md"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-gray-700 dark:text-white font-semibold">The Shawshank Redemption</span>
            <span className="text-xxs hidden xl:block">Drama</span>
          </div>
          <div className="flex space-x-2 items-center">
            <FaImdb className="w-8 h-5" />
            <span>9.2</span>
          </div>
        </div>
      </li>
      <li className="flex space-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
          className="object-cover w-1/3 rounded-md"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-gray-700 dark:text-white font-semibold">The Dark Knight</span>
            <span className="text-xxs hidden xl:block">Action, Crime, Drama</span>
          </div>
          <div className="flex space-x-2 items-center">
            <FaImdb className="w-8 h-5" />
            <span>9.1</span>
          </div>
        </div>
      </li>
      <li className="flex space-x-3">
        <img
          src="https://m.media-amazon.com/images/I/81vZ6tNxuoL._SY500_.jpg"
          className="object-cover w-1/3 rounded-md"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-gray-700 dark:text-white font-semibold">John Wick 4</span>
            <span className="text-xxs hidden xl:block">Action, Crime, Thriller</span>
          </div>
          <div className="flex space-x-2 items-center">
            <FaImdb className="w-8 h-5" />
            <span>7.4</span>
          </div>
        </div>
      </li>
      <li className="pt-1">
        <a href="#" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-center font-medium block text-white">
          See More
        </a>
      </li>
    </ul>
  </div>
  <div className="mt-10">
    <span className="font-semibold text-gray-700 dark:text-white">Favorites</span>
    <ul className="mt-4 text-gray-400 text-xs space-y-3">
      <li className="flex space-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
          className="object-cover w-1/3 rounded-md"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-gray-700 dark:text-white font-semibold">The Matrix</span>
            <span className="text-xxs hidden xl:block">Action, Sci-Fi</span>
          </div>
          <div className="flex space-x-2 items-center">
            <FaImdb className="w-8 h-5" />
            <span>8.7</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</aside>

  )
}

export default Rightbar