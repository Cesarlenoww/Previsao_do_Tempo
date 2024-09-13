Descrição do Código
Importações e Configuração:

Importa as bibliotecas necessárias (express, axios e path).
Configura o Express para servir arquivos estáticos da pasta public.
Chave da API:

Substitua API_KEY pela sua chave da API do OpenWeatherMap.
Rota /weather:

Recebe uma consulta com o nome da cidade (city) através da query string.
Verifica se o parâmetro city foi fornecido, retornando um erro 400 se não for.
Faz uma requisição à API do OpenWeatherMap para obter os dados meteorológicos da cidade especificada.
Extrai e organiza os dados recebidos, retornando-os em formato JSON.
Tratamento de Erros:

Se ocorrer um erro na requisição, o servidor responde com um erro 500.
Início do Servidor:

O servidor escuta na porta 3000 e imprime uma mensagem indicando que está rodando.
Passos para Usar
Instalar Dependências: Certifique-se de ter as dependências express e axios instaladas. Se ainda não as instalou, faça isso com:

Copiar código
npm install express axios
Rodar o Servidor: Execute o servidor com o comando:

Copiar código
node seu_arquivo.js
Substitua seu_arquivo.js pelo nome do seu arquivo.

Fazer Requisições: Você pode fazer uma requisição GET para http://localhost:3000/weather?city=NomeDaCidade para obter os dados do clima. Substitua NomeDaCidade pelo nome da cidade desejada.
