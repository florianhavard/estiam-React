import '../CSS/Layout.css';
import Footer from './Layout/Footer';
import SideBar from "./Layout/SideBar";
import HomePage from './Layout/HomePage';
import QueueMusiquePage from './Layout/QueueMusiquePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function Layout() {
    return (
        <Router>
            <div className='layout'>
                <div className="content" style={{ flexGrow: 1 }}>
                    <SideBar />
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/queue" element={<QueueMusiquePage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default Layout;
