import '../CSS/Layout.css';
import '../CSS/Form.css';
import Footer from './Layout/Footer/Footer';
import SideBar from "./Layout/SideBar/SideBar";
import HomePage from './Layout/HomePage/HomePage';
import QueueMusiquePage from './Layout/QueueMusiquePage/QueueMusiquePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PlayListPage from './Layout/PlaylistPage/PlayListPage';
import HeaderContent from './Layout/HeaderContent';
import { createContext, useContext, useEffect, useState } from 'react';
import NewPlaylistForm from '../Formulaire/NewPlaylistForm';
import APIPlaylist from '../Services/APIPlaylist';
import { Attente } from '../App';

export const ApiContext = createContext();

function Layout() {
	const myList = useContext(Attente)
	const [dataPlaylist, setDataPlaylist] = useState([]);

	async function handleChange() {
		try {
			const newdata = await APIPlaylist.findAll();
			setDataPlaylist(newdata);
		}
		catch (error) {
			console.error(error.response)
		}
	}

	useEffect(() => {
		handleChange()
		if (myList.musiqueEnCour) {
		}
	}, []);

	return (

		<Router>
			<ApiContext.Provider value={dataPlaylist}>
				<div className='layout'>
					<div className="content" style={{ flexGrow: 1 }}>
						<SideBar />
						<div className='main-page' style={{ width: '100%' }}>
							<HeaderContent />
							<Routes>
								<Route exact path="/" element={<HomePage />} />
								<Route exact path="/queue" element={<QueueMusiquePage />} />
								<Route path="/playlist/:idPlaylist" element={<PlayListPage dataPlaylist={dataPlaylist} />} />
								<Route exact path="/new_Playlist" element={<NewPlaylistForm />} />
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
