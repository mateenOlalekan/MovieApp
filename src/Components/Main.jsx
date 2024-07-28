import { FaBars, FaPlay, FaSearch, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {Link} from "react-router-dom";
function Main() {
  return (
    <main className="flex-1 py-10 px-5 sm:px-10">
      <header className="font-bold text-lg flex items-center gap-x-3 md:hidden mb-12">
        <span className="mr-6">
          <FaBars className="h-7 w-7 text-gray-700 dark:text-white" />
        </span>
        <FaPlay className="h-8 w-8 text-red-600 shrink-0" />
        <div className="tracking-wide dark:text-white flex-1">
          MMovie<span className="text-red-600">.</span>
        </div>
        <div className="relative flex items-center ml-2">
          <span className="text-gray-400 absolute left-4 cursor-pointer">
            <FaSearch className="h-4 w-4" />
          </span>
          <input
            type="text"
            className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white py-3 rounded-full w-full outline-none focus:ring-1"
            placeholder="Search ..."
          />
        </div>
      </header>
      <section>
        <nav className="flex space-x-6 text-gray-400 font-medium">
          <Link href="#" className="hover:text-gray-700 dark:hover:text-white">TV Series</Link>
          <Link href="#" className="text-gray-700 dark:text-white font-semibold">Movies</Link>
          <Link href="#" className="hover:text-gray-700 dark:hover:text-white">Animes</Link>
          <Link href="#" className="text-gray-700 dark:text-white font-semibold">People</Link>
          <Link href="#" className="hover:text-gray-700 dark:hover:text-white">More</Link>
        </nav>
        <div
          className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
          style={{ backgroundImage: "url('images/inception.jpg')" }}
        >
          <div className="flex -space-x-1 items-center">
            <img className="rounded-full w-7 h-7 shadow-lg border border-white" src="https://api.lorem.space/image/face?w=32&h=32&hash=zsrj8csk" alt="" />
            <img className="rounded-full w-7 h-7 shadow-lg border border-white" src="https://api.lorem.space/image/face?w=32&h=32&hash=zsrj8cck" alt="" />
            <img className="rounded-full w-7 h-7 shadow-lg border border-white" src="https://api.lorem.space/image/face?w=32&h=32&hash=zsfj8cck" alt="" />
            <span className="pl-4 text-xs drop-shadow-lg">+8 friends are watching</span>
          </div>
          <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
            <span className="uppercase text-3xl font-semibold drop-shadow-lg">Inception</span>
            <div className="text-xs text-gray-200 mt-2">
              <a href="#" className="">Action</a>,
              <a href="#" className="">Adventure</a>,
              <a href="#" className="">Sci-Fi</a>
            </div>
            <div className="mt-4 flex space-x-3 items-center">
              <a href="#" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block">Watch</a>
              <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600">
                <FaPlus className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-9">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 text-base dark:text-white">Top Stars</span>
          <div className="flex items-center space-x-2 fill-gray-500">
            <FaChevronLeft className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" />
            <FaChevronRight className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-5">
          <div className="relative rounded-xl overflow-hidden">
            <img src="https://www.jolie.de/sites/default/files/styles/image_gallery360w/public/2020-02/leonardo-dicaprio-oscars.jpg?h=64dbc2fc&itok=EH0B3oo4" className="object-cover h-full w-full -z-10" alt="" />
            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">
              <a href="#" className="p-2.5 bg-gray-800/80 bg-white rounded-lg text-white self-end hover:bg-red-600/80">
                <FaPlus className="h-4 w-4" />
              </a>
              <div className="self-center flex flex-col items-center space-y-2">
                <span className="capitalize text-white font-medium drop-shadow-md">Leonardo DiCaprio</span>
                <span className="text-gray-100 text-xs">+12 Movies</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/WP_-_random_-5_%2814094372762%29.jpg/319px-WP_-_random_-5_%2814094372762%29.jpg" className="object-cover w-full h-full -z-10" alt="" />
            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">
              <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg text-white self-end hover:bg-red-600/80">
                <FaPlus className="h-4 w-4" />
              </a>
              <div className="self-center flex flex-col items-center space-y-2">
                <span className="capitalize text-white font-medium drop-shadow-md">Joseph Gordon-Levitt</span>
                <span className="text-gray-300 text-xs">+24 Movies</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img src="https://img.zeit.de/kultur/film/2020-12/elliot-page-tranmann/wide__450x253__mobile__scale_1" className="object-cover h-full w-full -z-10" alt="" />
            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">
              <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg text-white self-end hover:bg-red-600/80">
                <FaPlus className="h-4 w-4" />
              </a>
              <div className="self-center flex flex-col items-center space-y-2">
                <span className="capitalize text-white font-medium drop-shadow-md">Elliot Page</span>
                <span className="text-gray-300 text-xs">+10 Movies</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img src="https://de.web.img3.acsta.net/c_310_420/pictures/16/01/19/11/06/274206.jpg" className="object-cover h-full w-full -z-10" alt="" />
            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">
              <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg text-white self-end hover:bg-red-600/80">
                <FaPlus className="h-4 w-4" />
              </a>
              <div className="self-center flex flex-col items-center space-y-2">
                <span className="capitalize text-white font-medium drop-shadow-md">Tom Hardy</span>
                <span className="text-gray-300 text-xs">+27 Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-9">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 text-base dark:text-white">Similar Movies</span>
          <div className="flex items-center space-x-2 fill-gray-500">
            <FaChevronLeft className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" />
            <FaChevronRight className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-5">
          <div className="rounded-xl overflow-hidden">
            <img src="https://www.justwatch.com/images/backdrop/246125799/s640/total-recall-1990" className="object-cover w-full -z-10" alt="" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="https://cdn.galerie-photos.manege.free.fr/wallpaper/loisirs/cinema/film/cinema_brazil_m.jpg" className="object-cover w-full -z-10" alt="" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="https://m.media-amazon.com/images/M/MV5BMzQ2MzYxNDQ1MF5BMl5BanBnXkFtZTgwNDExNDYzMTE@._V1_.jpg" className="object-cover w-full -z-10" alt="" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4930e1d447c6c3015a7a0051be72963d_480x.progressive.jpg?v=1573585441" className="object-cover w-full -z-10" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;
