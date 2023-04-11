import '../CSS/Layout.css';
import Footer from './Layout/Footer/Footer';
import SideBar from "./Layout/SideBar/SideBar";
import HomePage from './Layout/HomePage/HomePage';
import QueueMusiquePage from './Layout/QueueMusiquePage/QueueMusiquePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PlayListPage from './Layout/PlaylistPage/PlayListPage';
import HeaderContent from './Layout/HeaderContent';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
//import { instanceAxios } from '../Configuration/InstanceAxios';


export const ApiContext = createContext();

function Layout() {

  const [dataPlaylist, setDataPlaylist] = useState([]);
  const instanceAxios = axios.create({
    baseURL: 'http://localhost:3010/',
    headers: { "Access-Control-Allow-Origin": "*", },
    responseType: "json",
  });

  useEffect(() => {
    instanceAxios.get("playlist")
      .then(response => {
        setDataPlaylist(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <Router>
      <ApiContext.Provider value={dataPlaylist}>
        <div className='layout'>
          <div className="content" style={{ flexGrow: 1 }}>
            <SideBar/>
            <div style={{ width: '100%' }}>
              <HeaderContent />
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/queue" element={<QueueMusiquePage />} />
                <Route path="/playlist/:idPlaylist" element={<PlayListPage dataPlaylist={dataPlaylist} />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </ApiContext.Provider>
    </Router>
  );
}

export default Layout;
