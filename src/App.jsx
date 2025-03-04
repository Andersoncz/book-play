import brascubasImg from './assets/brascubas.jpg'
import './App.css';
import Capa from './Capa';

function App() {
  const infoLivro = {
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    totalCapitulos: 2,
    capa: brascubasImg,
    textoAlternativo: "capa do livro Memórias Póstumas de Brás Cubas.",
  };

  return <>
    <Capa imagemCapa={infoLivro.capa} textoAlternativo={infoLivro.textoAlternativo}/>
  </>
}


export default App
