import { useEffect } from 'react';
import { useProduto } from '@/app/hooks/useProdutos';

export function useProdutoModal(produto, onClose) {
  const {
    atualizarProduto,
    cadastrarProduto,
    setNome,
    setDescricao,
    setPreco,
    setUrl,
    nome,
    descricao,
    preco,
    url,
  } = useProduto();

  // Atualiza os estados conforme o produto passado
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
      console.log("Erro ao atualizar");
    }
  }, [produto]);

  // Função para salvar produto, seja criando ou atualizando
  const handleSalvar = async () => {
    console.log('produtos recebidos', produto);
    console.log('Valores atuais antes de salvar:', { nome, descricao, preco, url });

    if (produto) {
      await atualizarProduto(produto.id, nome, descricao, Number(preco), url);
      window.location.reload();
    } else {
      alert("erro ao editar");
      await cadastrarProduto();
      window.location.reload();
    }
    onClose();
  };

  return { nome, descricao, preco, url, handleSalvar };
}
