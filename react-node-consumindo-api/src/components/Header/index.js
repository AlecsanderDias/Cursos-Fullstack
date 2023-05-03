import Logo from "../Logo";
import perfil from "../../assets/imagens/perfil.svg";
import sacola from "../../assets/imagens/sacola.svg";
import OpcoesHeader from "../../components/OpcoesHeader";
import { Link } from "react-router-dom";

function Header() {
    const opcoes = [{ nome: 'Categorias', link: '/' }, { nome: 'Minha Estante', link: '/' }, { nome: 'Favoritos', link: '/favoritos' }];
    const imagens = [{ nome: perfil, link: "/" }, { nome: sacola, link: "/" }];
    return (
        <header className="bg-gray-200 flex justify-center gap-16 py-3 px-2">
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader dados={opcoes} />
            <OpcoesHeader dados={imagens} />
        </header>
    )
}

export default Header