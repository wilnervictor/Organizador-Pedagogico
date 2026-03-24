import { Link } from "react-router-dom"
import { LuClipboardList, LuPlus } from "react-icons/lu";


const Card = (props) => {
    return (
      <section className="h-screen w-full flex justify-center items-center">

        <section className="h-80 w-80 bg-white rounded-2xl flex flex-col items-center justify-center gap-5 shadow-md sm:w-100">

        <h1 className="text-brand-blue font-semibold text-[18px] font-mont sm:text-2xl">{props.valor}</h1>
        
        <div className="bg-brand-bg p-2 rounded-2xl text-brand-blue cursor-pointer hover:bg-brand-yellow flex gap-1 items-center active:bg-amber-400">

           <LuClipboardList size={20} /> 
          <Link to={props.toLink}>{props.planejamento}</Link>
        </div>

        <div className="bg-brand-bg py-2 px-3 rounded-2xl text-brand-blue cursor-pointer hover:bg-brand-yellow flex gap-2.5 items-center active:bg-amber-400">

            <LuPlus />
          <Link to={props.to}>{props.percentual}</Link>
        </div>

      </section>

      </section>   
    )
}

export default Card