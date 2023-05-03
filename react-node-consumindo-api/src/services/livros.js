import axios from "axios";

const API = "http://localhost:8000";
const apiLivros = axios.create({
    baseURL: API
});

async function getLivros() {
    const livros = await apiLivros.get('/livros');
    return livros.data;
}

async function getFavoritos() {
    const favoritos = await apiLivros.get('/favoritos');
    return favoritos.data;
}

export {
    getLivros, getFavoritos
}