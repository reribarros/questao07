
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default function App() {

  // Guardar as informações digitadas
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');

  // Guardar os resultados
  const [economia, setEconomia] = useState('');
  const [precoFinal, setPrecoFinal] = useState('');
  const [erro, setErro] = useState('');

  // Formatar valores em reais
  function moeda(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  // Calcular o desconto
  function aplicarDesconto() {

    const valor = Number(preco.replace(',', '.'));
    const percentual = Number(desconto.replace(',', '.'));

    // Verificar se os campos foram preenchidos
    if (
      !nome.trim() ||
      preco.trim() === '' ||
      desconto.trim() === ''
    ) {
      setErro('Preencha todos os campos.');
      setEconomia('');
      setPrecoFinal('');
      return;
    }

    // Validar preço e percentual
    if (
      !Number.isFinite(valor) ||
      valor < 0 ||
      !Number.isFinite(percentual) ||
      percentual < 0 ||
      percentual > 100
    ) {
      setErro('O preço não pode ser negativo e o desconto deve estar entre 0% e 100%.');
      setEconomia('');
      setPrecoFinal('');
      return;
    }

    // Calcular a economia
    const economiaCalculada = valor * percentual / 100;

    // Calcular o preço final
    const finalCalculado = valor - economiaCalculada;

    // Apresentar os resultados
    setEconomia(moeda(economiaCalculada));
    setPrecoFinal(moeda(finalCalculado));

    setErro('');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calculadora de Descontos
      </Text>

      <Text style={styles.label}>
        Nome do produto:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemplo: Camiseta"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Preço original (R$):
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemplo: 200"
        keyboardType="decimal-pad"
        value={preco}
        onChangeText={setPreco}
      />

      <Text style={styles.label}>
        Desconto (%):
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemplo: 15"
        keyboardType="decimal-pad"
        value={desconto}
        onChangeText={setDesconto}
      />

      <View style={styles.botao}>
        <Button
          title="Aplicar desconto"
          onPress={aplicarDesconto}
          color="#AF601A"
        />
      </View>

      {erro !== '' && (

        <Text style={styles.erro}>
          {erro}
        </Text>

      )}

      {precoFinal !== '' && (

        <View style={styles.card}>

          <Text style={styles.nome}>
            {nome}
          </Text>

          <Text style={styles.texto}>
            Economia: {economia}
          </Text>

          <Text style={styles.resultado}>
            Preço final: {precoFinal}
          </Text>

        </View>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#FDF2E9',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#AF601A',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 8,
    marginBottom: 18,
    fontSize: 16,
  },

  botao: {
    marginTop: 5,
  },

  card: {
    backgroundColor: '#FDEBD0',
    padding: 22,
    borderRadius: 12,
    marginTop: 25,
  },

  nome: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#873600',
  },

  texto: {
    fontSize: 17,
    marginBottom: 12,
    color: '#333',
  },

  resultado: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#247A43',
    textAlign: 'center',
    marginTop: 8,
  },

  erro: {
    color: '#C0392B',
    textAlign: 'center',
    marginTop: 18,
    fontWeight: 'bold',
  },

});