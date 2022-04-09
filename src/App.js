import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Navbar from './Components/Sidebar/Navbar';
import Video from './Components/Video/Video';
import Search from './Pages/Search/Search';
import Private from './Routes/Private';
import History from './Pages/Search/History/History';
function App() {
  return (
    <>
      <Header/>

      <main>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Private/>}>
              <Route path='/' element={<Content/>}/>
              <Route path='/:productId/:id/:title/:views/:publishedTimeText' element={<Video/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/history' element={<History/>}/>
            </Route>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
