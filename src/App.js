import './App.css';
import { createContext } from 'react';
import Layout from './Components/Laysout';
import ListeAttente from './Services/ListeAttente';

export const Attente = createContext();


//metren en place le context provider pour la musique en cours
//const metaData = {src:"", duree:"", updateMusique=(musique)=>{}}
const mylist = new ListeAttente()


function App() {


  //TODO
  return (
    <div className="App" allow="autoplay">
      <Attente.Provider value={mylist}>
        <Layout />
      </Attente.Provider>
    </div>
  );
}

export default App;
