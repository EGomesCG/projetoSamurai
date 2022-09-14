import axios from 'axios';
import { langColors } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

// Função que monta a array do JSON  do filtro dos projetos
export const getLansFrom = (repositories) => {
  // O map separa a propriedade de linguagem e o Reduce conta quantas vezes a linguagem aparece
  // Linha18: o data(acumulado-manipula) é o valor que gostaria  e o lang(JS,JS, PHP, RUby) é o valor atual desta array
  // Linha19: estamos concatenando o valor que já tenho e somando mais 1, mas, acaso o lang ñ exista usamos inicializamos com 0
  let stats = repositories
    .map((rep) => rep.lang)
    .reduce(
      (data, lang) => ({
        ...data,
        [lang]: (data[lang] || 0) + 1,
      }),
      []
    );
  // A [] significa que iniciamos o data como vazia

  // o operador delete é para excluir a propriedade de linguagem nulas
  delete stats.null;

  // (Objeto keys - cria uma array com todas as keys que tenhos - linguagens)
  // 1º é feito o mapeamento das linguagens, e vamos montar outra array com a cor que cada uma vai ter
  // Linha 36: Deveria está:  color: langColors[lang.toLowerCase()], que reconhece maiusculo com minusculo
  stats = Object.keys(stats)
    .map((lang) => ({
      name: lang,
      count: stats[lang],
      color: langColors[lang],
    }))
    .sort((a, b) => b.count - a.count);
  // Este sort ordena as linguagem do maior para o menor - compara objeto b com a pra ver quem é maior
  return stats;
};
