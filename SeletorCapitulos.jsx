const SeletorCapitulos = (props) => {
  return (
    <button className="seletor">
        <i className="bi bi-list-task"></i>
        <p>{`Capítulo${props.capítuloAtual}`}</p>
    </button>
  )
}

export default SeletorCapitulos
