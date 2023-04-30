import { livros } from "./livros.js";
import {useState } from "react";

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState(livros);
    
    return (
        <section className="flex flex-col justify-center items-center py-5 gap-3">
            <h2 className="text-4xl font-bold text-white pb-5">Já sabe por onde começar</h2>
            <h3 className="text-base font-medium text-white">Encontre seu livro em nossa estante.</h3>
            <input className="pesquisa" placeholder="Escreva sua próxima leitura" onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <ul className="flex flex-wrap justify-center w-3/4">{livrosPesquisados.map(
                livro => (
                    <li key={livro.id} className="flex flex-col items-center text-center">
                        <p className="text-base text-white">{livro.nome}</p>
                        <img className="w-3/4" src={livro.src} alt={livro.nome}/>
                    </li>
                )
            )}</ul>
        </section>
    )
}

export default Pesquisa;