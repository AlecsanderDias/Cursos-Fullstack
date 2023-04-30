function OpcoesHeader({dados}) {
    if(dados[0].includes("static")) {
        return (
            <ul className="flex items-center text-ml gap-7">
                {dados.map((dado, indice) => <li className="cursor-pointer" key={indice}><img src={dado} alt="Ícone" /></li>)}
            </ul>
          ) 
    } else {
        return (
          <ul className="flex items-center text-ml gap-5">
              {dados.map(dado => <li className="uppercase cursor-pointer" key={dado}><p>{dado}</p></li>)}
          </ul>
        )
    }
}

export default OpcoesHeader;