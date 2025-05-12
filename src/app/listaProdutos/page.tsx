"use client";

import React from 'react'
import { useProduto } from '../hooks/useProdutos';
import ProdutoCard from './components/produtoCard';


export default function ListaProdutos() {
    const {
        produtos,
        nome,
        descricao,
        preco,
        url,
        setNome,
        setDescricao,
        setPreco,
        setUrl,
        cadastrarProduto,
        removerProduto,
        atualizarProduto,
    } = useProduto();
  return (
    <div className="w-full flex justify-between flex-wrap gap-4 p-4">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
          />
        ))}
    </div>
  )
}
