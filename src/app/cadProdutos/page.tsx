"use client";

import { useProduto } from '../hooks/useProdutos';

export default function CadastroProduto() {
    const { nome, descricao, preco, url, setNome, setDescricao, setPreco, setUrl, cadastrarProduto } = useProduto();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    cadastrarProduto();
                }}
                className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-3"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Cadastrar Produto</h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    />
                    <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="URL da Imagem"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
