Questão 07 — Calculadora de Descontos
Descrição
Aplicativo desenvolvido com React Native e Expo para calcular a economia e o preço final de um produto após a aplicação de um desconto percentual.
Funcionalidades
- Informar o nome do produto.
- Informar o preço original.
- Informar o percentual de desconto.
- Calcular e apresentar o valor economizado.
- Calcular e apresentar o preço final.
- Validar campos obrigatórios.
- Rejeitar preço negativo e desconto fora do intervalo de 0% a 100%.
Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- useState para armazenar os campos e os resultados.
Fórmulas utilizadas
- Economia: (preço original × percentual de desconto) ÷ 100.
- Preço final: preço original − economia.
Exemplo de utilização
- Produto: Camiseta.
- Preço original: R$ 200,00.
- Desconto: 15%.
- Economia esperada: R$ 30,00.
- Preço final esperado: R$ 170,00.
Como executar
1. Abra o terminal na pasta deste projeto.
2. Instale as dependências, se necessário: npm.cmd install.
3. Inicie o projeto para navegador: npx.cmd expo start --web.
4. Abra no navegador o endereço apresentado pelo Expo.