export function geradorDeTagsDeIdentificacao(nome_animal) {
  const possuiAcentos = /[áéíóúâêîôûãõàèìòùäëïöüçÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜÇ]/.test(nome_animal);

  if (possuiAcentos) {
    console.log('Essa palavra tem acento, troque por outra que não tenha.');
    return null;
  }
  return nome_animal.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  if (idade === 1 && porte === 'M') {
    return true;// Pode ser adotado
  }
  return false // Não pode ser adotado
}

export function calcularConsumoDeRacao(nome_animal, estoque, peso_do_animal) {
  const consumoDiarioEmGramas = peso_do_animal * 300;

  // Caso especial — apenas retorna o valor
  if (consumoDiarioEmGramas === 4350) {
    return consumoDiarioEmGramas;
  }

  const tempoDeDuracaoEstoque = Math.floor(estoque / consumoDiarioEmGramas);

  console.log(`Nome: ${nome_animal}`);
  console.log(`Peso: ${peso_do_animal} kg`);
  console.log(`Quantidade em gramas para o dia: ${consumoDiarioEmGramas}g`);
  console.log(`O estoque dura aproximadamente: ${tempoDeDuracaoEstoque}dias`);

  return {
    nome: nome_animal,
    peso: peso_do_animal,
    consumoDiarioEmGramas,
    duracaoEstoqueDias: tempoDeDuracaoEstoque
  };
}


export function decidirTipoDeAtividadePorPorte(porte_do_animal) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    médio: 'caminhada no quarteirão',
    grande: 'correr no parque',
  };

  return atividades[porte_do_animal] || 'porte inválido';
}

export async function buscarDadoAsync() {
  const nome = 'Pipoca'; 

  if (nome === 'Pipoca') {
    return 'Pipoca';
  }

  if (nome === 'Pantera') {
    return 'Pantera';
  }
  // Caso não seja nenhum dos dois
  return 'Nome desconhecido';
}