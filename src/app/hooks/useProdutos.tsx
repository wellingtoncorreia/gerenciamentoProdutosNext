"use client";

import { useState, useEffect } from "react";
import api from "../lib/api";
import { IProduto } from "../types/Iproduto";
import { useRouter } from "next/navigation";

export const useProduto = () => {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [url, setUrl] = useState("");
  const router = useRouter();

  const carregarProdutos = async () => {
    try {
      const res = await api.get<IProduto[]>("/");
      setProdutos(res.data);
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  };

  const cadastrarProduto = async () => {
    if (!nome || !descricao || !preco || !url) return;

    try {
      const response = await api.post("/", {
        nome,
        descricao,
        preco: Number(preco),
        url,
      });

      if (response.status === 201 || response.status === 200) {
        alert("Produto cadastrado com sucesso!");
        router.push("/");
      }
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Ocorreu um erro ao cadastrar o produto.");
    }
  };

  const removerProduto = async (id: number) => {
    try {
      await api.delete(`/${id}`);
      carregarProdutos();
    } catch (err) {
      console.error("Erro ao remover produto:", err);
    }
  };

  const atualizarProduto = async (
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    url: string
  ) => {
    try {
      await api.put(`/${id}`, { nome, descricao, preco, url });
      carregarProdutos();
    } catch (err) {
      console.error("Erro ao atualizar produto:", err);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return {
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
    carregarProdutos,
  };
};
