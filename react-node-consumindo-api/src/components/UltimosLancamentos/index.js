import {ultimosLivros} from "./ultimosLivros.js";

function UltimosLancamentos() {
    return (
        <section className="flex flex-col items-center bg-white px-3 py-5 gap-4">
            <h2 className="text-4xl font-bold">Últimos Lançamentos</h2>
            <ul className="flex text-center gap-5">
            {ultimosLivros.map( livro => (
                <li key={livro.id} className="">
                    <img src={livro.src} alt={livro.nome}/>
                    <p className="text-base font-medium">{livro.nome}</p>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default UltimosLancamentos;