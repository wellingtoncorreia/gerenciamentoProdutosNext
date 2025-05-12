'use client';

import { useState } from 'react';
import { useProduto } from '@/app/hooks/useProdutos';
import ProdutoModal from './components/ProdutoModal';
import { IProduto } from '@/app/types/Iproduto';
import Link from 'next/link';

export default function GerenciarProdutos() {
  const { produtos, removerProduto } = useProduto();

  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto | null>(null);

  const abrirModal = (produto: IProduto | null = null) => {
    setProdutoSelecionado(produto);
    setModalAberto(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gerenciar Produtos</h1>
        <Link
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          href="/cadProdutos"
        >
          + Adicionar
        </Link>
      </div>

      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">Descrição</th>
            <th className="p-3 text-left">Preço</th>
            <th className="p-3 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className="border-t border-gray-200">
              <td className="p-3">{produto.nome}</td>
              <td className="p-3">{produto.descricao}</td>
              <td className="p-3">R$ {produto.preco.toFixed(2)}</td>
              <td className="p-3 flex gap-2">
                <button
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  onClick={() => abrirModal(produto)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => removerProduto(produto.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalAberto && (
        <ProdutoModal
          produto={produtoSelecionado}
          onClose={() => setModalAberto(false)}
        />
      )}
    </div>
  );
}
