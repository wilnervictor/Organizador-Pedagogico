
import { useState } from "react"
import Botao from "../Componetes/Botao"
import Label from "../Componetes/Label"
import Titulo from "../Componetes/Titulo"
import Paragrafo from "../Componetes/Paragrafo"
import Hr from "../Componetes/Hr"

const PagesAulas = () => {

  const [data, setData]= useState('')
  const [anoSerie, setAnoSerie]= useState('')
  const [numeroDaAula, setNumeroDaAula]= useState('')
  const [areaDeConhecimento, setAreaDeConhecimento]= useState('')
  const [acolhida, setAcolhida]= useState('')
  const [leitura, setLeitura]= useState('')
  const [unidadeTematica, setUnidadeTematica]= useState('')
  const [objeto, setObjeto]= useState('')
  const [habilidade, setHabilidade]= useState('')
  const [desenvolvida, setDesenvolvida]= useState('')
  

  function gerarPaginar() {

   if(data == '' || anoSerie == '' || numeroDaAula == '' || areaDeConhecimento == '' || acolhida == '' || leitura == '' || unidadeTematica == '' || objeto == '' || habilidade == '' || desenvolvida == ''){
     return
   } 
   const novaPagina = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Roteiro de Aula</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f9f9f9; }
        h1 { color: #000; text-align: center; font-size: 2rem; }
        p { font-size: 18px; line-height: 1.6; }
        .container { display: flex; justify-content: space-between; margin-bottom: 20px; }
        span { color: rgb(250, 109, 109); }
        b { color: rgb(250, 109, 109); }
      </style>
    </head>
    <body>
      <h1>Roteiro de Aula</h1>
      <div class="container">
        <p><b>Série:</b> ${anoSerie}</p>
        <p><mark><b>Data:</b> <span>${data}</span></mark></p>
        <p><b>Nº Aula:</b> ${numeroDaAula}</p>
      </div>
      <p><b>Área Conhecimento:</b> ${areaDeConhecimento}</p>
      <p><b>Acolhida:</b> ${acolhida}</p>
      <p><b>Leitura deleite:</b> ${leitura}</p>
      <p><b>Chamada diária:</b> Sim</p>
      <p><b>Correção do para casa:</b> Sim</p>
      <p><b>Prática de linguagem ou unidade temática:</b> ${unidadeTematica}</p>
      <p><b>Objeto de conhecimento:</b> ${objeto}</p>
      <p><b>Código da habilidade:</b> ${habilidade}</p>
      <p><b>Atividades desenvolvidas:</b> ${desenvolvida}</p>
    </body>
    </html>
  `

const blob = new Blob([novaPagina], { type: 'text/html' })
const url = URL.createObjectURL(blob)
const janela = window.open(url, '_blank')

if (!janela) {
  alert('Permita popups para gerar o roteiro!')
  return
}

janela.onload = () => {
  janela.print()
  URL.revokeObjectURL(url)
}
  }

    return (
      <>
      <form onSubmit={e => {e.preventDefault()}} className="w-full p-5 bg-white sm:w-150 m-auto sm:mt-10 sm:rounded-2xl flex flex-col gap-3 mb-9">
      <Titulo valor="Roteiro de Aula"/>
      <Paragrafo valor="Planejamento Pedagógico"/>
      <Hr/>
      <Label valor="Data:" type="date" aoValor={v => setData(v)}/>
      <Label valor="Ano/Serie:" type="text" aoValor={v => setAnoSerie(v)}/>
      <Label valor="Numero/Da Aula:" type="Number" aoValor={v => setNumeroDaAula(v)}/>
      <Label valor="Área Conhecimento:" type="text" aoValor={v => setAreaDeConhecimento(v)}/>
      <Label valor="Acolhida:" type="text" aoValor={v => setAcolhida(v)}/>
      <Label valor="Leitura deleite:" type="text" aoValor={v => setLeitura(v)}/>
      <Label valor="Prática de linguagem ou unidade temática:" type="text" aoValor={v => setUnidadeTematica(v)}/>
      <Label valor="Objeto de conhecimento:" type="text" aoValor={v => setObjeto(v)}/>
      <Label valor="Código da habilidade:" type="text" aoValor={v => setHabilidade(v)}/>
      <Label valor="Atividades desenvolvidas:" type="text" aoValor={v => setDesenvolvida(v)}/>
      <Botao valor="Gerar Pagina" onClick={gerarPaginar}/>
      </form>

      </>
    )
}

export default PagesAulas