import { Route, Routes } from 'react-router-dom';
import '../src/App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Navbar from './Components/Sidebar/Navbar';
import Video from './Components/Video/Video';
import Search from './Pages/Search/Search';
import Private from './Routes/Private';
import History from './Pages/History/History';
import Explore from './Pages/Explore/Explore';
import Library from './Pages/Library/Library';
import Chanel from './Pages/AddChanel/Chanel';
import { useContext } from 'react';
import { Context } from './Context/HamburgerBtn';
import Login from './Pages/Login/Login';


function App() {
  const { themeColor, setThemeColor } = useContext(Context)
  return (
    <>
      <Header/>

      <main>
        <Navbar/>
        <div className={themeColor == "dark" ? "content__dark content" : `content`}>
          <Routes>
            <Route path='/' element={<Private/>}>
              <Route path='/' element={<Content/>}/>
              <Route path='/:productId/:id/:title/:views/:publishedTimeText' element={<Video/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/history' element={<History/>}/>
              <Route path='/explore' element={<Explore/>}/>
              <Route path="/library" element={<Library/>}/>
              <Route path="/chanel" element={<Chanel/>}/>
              <Route path='/login' element={<Login/>}/>
            </Route>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
