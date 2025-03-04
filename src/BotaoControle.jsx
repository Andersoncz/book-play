
const BotaoControle = (props) => {
  return (
    <div className="caixa-botoes">
      <button>
        <i className="bi bi-skip-start"></i></button>
      <button>
        <i class="bi bi-arrow-clockwise"></i></button>
      <button onClick={()=> props.setTaTocando(true)}>
        <i class={`bi bi-${props.taTocando ?"pause" : "play" }-circle-fill`}></i>
      </button>
      <button><i class="bi bi-arrow-counterclockwise"></i></button>
      <button>
        <i className="bi bi-skip-end"></i></button>


    </div>
  )
}

export default BotaoControle
