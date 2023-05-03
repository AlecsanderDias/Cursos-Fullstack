import { useState, useEffect } from "react";
import UltimosLancamentos from "../components/UltimosLancamentos";
import { getFavoritos } from "../services/livros";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetchFavoritos();
  }, []);

  async function fetchFavoritos() {
    const livrosFavoritos = await getFavoritos();
    setFavoritos(livrosFavoritos);
  }

  return (
    <>
      <div className="bg-transparent flex justify-center p-4">
        <ul className="flex flex-wrap justify-center w-3/4">{favoritos.map(
          livro => (
            <li key={livro.id} className="flex flex-col items-center text-center">
              <p className="text-base text-white">{livro.nome}</p>
              <img className="w-3/4" src={livro.src} alt={livro.nome} />
            </li>
          )
        )}</ul>
      </div>
      <UltimosLancamentos />
    </>
  );
}

export default Favoritos;
