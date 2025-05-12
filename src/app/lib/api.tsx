import axios from "axios"; 
// Importa a biblioteca Axios, que é usada para fazer requisições HTTP.

import { produtosData } from "./data/produtosData"; 
// Importa um conjunto de dados mockados (produtosData) de um arquivo local, que será usado como fallback em caso de erro.

const api = axios.create({
  baseURL: "http://localhost:8080/produtos", 
  // Define a URL base para todas as requisições feitas com esta instância do Axios.
  headers: {
    "Content-Type": "application/json", 
    // Define o cabeçalho padrão para as requisições, indicando que o conteúdo será no formato JSON.
  },
});
// Cria uma instância personalizada do Axios com configurações específicas.

export default api; 
// Exporta a instância do Axios para que possa ser usada em outros arquivos do projeto.

api.interceptors.response.use(
  (response) => response, 
  // Intercepta as respostas bem-sucedidas e simplesmente as retorna sem alterações.

  (error) => {
    if (!error.response) { 
      // Verifica se o erro não possui uma resposta do servidor (ex.: erro de rede ou servidor indisponível).
      return Promise.resolve({
        data: produtosData, 
        // Retorna uma Promise resolvida com os dados mockados (produtosData) como fallback.
      });
    }
    return Promise.reject(error); 
    // Caso o erro tenha uma resposta do servidor, rejeita a Promise com o erro original.
  }
);
// Adiciona um interceptor para tratar respostas da API. Ele lida com erros de rede retornando dados mockados.