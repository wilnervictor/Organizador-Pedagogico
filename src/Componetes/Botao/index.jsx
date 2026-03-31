const Botao = (props) => {
    
    return (
    <button onClick={props.onClick} className="bg-brand-blue w-36 rounded-2xl text-white p-2 cursor-pointer hover:bg-blue-500 md:w-48">{props.valor}</button>
    )
}

export default Botao