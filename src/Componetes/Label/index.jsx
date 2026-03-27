const Label = (props) => {
  return (
    <label className="text-[20px] flex flex-col text-brand-blue">
      {props.valor}

      <input
        className="w-full px-4 py-2 
           bg-white border border-sky-100 rounded-md
           text-slate-600 placeholder-slate-400
           outline-none transition-all
           /* Sombra personalizada aqui */
           shadow-[0_4px_12px_rgba(186,230,253,0.4)] 
           focus:shadow-[0_4px_20px_rgba(186,230,253,0.6)]
           focus:border-sky-300"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(v) => props.aoValor(v.target.value)}
        required
      />
    </label>
  );
};

export default Label;
