import { Link } from "react-router-dom";

function OpcoesHeader({dados}) {
    if(dados[0]["nome"].includes("svg")) {
        return (
            <ul className="flex items-center text-ml gap-7">
                {dados.map((dado, indice) => 
                    <li className="cursor-pointer" key={indice}>
                        <Link to={dado["link"]}>
                            <img src={dado["nome"]} alt="Ícone" />
                        </Link>
                    </li>)}
            </ul>
          ) 
    } else {
        return (
          <ul className="flex items-center text-ml gap-5">
                {dados.map((dado, indice) => 
                    <li className="uppercase cursor-pointer" key={indice}>
                        <Link to={dado["link"]}>
                            <p>{dado["nome"]}</p>
                        </Link>
                    </li>)}
          </ul>
        )
    }
}

export default OpcoesHeader;