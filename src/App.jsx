import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Rightbar from './Components/Rightbar';
function App() {


  return (
    <>
      <div className='flex min-h-screen   2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 '>
       <Sidebar/>
       <Main/>
       <Rightbar/>
      </div>
    </>
  )
}

export default App;
