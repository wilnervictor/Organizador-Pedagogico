import { useState } from "react";
import Botao from "../Componetes/Botao";
import Label from "../Componetes/Label";
import Titulo from "../Componetes/Titulo";
import Paragrafo from "../Componetes/Paragrafo";
import Hr from "../Componetes/Hr";

const PagesAulas = () => {
  const [data, setData] = useState("");
  const [anoSerie, setAnoSerie] = useState("");
  const [numeroDaAula, setNumeroDaAula] = useState("");
  const [areaDeConhecimento, setAreaDeConhecimento] = useState("");
  const [acolhida, setAcolhida] = useState("");
  const [leitura, setLeitura] = useState("");
  const [unidadeTematica, setUnidadeTematica] = useState("");
  const [objeto, setObjeto] = useState("");
  const [habilidade, setHabilidade] = useState("");
  const [desenvolvida, setDesenvolvida] = useState("");

  function gerarPaginar() {
    if (
      data == "" ||
      anoSerie == "" ||
      numeroDaAula == "" ||
      areaDeConhecimento == "" ||
      acolhida == "" ||
      leitura == "" ||
      unidadeTematica == "" ||
      objeto == "" ||
      habilidade == "" ||
      desenvolvida == ""
    ) {
      return;
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
        span { color: #000; }
        b { color: rgb(250, 109, 109); }
        .vao {
         color: #000;
        }
         .nao {
          color: #0000cc;
         }

          .vaoS {
         /* Cores principais */
    background-color: #000000 !important; 
    color: #ffffff !important;
    
    /* Layout da caixinha */
    padding: 5px 15px;
    display: inline-block; /* Garante que a caixa envolva o texto certinho */
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
    
    /* Forçar a cor na impressão */
    -webkit-print-color-adjust: exact; 
    print-color-adjust: exact;
}
    .naoS {
    /* Cor de fundo e texto para destaque */
    background-color: #0047ab !important; /* Vermelho bem claro para destaque */
    color: #ffffff !important;           /* Texto vermelho escuro para contraste */
    
    /* Layout idêntico para alinhar com o "Vão" */
    padding: 5px 15px;
    display: inline-block;
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
    text-decoration: none; /* Se for um link, remove o sublinhado */
    
    /* Forçar a cor na impressão (fundamental!) */
    -webkit-print-color-adjust: exact; 
    print-color-adjust: exact;
}
      </style>
    </head>
    <body>
      <h1>Roteiro de Aula</h1>
      <div class="container">
        <p class="nao"><b>Série:</b> ${anoSerie}</p>
        <p class="vao"><b>Data:</b> <span>${data}</span></p>
        <p class="vao"><b>Nº Aula:</b> ${numeroDaAula}</p>
      </div>
      <p class="vao"><b>Área Conhecimento:</b> ${areaDeConhecimento}</p>
      <p class="nao"><b>Acolhida:</b> ${acolhida}</p>
      <p class="nao"><b>Leitura deleite:</b> ${leitura}</p>
      <p class="nao"><b>Chamada diária:</b> Sim</p>
      <p class="nao"><b>Orientação e Auxílio no Para Casa:</b> Sim</p>
      <p class="vao"><b>Prática de linguagem ou unidade temática:</b> ${unidadeTematica}</p>
      <p class="vao"><b>Objeto de conhecimento:</b> ${objeto}</p>
      <p class="vao"><b>Código da habilidade:</b> ${habilidade}</p>
      <p class="vao"><b>Atividades desenvolvidas:</b> ${desenvolvida}</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p class="vaoS">Vão para a caderneta</p>
      <p class="naoS">Não vão para a caderneta</p>
    </body>
    </html>
  `;

    const blob = new Blob([novaPagina], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const janela = window.open(url, "_blank");

    if (!janela) {
      alert("Permita popups para gerar o roteiro!");
      return;
    }

    janela.onload = () => {
      janela.print();
      URL.revokeObjectURL(url);
    };
  }

  function limpar() {
    setData("");
    setNumeroDaAula("");
    setAreaDeConhecimento("");
    setAcolhida("");
    setLeitura("");
    setUnidadeTematica("");
    setObjeto("");
    setHabilidade("");
    setDesenvolvida("");
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full p-5 bg-white sm:w-150 m-auto sm:mt-10 sm:rounded-2xl flex flex-col gap-3 mb-9"
      >
        <Titulo valor="Roteiro de Aula" />
        <Paragrafo valor="Planejamento Pedagógico" />
        <Hr />
        <Label
          valor="Data:"
          type="date"
          value={data}
          aoValor={(v) => setData(v)}
        />
        <Label
          valor="Ano/Serie:"
          type="text"
          value={anoSerie}
          aoValor={(v) => setAnoSerie(v)}
        />
        <Label
          valor="Numero/Da Aula:"
          type="Number"
          value={numeroDaAula}
          aoValor={(v) => setNumeroDaAula(v)}
        />
        <Label
          valor="Área Conhecimento:"
          type="text"
          value={areaDeConhecimento}
          aoValor={(v) => setAreaDeConhecimento(v)}
        />
        <Label
          valor="Acolhida:"
          type="text"
          value={acolhida}
          aoValor={(v) => setAcolhida(v)}
        />
        <Label
          valor="Leitura deleite:"
          type="text"
          value={leitura}
          aoValor={(v) => setLeitura(v)}
        />
        <Label
          valor="Prática de linguagem ou unidade temática:"
          type="text"
          value={unidadeTematica}
          aoValor={(v) => setUnidadeTematica(v)}
        />
        <Label
          valor="Objeto de conhecimento:"
          type="text"
          value={objeto}
          aoValor={(v) => setObjeto(v)}
        />
        <Label
          valor="Código da habilidade:"
          type="text"
          value={habilidade}
          aoValor={(v) => setHabilidade(v)}
        />
        <Label
          valor="Atividades desenvolvidas:"
          type="text"
          value={desenvolvida}
          aoValor={(v) => setDesenvolvida(v)}
        />
         <div className="flex justify-between">
        <Botao valor="Limpar" onClick={limpar} />
        <Botao valor="Gerar Pagina" onClick={gerarPaginar} />
         </div>
      </form>
    </>
  );
};

export default PagesAulas;
