import { useState } from "react"
import Botao from "../Componetes/Botao"
import Hr from "../Componetes/Hr"
import Label from "../Componetes/Label"
import Titulo from "../Componetes/Titulo"

const PageFaltas = () => {

    const [letivo, setLetivo] = useState('')
    const [frequent, setFrequent] = useState('')
    const [valorCalculado, setValorcalculado] = useState(null)

    function calcular(){
        const n = frequent * 100 / letivo
        setValorcalculado(n)
    }
    return (
      <>
      <main className="w-full h-screen flex items-center justify-center">

        <form onSubmit={e => {e.preventDefault()}} className="bg-white w-80 h-115 rounded-2xl shadow-sm p-3.5 flex flex-col gap-2.5 md:w-120">

              <Titulo valor="Percentual de frequência escolar"/>

              <Hr/>

              <Label 
              valor="Quantos dias letivos?" 
              type="number"
              aoValor={v => setLetivo(Number(v))}
              />

              <Label 
              valor="Quantos dias o aluno frequentou?" 
              type="number"
              aoValor={v => setFrequent(Number(v))}
              />

              <Botao valor="Calcular" onClick={calcular}/>
              
              {valorCalculado !== null && valorCalculado < 50 && <p className="text-red-800">Sua frequência foi de {valorCalculado.toFixed(1)}%</p>}
              
              {valorCalculado !== null && valorCalculado >= 50 && <p className="text-emerald-600">Sua frequência foi de {valorCalculado.toFixed(1)}%</p>}

        </form>
      </main>
      </>
    )
}

export default PageFaltas