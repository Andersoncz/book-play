import { useState } from 'react';
import brascubasImg from './assets/brascubas.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Capa from './Capa';
import SeletorCapitulos from '../SeletorCapitulos';
import BotaoControle from './BotaoControle';

function App() {
  //let taTocando = false;
  const [taTocando, setTaTocando] = useState(false)

  const infoLivro = {
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    totalCapitulos: 2,
    capa: brascubasImg,
    textoAlternativo: "capa do livro Memórias Póstumas de Brás Cubas.",
  };

  return <>
    <Capa imagemCapa={infoLivro.capa} textoAlternativo={infoLivro.textoAlternativo} />
    <SeletorCapitulos capítuloAtual={1} />
    <BotaoControle taTocando={taTocando}setTaTocando={setTaTocando} />
  </>
}


export default App
