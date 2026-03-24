const Botao = (props) => {
    return (
    <button onClick={props.onClick} className="bg-brand-blue w-48 rounded-2xl text-white p-2 cursor-pointer hover:bg-blue-500">{props.valor}</button>
    )
}

export default Botao