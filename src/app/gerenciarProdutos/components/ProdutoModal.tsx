'use client';

import { useEffect } from 'react';
import { useProduto } from '@/app/hooks/useProdutos';


interface Props {
  produto: any;
  onClose: () => void;
}

export default function ProdutoModal({ produto, onClose }: Props) {
  const {
    atualizarProduto,
    setNome,
    setDescricao,
    setPreco,
    setUrl,
    nome,
    descricao,
    preco,
    url,
  } = useProduto();


  useEffect(() => {
    if (produto) {
      console.log("Produto recebido no modal:", produto);
      setNome(produto.nome);
      setDescricao(produto.descricao);
      setPreco(String(produto.preco));
      setUrl(produto.url);
    } else {
      setNome('');
      setDescricao('');
      setPreco('');
      setUrl('');
      console.log("Erro ao atualizar")
    }
  }, [produto]);

  const handleSalvar = async () => {
    console.log('produtos recebidos', produto)
    console.log('Valores atuais antes de salvar:', { nome, descricao, preco, url });

    if (produto) {
      await atualizarProduto(produto.id, nome, descricao, Number(preco), url);
      window.location.reload();
    } else {
      alert("erro ao editar")
      window.location.reload();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">{produto ? 'Editar' : 'Novo'} Produto</h2>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="URL da imagem"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
          <button
            onClick={handleSalvar}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

